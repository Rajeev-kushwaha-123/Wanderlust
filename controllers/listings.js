const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


// Index: show all listings
module.exports.index = async (req, res) => {
    const allListings = await Listing.find();
    res.render("listings/index", { allListings });
};

// Render form to create new listing
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new");
};

// Show a specific listing
module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" }
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/show", { listing });
};

// Create a new listing
module.exports.createListing = async (req, res) => {
  // Geocode the location
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.location,
      limit: 1,
    })
    .send();

  if (!response.body.features.length) {
    req.flash("error", "Invalid location. Please enter a valid place.");
    return res.redirect("/listings/new");
  }

  const geometry = response.body.features[0].geometry; // { type: "Point", coordinates: [lng, lat] }

  const { title, description, price, location, country } =req.body;

  if (!req.file) {
    req.flash("error", "Image upload is required.");
    return res.redirect("/listings/new");
  }

  // Create new listing
  const newListing = new Listing({
    title,
    description,
    price,
    location,
    country,
    image: {
      url: req.file.path,
      filename: req.file.filename,
    },
    owner: req.user._id,
    geometry, // <-- Save geolocation
  });

  await newListing.save();
  req.flash("success", "Listing created successfully!");
  res.redirect("/listings");
};


// Render form to edit a listing
module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    req.flash("success", "Edit form loaded!");
    res.render("listings/edit", { listing });
};

// Update a listing
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const { title, description, price, location, country } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }

    // Update image if a new one was uploaded
    if (req.file) {
        // Delete old image from Cloudinary if it exists
        if (listing.image && listing.image.filename) {
            const { cloudinary } = require("../cloudConfig.js");
            try {
                await cloudinary.uploader.destroy(listing.image.filename);
            } catch (err) {
                console.error("Failed to delete old image from Cloudinary:", err);
            }
        }

        // Update with new image
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    // Update other fields
    listing.title = title;
    listing.description = description;
    listing.price = price;
    listing.location = location;
    listing.country = country;

    await listing.save();

    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
};

// Delete a listing (and its image)
module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }

    // Delete associated image from Cloudinary if it exists
    if (listing.image && listing.image.filename) {
        const { cloudinary } = require("../cloudConfig.js");
        try {
            await cloudinary.uploader.destroy(listing.image.filename);
        } catch (err) {
            console.error("Failed to delete image from Cloudinary:", err);
        }
    }

    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
};

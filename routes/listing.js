const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const validateListing = require("../middlewares/validateListing.js");
const { isLoggedIn, isOwner } = require("../middlewares/isLoggedIn.js");
const listings = require("../controllers/listings.js");
const multer = require("multer");
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage});

// Index
router.get("/", wrapAsync(listings.index));

// New Form
router.get("/new", isLoggedIn, listings.renderNewForm);

// Show
router.get("/:id", wrapAsync(listings.showListing));

// Create
router.post("/", isLoggedIn, upload.single("imageFile"), validateListing, wrapAsync(listings.createListing));

// Edit Form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listings.renderEditForm));

// Update
router.put("/:id",isLoggedIn, isOwner, upload.single("imageFile"),  validateListing, wrapAsync(listings.updateListing));

// Delete
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listings.deleteListing));

module.exports = router;

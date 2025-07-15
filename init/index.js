const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js"); // ✅ Check path if needed

mongoose.connect("mongodb://localhost:27017/wanderlust", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Could not connect to MongoDB", err);
});

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        initdata.data = initdata.data.map((obj) => ({
            ...obj,
            owner: "686bfbb8988801d230d1f11c" // ✅ Make sure this ObjectId exists in your User collection
        }));
        await Listing.insertMany(initdata.data);
        console.log("Database seeded with sample listings.");
    } catch (err) {
        console.error("Seeding error:", err);
    } finally {
        mongoose.connection.close();
    }
};

initDB();

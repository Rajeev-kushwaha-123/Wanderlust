const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// Adds username, hash & salt fields + static methods
userSchema.plugin(passportLocalMongoose);  // It handles username and password automatically

module.exports = mongoose.model("User", userSchema);

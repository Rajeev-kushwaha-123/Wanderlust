const express = require("express");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl, isLoggedIn } = require("../middlewares/isLoggedIn");
const users = require("../controllers/users");
const router = express.Router();

// Temporary route — should be in listings, not here
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new");
});

// Register
router.get("/register", users.renderRegister);
router.post("/register", wrapAsync(users.register));

// Login
router.get("/login", users.renderLogin);
router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/login"
    }),
    users.login
);

// Logout
router.get("/logout", users.logout);

module.exports = router;

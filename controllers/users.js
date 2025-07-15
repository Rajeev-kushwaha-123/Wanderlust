// controllers/user.js

const User = require("../models/user");

// Render registration form
module.exports.renderRegister = (req, res) => {
    res.render("users/register");
};

// Handle registration
module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash("success", "Welcome to WanderLust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/register");
    }
};

// Render login form
module.exports.renderLogin = (req, res) => {
    res.render("users/login");
};

// Handle login
module.exports.login = (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

// Handle logout
module.exports.logout = (req, res, next) => {
    req.logout(err => {
        if (err) return next(err);
        req.flash("success", "Logged you out!");
        res.redirect("/listings");
    });
};

const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const validateReview = require("../middlewares/validateReview");
const { isLoggedIn, isReviewAuthor } = require("../middlewares/isLoggedIn.js");
const reviews = require("../controllers/reviews.js");

// Create a new review
router.post("/", isLoggedIn, validateReview, wrapAsync(reviews.createReview));

// Delete a review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviews.deleteReview));

module.exports = router;

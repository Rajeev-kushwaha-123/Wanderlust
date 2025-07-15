const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

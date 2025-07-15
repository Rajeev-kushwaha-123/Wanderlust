const listingSchema = require("../schemas/listingSchema.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports = (req, res, next) => {
  const { error } = listingSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const message = error.details.map(el => el.message).join(", ");
    throw new ExpressError(message, 400);
  }
  next();
};


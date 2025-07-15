const Joi = require("joi");

const listingSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Title is required"
  }),
  description: Joi.string().required().messages({
    "string.empty": "Description is required"
  }),
  price: Joi.number().required().min(0).messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required"
  }),
  location: Joi.string().optional().allow(""),
  country: Joi.string().optional().allow("")
});

module.exports = listingSchema;


module.exports.reviewSchema=Joi.object({
  review:Joi.object({
    rating:Joi.number().required().min(1).max(5),
    comment:Joi.string().required()
  }).required(),
})
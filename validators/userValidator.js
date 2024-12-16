//joi schema for basic validation

const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  email: Joi.string().email().required(),
});

module.exports = {
  validateUser: (data) => userSchema.validate(data),
};

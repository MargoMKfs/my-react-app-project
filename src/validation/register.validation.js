import Joi from "joi-browser";

const registerSchema = {
  regisName: Joi.string().min(4).max(30).required().label("Full Name"),
  regisEmail: Joi.string().email().min(6).max(30).required().label("Email"),
  regisPassword: Joi.string().min(6).max(12).required().label("Password"),
};

export default registerSchema;

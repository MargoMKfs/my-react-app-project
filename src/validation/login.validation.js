import Joi from "joi-browser";

const loginSchema = {
  loginEmail: Joi.string().email().min(6).max(48).required().label("Email"),
  loginPassword: Joi.string().min(6).max(20).required().label("Password"),
};

export default loginSchema;

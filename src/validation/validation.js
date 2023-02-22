import Joi from "joi-browser";

const validate = (toValidate, schema) => {
  return Joi.validate(toValidate, schema, { abortEarly: false });
};
export default validate;

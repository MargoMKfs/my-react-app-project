import Joi from "joi-browser";

const editCardsInputSchema = {
  title: Joi.string().min(2).max(256).required(),
  subTitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  address: Joi.string().min(2).max(256).required(),
  phone: Joi.string()
    .min(9)
    .max(14)
    .regex(/^[0-9]+$/)
    .required(),
  url: Joi.string().min(6).max(1024),
  alt: Joi.string().min(2).max(256),
};

export default editCardsInputSchema;

import Joi from "joi-browser";

const editCardsInputSchema = {
  title: Joi.string().required().label("Title").trim(),
  subTitle: Joi.string().required().min(2).max(30).label("Sub Title").trim(),
  description: Joi.string()
    .required()
    .min(10)
    .max(255)
    .label("Description")
    .trim(),
  address: Joi.string().required().label("Address").trim(),
  phone: Joi.string()
    .required()
    .label("Phone Number")
    .length(10)
    .regex(/^[0-9]+$/),
  url: Joi.string().required().label("URL"),
};

export default editCardsInputSchema;

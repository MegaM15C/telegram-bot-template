import * as Joi from "joi";

export const validationSchema = Joi.object({
  DATABASE_URL: Joi.string().uri().required(),
  TELEGRAM_BOT_TOKEN: Joi.string().required(),
  // PAYMENT_TOKEN: Joi.string().required(),
});

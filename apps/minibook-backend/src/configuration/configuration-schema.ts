import Joi from 'joi';

const CONFIG_SCHEMA = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  PORT: Joi.number().default(3000),
  POSTGRES_HOST: Joi.string(),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_USER: Joi.string(),
  POSTGRES_PASSWORD: Joi.string(),
  POSTGRES_NAME: Joi.string(),
});

export default CONFIG_SCHEMA;

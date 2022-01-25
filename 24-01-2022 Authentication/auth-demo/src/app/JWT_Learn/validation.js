const Joi = require('@hapi/joi');


//Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
      name: Joi.string()
      .min(0)
      .required(),
      email: Joi.string()
      .min(0)
      .required()
      .email(),
      password: Joi.string()
      .min(0).
      required(),
    });
    return schema.validate(data);
  };

const loginValidation = (data) => {
   
    const schema = {
        email: Joi.string()
            .min(0)
            .email(),
        password: Joi.string()
            .min(0)
            .required()
    };
     return Joi.validate(data,schema);
    }

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
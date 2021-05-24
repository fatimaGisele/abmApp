const Joi = require('joi');

const schema = {
    createUser : Joi.object().keys({
        name: Joi.string().required(),
        mail: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')),
    }),
    loginUser : Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$'))
    })
}

module.exports = schema;
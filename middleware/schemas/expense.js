const Joi = require('joi');

const schema = {
    addTo: Joi.object().keys({
        concept: Joi.string().required(),
        amount: Joi.number().positive().required(),
        date: Joi.date().require()
    })
}

module.exports= schema;
const Joi = require('joi');

const schema = {
    addTo: Joi.object().keys({
        amount: Joi.number().positive().required(),
        date: Joi.date().require()
    })
}

module.exports= schema;
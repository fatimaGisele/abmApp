const Joi = require('joi');

const schema = Joi.number().positive().required();

module.exports = schema;
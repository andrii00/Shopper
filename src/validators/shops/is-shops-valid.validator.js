const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).required()
})

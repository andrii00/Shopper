const Joi = require('joi')

module.exports = Joi.object().keys({
    address: Joi.string().trim().min(2).required(),
    email: Joi.string().trim().min(2).required(),
    name: Joi.string().trim().min(2).required(),
    phone: Joi.number().required(),

    products: Joi.array().items(
        Joi.object().keys({
            id: Joi.number().required(),
            count: Joi.number().min(1).required(),
        })
    ).required()
})

const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),

    shop_id: Joi.number().required()
})

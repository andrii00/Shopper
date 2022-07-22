const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().trim().min(2).optional(),
    description: Joi.string().optional(),
    image: Joi.string().optional(),
    price: Joi.number().optional(),

    shop_id: Joi.number().optional()
})

const Joi = require('joi')

const { shopsValidators } = require("../../validators");

module.exports = (req, res, next) => {
    try {
        const shop = req.body;

        const { error } = Joi.validate(shop, shopsValidators.isShopValid)

       if(error) {
           next(error)
       }

        next();
    } catch (error) {
        next(error)
    }
}

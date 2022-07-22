const Joi = require('joi')

const { shoppingCartsValidators } = require("../../validators");

module.exports = (req, res, next) => {
    try {
        const shoppingCart = req.body;

        const { error } = Joi.validate(shoppingCart, shoppingCartsValidators.isShoppingCartValid)

        if(error) {
            next(error)
        }

        next();
    } catch (error) {
        next(error)
    }
}
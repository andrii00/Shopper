const Joi = require('joi')

const { productsValidators } = require("../../validators");

module.exports = (req, res, next) => {
    try {
        const product = req.body;

        const { error } = Joi.validate(product, productsValidators.isProductUpdateValid)

       if(error) {
           next(error)
       }

        next();
    } catch (error) {
        next(error)
    }
}

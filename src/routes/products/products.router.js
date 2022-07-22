const { Router } = require('express');

const { productsController } = require("../../controllers");
const {
    productsMiddlewares: { isProductDataValid, isProductUpdateDataValid }
} = require("../../middlewares");

const productsRouter = Router();

productsRouter.get('/', productsController.getAllProducts)

productsRouter.get('/:id', productsController.getProductById)

productsRouter.post('/', isProductDataValid , productsController.createProduct)

productsRouter.put('/:id', isProductUpdateDataValid, productsController.updateProduct)

productsRouter.delete('/:id', productsController.deleteProduct)

module.exports = productsRouter;

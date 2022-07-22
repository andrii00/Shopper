const { Router } = require('express');

const { shoppingCartsController } = require("../../controllers");
const {
    shoppingCartsMiddlewares: { isShoppingCartDataValid }
} = require("../../middlewares");

const shoppingCartsRouter = Router();

shoppingCartsRouter.get('/', shoppingCartsController.getAllShoppingCarts)

shoppingCartsRouter.get('/:id', shoppingCartsController.getShoppingCartById)

shoppingCartsRouter.post('/', isShoppingCartDataValid , shoppingCartsController.createShoppingCart)

shoppingCartsRouter.delete('/:id', shoppingCartsController.deleteShoppingCart)

module.exports = shoppingCartsRouter;

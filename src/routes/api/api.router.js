const { Router } = require('express')

const shopsRouter = require("../shops/shops.router");
const productsRouter = require("../products/products.router");
const shoppingCartsRouter = require("../shopping-carts/shopping-carts.router");

const apiRouter = Router();

apiRouter.use('/shops', shopsRouter)
apiRouter.use('/products', productsRouter)
apiRouter.use('/shopping-carts', shoppingCartsRouter)

module.exports = apiRouter;


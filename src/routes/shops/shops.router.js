const { Router } = require('express');

const { shopsController } = require("../../controllers");
const {
    shopsMiddlewares: { isShopDataValid }
} = require("../../middlewares");

const shopsRouter = Router();

shopsRouter.get('/', shopsController.getAllShops)

shopsRouter.get('/:id', shopsController.getShopById)

shopsRouter.post('/', isShopDataValid , shopsController.createShop)

shopsRouter.put('/:id', isShopDataValid, shopsController.updateShop)

shopsRouter.delete('/:id', shopsController.deleteShop)

module.exports = shopsRouter;

const { shoppingCartsService } = require("../../services");
const { countCartTotalSum } = require("../../helpers");

module.exports = {
    getAllShoppingCarts:  async (req, res, next) => {
        try {
            let shops = await shoppingCartsService.getShoppingCarts()
            shops = shops.map(cart => countCartTotalSum(cart))

            res.json(shops)
        } catch (error) {
            next(error)
        }
    },

    getShoppingCartById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const shop = await shoppingCartsService.getShoppingCartById(id)

            res.json(shop)
        } catch (error) {
            next(error)
        }
    },

    createShoppingCart: async (req, res, next) => {
        try {
            const shop = req.body;

            const createdShoppingCart = await shoppingCartsService.creatShoppingCart(shop);

            res.json(createdShoppingCart)
        } catch (error) {
            next(error)
        }
    },

    deleteShoppingCart: async (req, res, next) => {
        try {
            const { id } = req.params;

            await shoppingCartsService.deleteShoppingCart(id)
            
            res.end();
        } catch (error) {
            next(error) 
        }
    }
}

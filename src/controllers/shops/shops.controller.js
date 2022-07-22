const { shopsService } = require("../../services");

module.exports = {
    getAllShops:  async (req, res, next) => {
        try {
            const shops = await shopsService.getShops()

            res.json(shops)
        } catch (error) {
            next(error)
        }
    },

    getShopById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const shop = await shopsService.getShopById(id)

            res.json(shop)
        } catch (error) {
            next(error)
        }
    },

    createShop: async (req, res, next) => {
        try {
            const shop = req.body;

            const createdShop = await shopsService.creatShop(shop);

            res.json(createdShop)
        } catch (error) {
            next(error)
        }
    },

    updateShop: async (req, res, next) => {
        try {
            const data = req.body;
            const { id } = req.params;

            const updateShop = await shopsService.updateShop(id,data)
            
            res.json(updateShop)
        } catch (error) {
            next(error)
        }
    },

    deleteShop: async (req, res, next) => {
        try {
            const { id } = req.params;

            await shopsService.deleteShop(id)
            
            res.end();
        } catch (error) {
            next(error) 
        }
    }
}

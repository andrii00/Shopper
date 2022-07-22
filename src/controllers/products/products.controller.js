const { productsService } = require("../../services");

module.exports = {
    getAllProducts:  async (req, res, next) => {
        try {
            const shops = await productsService.getProducts()

            res.json(shops)
        } catch (error) {
            next(error)
        }
    },

    getProductById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const shop = await productsService.getProductById(id)

            res.json(shop)
        } catch (error) {
            next(error)
        }
    },

    createProduct: async (req, res, next) => {
        try {
            const shop = req.body;

            const createdShop = await productsService.creatProduct(shop);

            res.json(createdShop)
        } catch (error) {
            next(error)
        }
    },

    updateProduct: async (req, res, next) => {
        try {
            const data = req.body;
            const { id } = req.params;

            const updateShop = await productsService.updateProduct(id,data)
            
            res.json(updateShop)
        } catch (error) {
            next(error)
        }
    },

    deleteProduct: async (req, res, next) => {
        try {
            const { id } = req.params;

            await productsService.deleteProduct(id)
            
            res.end();
        } catch (error) {
            next(error) 
        }
    }
}

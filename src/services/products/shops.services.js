const { ProductsModel, ShopModel } = require('../../db/models')

module.exports = {
    creatProduct: async (product) => {
        return ProductsModel.create(product)
    },

    getProducts: () => {
        return ProductsModel.findAll({
            include: ShopModel
        });
    },

    getProductById: (id) => {
        return ProductsModel.findOne({
            where: { id },
            include: ShopModel
        });
    },

    updateProduct: (id, data) => {
        return ProductsModel.update(data, {
                where: { id }
            }
        )
    },

    deleteProduct: async (id) => {
        await ProductsModel.destroy({
            where: { id }
        });
    },
}

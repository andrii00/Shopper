const { ShopModel } = require('../../db/models')

module.exports = {
    creatShop: async (shop) => {
        return ShopModel.create(shop)
    },

    getShops: () => {
        return ShopModel.findAll();
    },

    getShopById: (id) => {
        return ShopModel.findOne({
            where: { id }
        });
    },

    updateShop: (id, data) => {
        return ShopModel.update(data, {
                where: { id }
            }
        )
    },

    deleteShop: async (id) => {
        await ShopModel.destroy({
            where: { id }
        });
    },
}

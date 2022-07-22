const { ShoppingCartsModel, ProductsModel, ShopModel, ProductsShoppingCartsModel } = require('../../db/models')

module.exports = {
    creatShoppingCart: async ({ products, ...shoppingCart }) => {
        const createdShoppingCart = await ShoppingCartsModel.create(shoppingCart);

        const mappedData = products.map(({ id, count }) => ({
            product_id: id,
            shopping_cart_id: createdShoppingCart.id,
            count
        }))

        await ProductsShoppingCartsModel.bulkCreate(mappedData);

        return createdShoppingCart;
    },

    getShoppingCarts: () => {
        return ShoppingCartsModel.findAll({
            include: {
                model: ProductsModel,
                include: ShopModel
            }
        });
    },

    getShoppingCartById: (id) => {
        return ShoppingCartsModel.findOne({
            where: { id },
            include: {
                model: ProductsModel,
                include: ShopModel
            }
        });
    },

    deleteShoppingCart: async (id) => {
        await ShoppingCartsModel.destroy({
            where: { id }
        });
    },
}

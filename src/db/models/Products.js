const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

class Products extends Model {
}

Products.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.FLOAT,
    },

    description: {
        type: DataTypes.STRING,
    },

    shop_id: {
        type: DataTypes.INTEGER,
    }
}, { sequelize })

const ShopsModel = require('./Shops');
const ShoppingCartsModel = require('./ShoppingCarts');
const ProductsShoppingCartsModel = require('./ProductsShoppingCarts');

Products.belongsTo(ShopsModel, { foreignKey: 'shop_id' });

Products.belongsToMany(ShoppingCartsModel, {
    through: ProductsShoppingCartsModel,
    onDelete: 'cascade',
    foreignKey: 'product_id'
});

ShoppingCartsModel.belongsToMany(Products, {
    through: ProductsShoppingCartsModel,
    foreignKey: 'shopping_cart_id'
});

module.exports = Products;

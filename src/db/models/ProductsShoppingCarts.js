const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

class ProductsShoppingCarts extends Model {
}

ProductsShoppingCarts.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    count: { type: DataTypes.INTEGER }


}, { sequelize })

module.exports = ProductsShoppingCarts;
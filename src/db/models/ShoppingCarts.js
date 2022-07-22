const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

class ShoppingCarts extends Model {
}

ShoppingCarts.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
    },

    phone: {
        type: DataTypes.BIGINT,
    }
}, { sequelize })

module.exports = ShoppingCarts;

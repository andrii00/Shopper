const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

class Shops extends Model {
}

Shops.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize })

module.exports = Shops;
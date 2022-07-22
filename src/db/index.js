const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    "delivery_store",
    'postgres',
    'Fylhsq12130509!',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: "5432"
    }
)
module.exports.sequelize = sequelize
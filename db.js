const Sequelize = require("sequelize")

const sequelize = new Sequelize("mydb", "root", "",{
    dialect: "mysql",
    host: "localhost",
    port: 3306,
})

module.exports = sequelize
const Sequelize = require("sequelize")
const dataBase = require("./db")

const Produto = dataBase.define("produto", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})

module.exports = Produto;
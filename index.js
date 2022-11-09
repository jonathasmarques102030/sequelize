(async () =>{
    const dataBase = require("./db")
    const produto = require("./produto")
    const usuario = require("./usuario")
    await dataBase.sync()
})();
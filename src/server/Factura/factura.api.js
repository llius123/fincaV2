var exports = module.exports = {};
const connection = require("../connection");

exports.todasFacturas = function (app) {
    app.get("/todasFacturas", function (req, res) {
        connection.query("select * from factura", function ( error, result) {
            if (error) console.log(error);
            res.end(res.json(result))
        })
    })
}

exports.todosLosTipos = function (app) {
    app.get("/todosLosTipos", function (req, res) {
        connection.query("select * from tipo_factura", function (error, result) {
            if (error) console.log(error);
            res.end(res.json(result))
        })
    })
}
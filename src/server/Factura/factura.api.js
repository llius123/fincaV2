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
var exports = module.exports = {};
const connection = require("../connection");

exports.listaTodasActas = function (app) {
    app.get("/listaTodasActas", function (req, res) {
        connection.query("select * from actas order by fecha DESC", function (error, result) {
            if (error) console.log(error);
            res.end(res.json(result));
        });
    });
}
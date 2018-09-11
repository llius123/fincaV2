var exports = module.exports = {};
const metodos = require("../connection");
const connection = metodos.connection;

exports.listaTodasActas = function (app) {
    app.get("/listaTodasActas", function (req, res) {
        connection.query("select * from actas order by fecha DESC", function (error, result) {
            if (error) console.log(error);
            res.end(res.json(result));
        });
    });
}

exports.busquedaFecha = function (app) {
    app.get("/busquedaFecha/:fecha", function (req, res) {
        connection.query("select * from actas where YEAR(fecha) = ?",
            [req.params.fecha],
            function (error, result) {
                if (error) console.log(error);
                res.end(res.json(result))
            });
    });
}
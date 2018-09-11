var exports = module.exports = {};
const metodos = require("../connection");
const connection = metodos.connection;

exports.nuevaIncidencia = function (app) {
    app.post("/nuevaIncidencia/:puerta/:email/:telefono/:descripcion", function (req, res) {
        connection.query("INSERT INTO incidencia(puerta_local,email,telefono,descripcion) VALUES (?,?,?,?)",
            [req.params.puerta, req.params.email, req.params.telefono, req.params.descripcion],
            function (error, result) {
                if (error) console.log(error);
                res.end(res.json(result))
            })
    })
}
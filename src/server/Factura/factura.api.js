var exports = module.exports = {};
const connection = require("../connection");

exports.todasFacturas = function (app) {
    app.get("/todasFacturas", function (req, res) {
        connection.query("select * from factura ", function ( error, result) {
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

exports.buscarPorTipo = function (app) {
    app.get("/buscarPorTipo/:tipo", function (req, res) {
        connection.query(
            `select 
            f.id,
            f.nombre_empresa,
            f.descripcion,
            f.base_imponible,
            f.total_factura,
            f.imagen_factura,
            f.fecha,
            f.tipo_id,
            f.iva,
            f.cuota_iva,
            f.retencion,
            f.cuota_retencion
            from factura f, tipo_factura tf 
            where f.tipo_id = tf.id 
            and tf.tipo = ? `,
            [req.params.tipo],
            function(error, result) {
                if(error) console.log(error);
                res.end(res.json(result))
            })
    })
}
exports.buscarPorFecha = function(app) {
  app.get("/buscarPorFecha/:fecha1/:fecha2", function(req, res) {
    connection.query(
      "select * from factura where fecha between ? and ?",
      [req.params.fecha1,req.params.fecha2],
      function(error, result) {
        if (error) console.log(error);
        res.end(res.json(result));
      }
    );
  });
};
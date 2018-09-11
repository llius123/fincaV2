var exports = module.exports = {};
const metodos = require("../connection");
const connection = metodos.connection;

exports.loggin = function (app) {
  app.get("/loggin/:usu/:pass", function (req, res) {
    connection.query(
      "select * from usuario where usuario=? and contrasenya=?",
      [req.params.usu, req.params.pass],
      function (error, result) {
        if (error) console.log(error);
        res.end(res.json(result));
      }
    );
  });
}

//Actualizar usuario 

exports.actualizarUsuario = function (app) {
  app.put("/actualizarUsuario/:id/:nombre/:telefono/:puerta/:usuario/:contrasenya/:tipo_id", function (req, res) {
    connection.query(
      "update usuario  set nombre = ?, telefono = ?, puerta = ?, tipo_id = ?, usuario = ?, contrasenya = ? where id = ? ",
      [req.params.nombre,req.params.telefono,req.params.puerta,req.params.tipo_id,req.params.usuario,req.params.contrasenya,req.params.id],
      function (error, result){
        if (error) console.log(error);
        res.end(res.json(result));
      }
    )
  })
}

//Buscar por id
exports.usuarioId = function (app) {
  app.get('/usuarioId/:id', function (req, res) {
    connection.query(
      "select * from usuario where id = ?",
      [req.params.id],
      function (error, result) {
        if(error) throw error;
        res.end(res.json(result))
      }
    );
  });
}
var exports = module.exports = {};
const connection = require("../connection");

exports.loggin = function(app){
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
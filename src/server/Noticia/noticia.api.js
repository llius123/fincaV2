var exports = module.exports = {};
const metodos = require("../connection");
const connection = metodos.connection;

exports.todasNoticias = function(app) {
    app.get("/todasNoticias", function(req, res) {
    connection.query(
      "select * from noticias order by fecha",
      function(error, result) {
        if (error) console.log(error);
        res.end(res.json(result));
      }
    );
  });
};
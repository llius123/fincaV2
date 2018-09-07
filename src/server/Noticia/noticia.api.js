var exports = module.exports = {};
const connection = require("../connection");

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
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //password: "mellamojesus1361",
  database: "fincav2"
});

module.exports = connection;
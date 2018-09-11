const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "fincav2"
});

var DIR = './src/server/Archivos';
//module.exports = connection;
module.exports = {
  connection: connection,
  DIR: DIR
}
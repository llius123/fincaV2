const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  //password: "123456",
  database: "fincav2"
});

var DIR = 'ArchivosFOTOS2/';
//module.exports = connection;
module.exports = {
  connection: connection,
  DIR: DIR
}
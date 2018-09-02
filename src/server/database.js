const express = require("express");
const app = express();
const connection = require("./connection");
const bodyParser = require("body-parser");
const cors = require("cors");

const usuario = require('./Usuario/usuario.api')
const actas = require('./Actas/actas.api')
const factura = require('./Factura/factura.api')

process.setMaxListeners(0);
connection.connect(function (err) {
  if (err) throw err;
  console.log(
    "Conectado a Finca --> localhost:3000 || Cors enabled, mas info en README"
  );
}); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create app server
const server = app.listen(3000);

//PAra activar el cors en toda la api
app.use(cors());

app.get("/", function (req, res) {
  res.send("FincaV2 API");
});

//USUARIO
usuario.loggin(app);
usuario.actualizarUsuario(app);
usuario.usuarioId(app);

//Actas
actas.listaTodasActas(app)

//Factura
factura.todasFacturas(app)
factura.todosLosTipos(app)

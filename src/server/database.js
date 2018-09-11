const express = require("express");
const app = express();
const metodos = require("./connection");
const connection = metodos.connection;
const bodyParser = require("body-parser");
const cors = require("cors");

const usuario = require("./Usuario/usuario.api");
const actas = require("./Actas/actas.api");
const factura = require("./Factura/factura.api");
const incidencia = require("./Incidencia/incidencia.api");
const noticia = require("./Noticia/noticia.api.js");
const subirArchivos = require("./file-uploader")

process.setMaxListeners(0);
connection.connect(function(err) {
  if (err) throw err;
  console.log(
    "Conectado a Finca --> localhost:3000 || Cors enabled, mas info en README"
  );
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "POST", "GET", "PUSH");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
})

//create app server
const server = app.listen(3000);

//PAra activar el cors en toda la api
app.use(cors());


app.get("/", function(req, res) {
  res.send("FincaV2 API");
});

//USUARIO
usuario.loggin(app);
usuario.actualizarUsuario(app);
usuario.usuarioId(app);

//Actas
actas.listaTodasActas(app);
actas.busquedaFecha(app);

//Factura
factura.todasFacturas(app);
factura.todosLosTipos(app);
factura.buscarPorTipo(app);
factura.buscarPorFecha(app);
factura.foto(app);

//Incidencias
incidencia.nuevaIncidencia(app);

//Noticias
noticia.todasNoticias(app);

//Subir archivos
subirArchivos.subirArchivo(app);
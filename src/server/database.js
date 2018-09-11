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
const subirArchivos = require("./file-uploader");


process.setMaxListeners(0);
connection.connect(function(err) {
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
//subirArchivos.upload(app);
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const DIR = metodos.DIR;

var upload = multer({ dest: DIR }).single('photo');



app.post("/file-uploader/upload", function(req, res, next) {
    var path = '';

    upload(req, res, function(err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        connection.query(`insert into actas2(nombre,fecha) values(?,?)`,
            [req.file.filename, 'test'])
        console.log(req.file)
        path = req.file.filename;
        return res.send("Upload Completed for " + path);
    })
});

app.get("/getImage", function(req, res, next) {
    connection.query("select nombre from actas2", function(error, result) {
        if (error) console.log(error);
        res.end(res.json(result));
    })
})
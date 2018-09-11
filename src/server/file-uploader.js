var exports = (module.exports = {});

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const metodos = require("./connection");
const DIR = metodos.DIR;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({ storage: storage });

exports.subirArchivo = function ( app ){
    app.post('/api/upload', upload.single('photo'), function (req, res) {
        if (!req.file) {
            console.log("No file received");
            return res.send({
                success: false
            });

        } else {
            console.log('file received');
            return res.send({
                success: true
            })
        }
    });
} 
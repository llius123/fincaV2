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
        cb(null, 'foto');
    }
});
//let upload = multer({ storage: storage });

var upload = multer({ dest: "./ArchivosFOTOS2" });

exports.upload = function(app) {
  app.post("/file-uploader/upload", upload.single("photo"), function(req, res) {
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
};

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./src/server/Archivos");
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// var upload = multer({ storage: storage });

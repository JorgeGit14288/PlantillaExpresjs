const sql = require('mssql');
const configDb = require('../../configDb');
var db = require('../db/connect');
var respu;
controller = {};

controller.getTest = function(req, res, next) {
    console.log('test controller ');
    new Promise(function(done) {
        console.log('paso1');
        respuesta = db.Execute()
        console.log("Consulta controler ", respuesta);

        done()
            // console.log(respuesta);

    }).then(respuesta => {
        console.log('Paso 2')
        console.log(respuesta);
        return res.json(respuesta);
    }).catch(function(err) {
        console.log('Ocurrio un error ', err);
        return res.json(err);
    })
    console.log('Ultimo paso');
}

module.exports = controller;
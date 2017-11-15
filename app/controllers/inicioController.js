const sql = require('mssql');
const configDb = require('../../configDb');
var services = require('../services/services');
const controller = {};

var promiseCount = 0;



controller.getInicio = function(req, res, next) {
    console.log('ESTOY EN INICIO CONTROLLER ');
    var respuesta = {
        "respuesta": "LLegue Estoy en inicio controller"
    }

    return res.json(respuesta);
}
controller.getPosts = function(req, res, next) {
    console.log('ESTOY EN POST CONTROLLER ');
    services.httpRequest().then(respuesta => {
        return res.send(respuesta);
    }).catch(err => {
        return res.send(err);
    });

    //return res.json(respuesta);
}

module.exports = controller;
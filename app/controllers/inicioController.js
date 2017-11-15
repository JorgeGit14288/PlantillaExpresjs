const sql = require('mssql');
const configDb = require('../../configDb');
var services = require('../services/services');
const controller = {};


controller.getInicio = function(req, res, next) {
    console.log('ESTOY EN INICIO CONTROLLER ');
    var respuesta = {
        "respuesta": "LLegue Estoy en inicio controller"
    }

    return res.json(respuesta);
}

module.exports = controller;
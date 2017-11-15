var services = require('../services/services');
const controller = {};

controller.getPosts = function(req, res, next) {
    console.log('ESTOY EN POST CONTROLLER ');
    //opciones para consumir el servicio
    var options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'postman-token': '0a279086-a487-3863-4241-181cfbfbdadc',
            'cache-control': 'no-cache'
        }
    };

    services.httpRequest(options).then(respuesta => {
        return res.send(respuesta);
    }).catch(err => {
        return res.send(err);
    });

    //return res.json(respuesta);
}

module.exports = controller;
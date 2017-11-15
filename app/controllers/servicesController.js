var services = require('../services/services');
const controller = {};

controller.getPhotos = (req, res, next) => {
    console.log('ESTOY EN EL CONTROLADOR PARA OBTENER FOTOS')
    var options = {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos',
        headers: {
            'postman-token': 'c1231e5e-c7bb-25dc-5f5f-8effaecb9ba9',
            'cache-control': 'no-cache'
        }
    };
    services.httpRequest(options).then(respuesta => {
        res.send(respuesta);
    }).catch(err => {
        res.send(err);
    })


}

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
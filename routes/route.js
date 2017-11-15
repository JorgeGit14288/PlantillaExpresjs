var express = require('express');
var router = express.Router();
var controllers = require('../app/controllers/index');
var testController = require('../app/controllers/testController');

//test
//router.get('/test', testController.getTest);
router.get('/test', controllers.test.getTest);
router.get('/inicio', controllers.inicio.getInicio);
router.get('/posts', controllers.services.getPosts);
router.get('/photos', controllers.services.getPhotos);

//other controllers

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;
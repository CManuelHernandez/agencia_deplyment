const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Comentario = require('../models/Comentarios');

/**Controladores */

const nosotrosController = require ('../controllers/nostrosController');
const homeController = require ('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const comentariosController = require('../controllers/comentariosController');


module.exports = function(){
    router.get('/',homeController.consultasHomepage); 
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes',viajesController.mostrarViajes);
    router.get('/viajes/:id',viajesController.mostrarViaje);
    router.get('/comentarios',comentariosController.mostrarComentarios);
    //Cuando se llena el formulario
    router.post('/comentarios',comentariosController.agregarComentario);

    

    return router;
}




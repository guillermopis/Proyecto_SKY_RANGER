'use strict';

const   authController      = require('../controllers/auth-controller'),
        express             = require('express'),
        router              = express.Router(),
        direcciones                  = new authController();

router
//peticiones get
    .get('/', direcciones.index)
    .get('/inicio', direcciones.inicio)
    .get('/clientes', direcciones.clientes)

    //realizamos la peticion del metodo de callback
    .get('/proveedores', direcciones.proveedores)
    .get('/usuario', direcciones.usuario)
    .get('/vehiculo', direcciones.vehiculo)
    .get('/lote', direcciones.lote)
<<<<<<< HEAD
=======
    .get('/gps', direcciones.gps)
>>>>>>> c051f5eaf453d82d994403c7c7547b9fa6e93425
//peticiones POST
    .post('/login', direcciones.login)




module.exports = router;

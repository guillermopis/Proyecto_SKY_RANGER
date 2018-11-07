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
    .get('/lotes', direcciones.lotes)
    .get('/gps', direcciones.gps)
    .get('/sims', direcciones.sims)
//peticiones POST
    .post('/login', direcciones.login)




module.exports = router;

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
    .get('/proveedores', direcciones.proveedores)
    .get('/usuario', direcciones.usuario)
    .get('/vehiculo', direcciones.vehiculo)
//peticiones POST
    .post('/login', direcciones.login)




module.exports = router;

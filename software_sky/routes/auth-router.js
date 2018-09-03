'use strict';

const   authController      = require('../controllers/auth-controller'),
        express             = require('express'),
        router              = express.Router(),
        direcciones                  = new authController();

router
//peticiones get
    .get('/', direcciones.index)
    .get('/inicio', direcciones.inicio)
//peticiones POST
    .post('/login', direcciones.login)

  


module.exports = router;

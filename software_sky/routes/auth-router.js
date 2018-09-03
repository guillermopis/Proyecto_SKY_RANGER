'use strict';

const   authController      = require('../controllers/auth-controller'),
        express             = require('express'),
        router              = express.Router(),
        direcciones                  = new authController();

router
    .get('/', direcciones.index)
    .get('/inicio', direcciones.inicio)


module.exports = router;

'use strict';

const   authController      = require('../controllers/auth-controller'),
        express             = require('express'),
        router              = express.Router(),
        ac                  = new authController();

router
    .get('/', ac.index)
    

module.exports = router;

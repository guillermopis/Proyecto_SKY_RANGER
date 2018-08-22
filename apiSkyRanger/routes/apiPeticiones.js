var express = require('express');
var router = express.Router();
var model = require('../models/index');
//var model = require('../models/index');
//espacio para las peticionesDeApi

router.get('/:user', function(req, res, next){
  const us = req.params.user;
  //const ps = req.params.pass;
  console.log("valor de user: " +  us);
  //console.log("valor de user: " + ps);
  /*
  model.usuario.findAll({})
    .then(apiPeticiones => res.json({
      error: false,
      data: apiPeticiones
    }))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }));
  */
}); //fin de get

module.exports = router;

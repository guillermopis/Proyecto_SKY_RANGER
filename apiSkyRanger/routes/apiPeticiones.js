var express = require('express');
var router = express.Router();
var model = require('../models/index');
//var model = require('../models/index');
//espacio para las peticionesDeApi

router.post('/', function(req, res, next){
  var usuario = req.body.usuario;
  var contraseña = req.body.contraseña;
  console.log("valor de user: " +  usuario);
  console.log("valor de contraseña: "+ contraseña);
  model.usuario.findAll(
    {
      where:{
        usuario: usuario,
        contraseña: contraseña
      }
    }
  )
    .then(apiPeticiones => res.json({
      error: false,
      data: apiPeticiones,

    }))
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }));
}); //fin de get

module.exports = router;

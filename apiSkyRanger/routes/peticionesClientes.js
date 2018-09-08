var express = require('express');
var router = express.Router();
var model = require('../models/index');
//var model = require('../models/index');
//espacio para las peticionesDeApi

/* GET listing. */
router.get('/:id', function (req, res, next) {
  const todo_id = req.params.id;
  if(todo_id == 'null'){
    model.cliente.findAll({})
    .then(apiPeticiones => res.json({
      error: false,
      data: apiPeticiones
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
  }else{
      model.cliente.findAll({ where: {
          id: todo_id
      }})
      .then(apiPeticiones => res.json({
        error: false,
          data: apiPeticiones
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
  }//fin del if
});//fin del get


module.exports = router;

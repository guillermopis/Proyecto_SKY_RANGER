var express = require('express');
var router = express.Router();
var model = require('../models/index');
//espacio para las peticionesDeApi

/* mostramos los datos que tenga el proveedor */
router.get('/', function (req, res, next) {
  model.proveedore.findAll({})
        .then(todos => res.json({
            error: false,
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
/* POST todo. */
router.post('/', function(req, res, next) {
  var {
         nombre,
         nit,
         direccion,
         telefono,
         estado   
           } = req.body;

     model.proveedore.create({
             nombre: nombre,
             nit: nit,
             direccion: direccion,
             telefono: telefono,
             estado: estado
         })
         .then(todo => res.status(201).json({
             error: false,
             data: todo,
             message: 'Registros ingresados a tabla proveedores'
         }))
         .catch(error => res.json({
             error: true,
             data: [],
             error: error
         }));
});

//metodo actualizar
router.put('/:id', function (req, res, next) {
    const todos = req.params.id;
    const {nombre,nit,direccion, telefono,estado} = req.body;
    model.proveedore.update({
            nombre: nombre,
            nit: nit,
            direccion: direccion,
            telefono: telefono,
            estado: estado
        }, {
            where: {
                id: todos
            }
        })
        .then(todo => res.status(201).json({
            error: false,
            message: 'INFORMACION ACTUALIZADA'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

//metodo actualizar solo para estado 
router.put('/:id', function (req, res, next) {
    const todos = req.params.id;
    const {estado} = req.body;
    model.proveedore.update({
            estado: estado
        }, {
            where: {
                estado: todos
            }
        })
        .then(todo => res.status(201).json({
            error: false,
            message: 'Estado ACTUALIZADO'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});
module.exports = router;
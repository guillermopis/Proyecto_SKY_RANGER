'use strict';

let authModel = require('../models/auth-model'),
    errors  = require('../middlewares/errors'),
    express = require('express'),
    crypto = require('crypto');

function encriptar(user, pass) {
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}

class AuthController{

    //dependiendo si se esta logueado se renderiza la vista inicio sino la vista login-form
    index(request, response, index){
        console.log("el nombre del usuario logeado: ");
        console.log(request.session.username);
        if(request.session.username){
            response.redirect('/inicio');
        }else{
            response.render('inicio/indexlogin',{ //renderizamos el formulario de login
                title: 'Iniciar sesión',
                message: request.query.message,
                error: request.query.error
            });
        }
    }//fin de index

    //inicio
    inicio(request, response, next){
        if(request.session.username){ //validamos si el usuairo tiene sesion abierta
            response.redirect('/inicio');
        }else{
             errors.http401(request, response, next);
        }//fin del if.
    }//fin de inicio

   
}
module.exports = AuthController;

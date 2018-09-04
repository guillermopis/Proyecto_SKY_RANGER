'use strict';
var requestt = require('request');
let authModel = require('../models/auth-model'),
    errors  = require('../middlewares/errors'),
    express = require('express'),
    crypto = require('crypto');



class AuthController{

    //dependiendo si se esta logueado se renderiza la vista inicio sino la vista login-form
    index(request, response, index){
        console.log("el nombre del usuario logeado: ");
        console.log(request.session.username);
        if(request.session.username){
            response.render('inicio/indexinicio',{
                title: 'Sky Ranger'
            });
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

//peticion get para autenticacion
    login(request,response,next){
      //aca se va hacer la petion a la API
      requestt.post('http://127.0.0.1:3000/usuario/',
      { json: { usuario: request.body.usuario, contraseña: request.body.contraseña}},
      function (error,responsee, body,) {
            if(body.error == false){
              if(body.data.length == 1){
                  //los datos son correctos
                    request.session.username=request.body.usuario;
                    if(request.session.username){
                      response.render('inicio/indexinicio',{ //renderizamos el formulario de login
                              title: 'Sky Ranger'
                          });
                    }
              }else{ //los datos son incorrectos
                  if(!request.session.username){
var html='<script type="text/javascript">alert("Error en la autenticacion, intente de nuevo"); location.href = "http://localhost:8000/"; </script>';
                    response.writeHead(200,{"Content-Type":"text/html"})
                    response.write(html);
                    response.end();
                  }
              }//fin del if del length
            }else{
              //con esto podemos reaccionar un error de la API
              console.log("datos incorrectos o ha ocurrido un error interno");
            }//fin del if de comprobacion de errorr
      });
    }//fi de login

}
module.exports = AuthController;

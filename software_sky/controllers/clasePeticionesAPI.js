var requestt = require('request');
let errors  = require('../middlewares/errors'),
    express = require('express');

//clase generica para peticiones GET a la API
class peticiones {
  peticion(url,callback) {
    setTimeout(function(){
      requestt.get(url, (error, response, body) => {
        if(error) {
            return console.dir(error);
            //aca responderemos algo si se produce un error.
        }else{
          var datos= JSON.parse(body);
          callback(datos);
        }
      });
    }, 0 | Math.random() * 100);
  }

  peticionPOST(url,body,metodo,callback){
    setTimeout(function(){
      requestt({method:metodo,headers: {'Content-Type': 'application/JSON'},
        url,body}, (error, response, body2)=>{
          if(error) {
              return console.dir(error);
          }else{
            var datos= JSON.parse(body2);
            callback(datos);
          }
      });
    }, 0 | Math.random() * 100);
  }

}module.exports = peticiones;

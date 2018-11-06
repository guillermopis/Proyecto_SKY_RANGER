const chai = require('chai');
const requestt = require('request');
const express = require('express');
const peticiones = require('../controllers/clasePeticionesAPI');
const assert = chai.assert;
const peti = new peticiones();

describe('Peticiones GET',function(){
	//prueba1
	it('Debe retornar el valor false en error', function(done){
        var url='http://127.0.0.1:3000/usuario/{"user":"null","pass":"null","puesto":"TECNICO"}';
        peti.peticion(url,function(data){
					console.log(data);
					console.log("valor de error= "+data.error);
						//var _error = data.error;
            assert.equal(data.error,"hola");
						done();
        })// fin de peticion a moras

    });

    it('Debe retornar un objeto en notacion Json', function(){
        var url='http://127.0.0.1:3000/usuario/{"user":"null","pass":"null","puesto":"TECNICO"}'
        peti.peticion(url,function(data){
            assert.typeOf(data.data, popis);
        });// fin de peticion a moras
    });
});

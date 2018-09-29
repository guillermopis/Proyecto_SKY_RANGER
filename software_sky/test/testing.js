const chai = require('chai');
const requestt = require('request');
const express = require('express');
const peticiones = require('../controllers/clasePeticionesAPI');
const assert = chai.assert;
const peti = new peticiones();

describe('Peticiones GET',function(){
	//prueba1
	it('Debe retornar el valor false en error', function(){
        var url='http://127.0.0.1:3000/usuario/{"user":"null","pass":"null","puesto":"TECNICO"}'
        peti.peticion(url,function(data){
            var _error = data.error;
            console.log(data.data)
            assert.equal(String(data.error), 'true');
        });// fin de peticion a moras
        // assert.equal(1, 0);
    });
    
    it('Debe retornar un objeto en notacion Json', function(){
        var url='http://127.0.0.1:3000/usuario/{"user":"null","pass":"null","puesto":"TECNICO"}'
        peti.peticion(url,function(data){
            assert.typeOf(data.data, popis);
        });// fin de peticion a moras
    });
});



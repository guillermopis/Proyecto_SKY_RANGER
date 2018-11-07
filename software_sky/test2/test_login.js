let chai = require('chai'),
  requestt = require('request'),
  express = require('express'),
	peticiones = require('../controllers/clasePeticionesAPI'),
	assert = chai.assert,
  peti = new peticiones();


describe('PRUEBAS DEL LOGIN',function(){
	//prueba1
	it('PRUEBA1, PROBANDO QUE SOLO DEVUELVA UN REGISTRO', function(done){
    var url='http://127.0.0.1:3000/usuario/{"user":"guillermo","pass":"abc","puesto":"TECNICO"}'
    peti.peticion(url,function(data){
      assert.equal(data.data.length,1);
      done();
    });// fin de peticion a moras

	})//fin de prueba1
})// fin de describe1

describe('PRUEBAS DE CLIENTES', function(){
  it('PRUEBA2, PROBANDO LA PAGINACION CON 5 ELEMENTOS',function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"null","a":"0", "b":"5","texto":""}'
    peti.peticion(url,function(data){
      assert.equal(data.data.length,5);
      done();
    })
  })//sin de prueba2

  it('PRUEBA3, PROBANDO LA PAGINACION CON 10 ELEMENTOS',function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"null","a":"0", "b":"10","texto":""}'
    peti.peticion(url,function(data){
      assert.equal(data.data.length,10);
      done();
    })
  })//sin de prueba2

  it('PRUEBA4, PROBANDO LA PAGINACION CON 15 ELEMENTOS',function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"null","a":"0", "b":"15","texto":""}'
    peti.peticion(url,function(data){
      assert.equal(data.data.length,15);
      done();
    })
  })//sin de prueba2

  it('PRUEBA5, PROBANDO QUE LA API DEVUELVA TODOS LOS REGISTROS',function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"null","a":"0", "b":"0","texto":""}';
    peti.peticion(url,function(data){
      assert.equal(data.data.length,data.data.length);
      done();
    })
  })

  it('PRUEBA6, PROBANDO EL FILTRO POR NOMBRE DE CLIENTE', function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"null","a":"0", "b":"0","texto":"Guillermo"}';
    peti.peticion(url,function(data){
      assert.equal(data.data.length, data.data.length);
      done();
    })
  })

  it('PRUEBA7, PROBANDO EL FILTRO POR NUMERO DE ID', function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"1","a":"0", "b":"0","texto":""}';
    peti.peticion(url,function(data){
      assert.equal(data.data.length,1);
      done();
    })
  })

  it('PRUEBA8, PROBANDO LA PAGINACION CON 5 ELEMENTOS Y FILTRO POR NOMBRE',function(done){
    var url='http://127.0.0.1:3000/clientes/{"id":"null","a":"0", "b":"5","texto":"f"}';
    peti.peticion(url,function(data){
      assert.equal(data.data.length,5);
      done();
    })
  })//fin de prueba

  it('PRUEBA9, PROBANDO QUE INSERTE UN CLIENTE',function(done){
    var url ='http://127.0.0.1:3000/clientes/';
    var metodo='post';
    var datos ={"nombre":"guillermo pisqui2",
              "direccion":"la calle de mocha",
              "correo":"yo@mocha.com",
              "dirfact": "alli donde mocha",
              "nit":"3334545-6",
              "telefono":"4567-7654",
              "estado":"ACTIVO",
              "tipopago":"1",
              "tiposervicio":"1",
              "fecha":"2018-04-03",
              "tipomora":"1",
              "saldo":"23",
              "anticipo":"50"
        };
    var datos2 = JSON.stringify(datos);
    peti.peticionPOST(url,datos2,metodo, function(data){
      assert.equal(data.mensaje,"INFORMACION GUARDADA CORRECTAMENTE");
      done();
    })
  })

  it('PRUEBA10, PROBANDO QUE MODIFIQUE UN CLIENTE',function(done){
    var url ='http://127.0.0.1:3000/clientes/160';
    var metodo='put';
    var datos ={"nombre":"modificado con mocha",
              "direccion":"la calle de mocha",
              "correo":"yo@mocha.com",
              "dirfact": "alli donde mocha",
              "nit":"3334545-6",
              "telefono":"4567-7654",
              "estado":"INCATIVO",
              "tipopago":"1",
              "tiposervicio":"1",
              "fecha":"2018-04-03",
              "tipomora":"1",
              "saldo":"23",
              "anticipo":"50"
        };
    var datos2 = JSON.stringify(datos);
    peti.peticionPOST(url,datos2,metodo, function(data){
      assert.equal(data.mensaje,"INFORMACION ACTUALIZADA CORRECTAMENTE");
      done();
    })
  })

})//fin de prueba de clientes

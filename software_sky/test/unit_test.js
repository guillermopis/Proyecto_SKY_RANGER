'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
    const expect = require('chai').expect;
    chai.use(chaiHttp);

    const url= 'http://localhost:3000/proveedores';

describe('PRUEBAS A PROVEEDORES: ',()=>{ 
        //PRUEBA 1 DEVUELVA CORRECTAMENTE UN PROVEEDOR
      it('PRUEBA1 FILTRO POR ID', (done) => {
        chai.request(url)
          .get('/2')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });


      //PRUEBA 2 que devuelva correctamente todo los proveedores
      it('PRUEBA 2 QUE DEVUELVA TODOS LOS PROVEEDORES', (done) => {
        chai.request(url)
          .get('/{"id":"null","a":"0", "b":"5","nombre":""}')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });

      //PRUEBA 3  probando la paginacion 
      it('PRUEBA3 PAGINACION DE 1 A 2', (done) => {
        chai.request(url)
          .get('/{"id":"null","a":"0", "b":"2","nombre":""}')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });

      //PRUEBA 4  probando la paginacion 
      it('PRUEBA4 PAGINACION DE 5 A 9', (done) => {
        chai.request(url)
          .get('/{"id":"null","a":"5", "b":"9","nombre":""}')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });

      //PRUEBA 5 probando la paginacion 
      it('PRUEBA5 FILTRO POR NOMBRE', (done) => {
        chai.request(url)
          .get('/{"id":"null", "nombre":"barcelona"}')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });

      //
      it('PRUEBA6 PAGINACION DE 0 a 6 CON FILTRO POR NOMBRE', (done) => {
        chai.request(url)
          .get('/{"id":"null","a":"0", "b":"6","nombre":"barcelona"}')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });


    
});

describe('PROVEEDORES METODO POST',()=>{ 
        //PRUEBA 5 INSERTANDO UN PROVEEDOR 
      it('INSERTAR UN NUEVO PROVEEDOR', (done) => {
        chai.request(url)
        .post('/')
          .send({nombre: "karla2", nit: "1234", 
                direccion: "sangoloteo", telefono:"12345678",
                extension: 12, correo_empresa:"barcelona@gmail.com",
                estado:"inactivo", contacto:"chiquito bonito",
                fecha_relacion:"2013/10/09", correo_contacto:"bonito@d.com"})
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(201);
            done();
          });
      });//fin del id post en nuevo proveedor 

      //PRUEBA 6 ACTUALIZAR UN PROVEEDOR 
       it('MODIFICAR UN PROVEEDOR', (done) => {
        chai.request(url)
        .put('/7')
          .send({nombre: "karla", nit: "1234", 
                direccion: "TELOSANGO", telefono:"12345678",
                extension: 12, correo_empresa:"barcelona@gmail.com",
                estado:"inactivo", contacto:"chiquito bonito",
                fecha_relacion:"2013/10/09", correo_contacto:"bonito@d.com"})
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(201);
            done();
          });
      });//fin del id PUT en nuevo proveedor 

});
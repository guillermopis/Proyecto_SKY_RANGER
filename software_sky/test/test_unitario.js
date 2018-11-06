'use strict';
let chai = require('chai');
let chaiHttp = require('chai-http');
    const expect = require('chai').expect;
    chai.use(chaiHttp);
    //le mandamos la url de localhost sim para conectar con la api
    const url= 'http://localhost:3000/sims';

describe('PRUEBAS A SIMS: ',()=>{ 
        //PRUEBA 1 DEVUELVA CORRECTAMENTE UN PROVEEDOR
      it('PRUEBA1 FILTRO POR ID', (done) => {
        chai.request(url)
          .get('/2')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)//muestra los datos en consola
            expect(res).to.have.status(200);
            done();
          });
      });//fin de la it

      //PRUEBA 2 que devuelva correctamente todo los proveedores
      it('PRUEBA 2 QUE DEVUELVA TODOS LOS sims', (done) => {
        chai.request(url)
          .get('/{"id":"null","a":"0", "b":"2","compania_telefonica":""}')
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(200);
            done();
          });
      });
    
});

describe('PROVEEDORES METODO POST Y PUT',()=>{ 
        //PRUEBA 7 INSERTANDO UN PROVEEDOR 
      it('PRUEBA 7 INSERTAR UN NUEVO sim', (done) => {
        chai.request(url)
        .post('/')
          .send({id_marca: 2, compania_telefonica: "nimodo", 
                plan_de_datos: "superman", fecha_vencimiento_plan:"2011-12-12",
                fecha_inicio_plan: "2010-11-09", precio_del_plan: 239,
                numero_telefono:"98767989", iccid:"kdkds.om",
                apn:"1283829", id_lote:2, estado:"stock" })
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            //console.log(res.body)
            expect(res).to.have.status(201);
            done();
          });
      });//fin del id post en nuevo proveedor 
      

      it('PRUEBA 7 modificar sim', (done) => {
        chai.request(url)
        //put es la opcion para modificar en la api
        //entonces en put le mandamos el id del registro a modificar
        .put('/4')
          .send({id_marca: 2, compania_telefonica: "nimodo lo modificamos bien", 
                plan_de_datos: "superman", fecha_vencimiento_plan:"2011-12-12",
                fecha_inicio_plan: "2010-11-09", precio_del_plan: 239,
                numero_telefono:"98767989", iccid:"kdkds.om",
                apn:"1283829", id_lote:2, estado:"ahora ya no stock" })
          .end( function(err,res){
            //desctivar para mostrar en pantalla los datos 
            console.log(res.body)
            expect(res).to.have.status(201);
            done();
          });
      });//fin del id post en nuevo proveedor 
      

});
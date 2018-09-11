function actualizar(id_registro){
  //alert("Estoy en funcion actualizar con el id:"+ id_registro );
  //abrimos el formulario modal
  $('#modalnuevocliente').modal('show');
  //ahora hacemos la peticion get a la api segun el id que venga en id_registro
  /*
  $.ajax({
      url: '/agregarParticipante/'+id_registro,
      type: "GET",
      dataType: 'json',
      data: {
      }
    }).then(function(data) {
      //console.log(data);
      //TENEMOS LOS DATOS, AHORA SE LOS MANDAMOS AL FORMULARIO MODAL
      //alert((data.data[0].nombre));
      document.getElementById("nombre").value = data.data[0].nombre;
      document.getElementById("carnet").value= data.data[0].carnet;
      document.getElementById("facultad").value = data.data[0].facultad;
      document.getElementById("ciclo").value= data.data[0].ciclo;
      document.getElementById("evento").value = data.data[0].evento;
      document.getElementById("categoria").value= data.data[0].categoria;
      //los datos ya estan en el formulario, esperamos que el usuario los modifique
      	$("#bandera").val("modificar");
        $("#id").val(id_registro);
    });
*/
}//fin de funcion actualizar

function ver(id_registro){ //con esta funcion abrimos el formulario modal, y mostramos todos los datos relacionados a ese cliente.
  //alert("Estoy en funcion actualizar con el id:"+ id_registro );
  //abrimos el formulario modal
  $('#modalnuevoproveedor').modal('show');
  //ahora hacemos la peticion get a la api segun el id que venga en id_registro

  $.ajax({
      url: 'http://localhost:3000/proveedores/{"a":"0", "b":"0","nombre":"",'+id_registro+'"}',
      type: "GET",
      dataType: 'json',
      data: {
      }
    }).then(function(data) {
      //TENEMOS LOS DATOS, AHORA SE LOS MANDAMOS AL FORMULARIO MODAL
      document.getElementById("nombre").value = data.data[0].nombre;
      document.getElementById("nit").value= data.data[0].nit;
      document.getElementById("direccion").value = data.data[0].direccion;
      document.getElementById("telefono").value= data.data[0].telefono;
      document.getElementById("extension").value = data.data[0].extension;
      document.getElementById("correo_empresa").value= data.data[0].correo_empresa;
      document.getElementById("estado").value= data.data[0].estado;
      document.getElementById("contacto").value= data.data[0].contacto;
      document.getElementById("fecha_relacion").value= data.data[0].fecha_relacion;
      document.getElementById("correo_contacto").value= data.data[0].correo_contacto;
      //los datos ya estan en el formulario, esperamos que el usuario los modifique
      	$("#bandera").val("ver");
        $("#id").val(id_registro);
        $('#formproveedor').find('input, textarea, button, select').attr('disabled','disabled');
        document.getElementById("check1").checked=false;
        document.getElementById("check1").style.display="block";
        document.getElementById("che").style.display="block";
        document.getElementById("btnguardarproveedor").disabled=true;
    });
}//fin de funcion actualizar

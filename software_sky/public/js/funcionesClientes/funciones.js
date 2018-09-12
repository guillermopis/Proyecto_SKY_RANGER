function ver(id_registro){ //con esta funcion abrimos el formulario modal, y mostramos todos los datos relacionados a ese cliente.
  //alert("Estoy en funcion actualizar con el id:"+ id_registro );
  //abrimos el formulario modal
  $('#modalnuevocliente').modal('show');
  //ahora hacemos la peticion get a la api segun el id que venga en id_registro

  $.ajax({
      url: 'http://localhost:3000/clientes/'+id_registro,
      type: "GET",
      dataType: 'json',
      data: {
      }
    }).then(function(data) {
      //TENEMOS LOS DATOS, AHORA SE LOS MANDAMOS AL FORMULARIO MODAL
      //alert((data.data[0].nombre));
      //comentario
      document.getElementById("nombre").value = data.data[0].nombre;
      document.getElementById("direccion").value= data.data[0].direccion_fiscal;
      document.getElementById("dirfact").value = data.data[0].direccion_facturacion;
      document.getElementById("nit").value= data.data[0].nit;
      document.getElementById("telefono").value = data.data[0].telefono;
      document.getElementById("correo").value= data.data[0].correo;
      document.getElementById("estado").value= data.data[0].estado;
      document.getElementById("anticipo").value= data.data[0].anticipo;
      document.getElementById("fecha").value= data.data[0].fecha_ingreso;
      document.getElementById("saldo").value= data.data[0].saldo_Q;
      document.getElementById("tipoMora").value= data.data[0].tipo_mora;
      document.getElementById("tiposervicio").value= data.data[0].tipo_servicio;
      document.getElementById("tipopago").value= data.data[0].tipo_pago;
      //los datos ya estan en el formulario, esperamos que el usuario los modifique
      	$("#bandera").val("ver");
        $("#id").val(id_registro);
        $('#formcliente').find('input, textarea, button, select').attr('disabled','disabled');
        document.getElementById("check1").style.display="block";
        document.getElementById("che").style.display="block";
        document.getElementById("btnGuardar").disabled=true;

    });
}//fin de funcion actualizar

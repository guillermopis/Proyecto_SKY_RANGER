function verVehiculo(id_vehiculo){
  $("#modalnuevovehiculo").modal("show");
  $.ajax({
      url: 'http://127.0.0.1:3000/vehiculos/{"a":"0", "b":"0","texto":"","placa":"","id":"'+id_vehiculo+'"}',
      type: "GET",
      dataType: 'json',
    }).then(function(data) {
      document.getElementById("cliente").value = data.data[0].cliente.nombre;
      document.getElementById("marcave").value= data.data[0].marca;
      document.getElementById("modelove").value = data.data[0].modelo;
      document.getElementById("colorve").value= data.data[0].color;
      document.getElementById("placave").value = data.data[0].placa;
      document.getElementById("tipove").value= data.data[0].tipo;
      document.getElementById("linea").value= data.data[0].liena;
      document.getElementById("chasis").value= data.data[0].chasis;
      document.getElementById("motor").value= data.data[0].motor;
      document.getElementById("precioseve").value= data.data[0].precio_servicio;
      document.getElementById("fechainstve").value= data.data[0].fecha_instalacion;
      document.getElementById("estadove").value= data.data[0].estado;

      //los datos ya estan en el formulario, esperamos que el usuario los modifique
      /*  $("#bandera").val("ver");
        $("#id").val(id_registro);
        $('#formcliente').find('input, textarea, button, select').attr('disabled','disabled');
        document.getElementById("check1").checked=false;
        document.getElementById("check1").style.display="block";
        document.getElementById("che").style.display="block";
        document.getElementById("btnGuardar").disabled=true;
*/
    });

}//fin de funcion ver vehiculo

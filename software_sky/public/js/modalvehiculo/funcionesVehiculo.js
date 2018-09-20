function verVehiculo(id_vehiculo){
  $("#modalnuevovehiculo").modal("show");
  $.ajax({
      url: 'http://127.0.0.1:3000/vehiculos/{"a":"0", "b":"0","texto":"","placa":"","id":"'+id_vehiculo+'"}',
      type: "GET",
      dataType: 'json'
    }).then(function(data) {
      document.getElementById("dueñoV").value = data.data[0].cliente.nombre;
      document.getElementById("marcave").value= data.data[0].marca;
      document.getElementById("modelove").value = data.data[0].modelo;
      document.getElementById("colorve").value= data.data[0].color;
      document.getElementById("placave").value = data.data[0].placa;
      document.getElementById("tipove").value= data.data[0].tipo;
      document.getElementById("linea").value= data.data[0].linea;
      document.getElementById("chasis").value= data.data[0].chasis;
      document.getElementById("motor").value= data.data[0].motor;
      document.getElementById("precioseve").value= data.data[0].precio_servicio;
      document.getElementById("fechainstve").value= data.data[0].fecha_instalacion;
      document.getElementById("estadove").value= data.data[0].estado;

        $("#banderaV").val("verV");
        $("#idV").val(id_vehiculo);
        $('#formNuevoVehiculo').find('input, textarea, button, select').attr('disabled','disabled');
        document.getElementById("check1V").checked=false;
        document.getElementById("check1V").style.display="block";
        document.getElementById("cheV").style.display="block";
        document.getElementById("btnGuardarV").disabled=true;
    });

}//fin de funcion ver vehiculo

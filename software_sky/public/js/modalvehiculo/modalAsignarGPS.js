var ModuloListado = function(){
  var idVehiculo2;
	var _private = {};
  var _public = {};
	_public.__construct = function() {
		return _public;
	};
  _public.guardarV=function(idve){
    idVehiculo2=idve
  }

	_public.iniciar=function(){
		//_private.agregarEventoAcheckV();
		_private.agregarEventoAbotonGuardarAsignacion();
	}

  _private.agregarEventoAbotonGuardarAsignacion=function(){
    var btnGuardarAs = $("#btnGuardarAsignacion");
    if(btnGuardarAs.lengh==0){
      console.log("el boton guardar asignacion no existe");
      return;
    }else{
      btnGuardarAs[0].addEventListener('click',function(event){
        var combo = document.getElementById("gpsentrada");
        var seleccionado = combo.options[combo.selectedIndex].text;

        //guardarmos el registro en la tabla de historialVehiculo
alert(document.getElementById("comentariove").value);
        $.ajax({
          url:"http://127.0.0.1:3000/historialVehiculo/",
          type:"POST",
          dataType: 'json',
          data:{
            fecha:document.getElementById("fechave").value,
            id_gps_entrada:document.getElementById("gpsentrada").value,
            id_gps_salida:document.getElementById("idgpssalida").value,
            idVehiculo:idVehiculo2,
            id_tecnico:document.getElementById("tecnico").value,
            comentario:document.getElementById("comentariove").value,
            id_gps:document.getElementById("idgpssalida").value
          }
        }).done(function(data){
          alert(data.error);
        })//fin de ajax
      });
    }
  }//fin de funcion a boton guardar

  return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

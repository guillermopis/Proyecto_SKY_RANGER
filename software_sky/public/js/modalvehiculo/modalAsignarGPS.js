var ModuloListado = function(){
  var idVehiculo2;
  var idgpsSalida;
	var _private = {};
  var _public = {};
	_public.__construct = function() {
		return _public;
	};
  _public.guardaridgpssalida=function(gpsSalida){
    idgpsSalida=gpsSalida;
  }

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
        //var combo = document.getElementById("gpsentrada");
        //var seleccionado = combo.options[combo.selectedIndex].text;
        var forms = document.getElementsByClassName('needs-validation');
        validarCampos(forms,event,function(estado){
					_private.validarFormulario(estado);
				})//fin de llamado a valida campos
      });
    }
  }//fin de funcion a boton guardar

  _private.validarFormulario=function(estado){
    //alert("estoy en valdar formulario");
    if(estado == true){
      var gp = document.getElementById("idgpssalida").value;
      if(gp=='NULL'){
        idgpsSalida='NULL';
      }
        var url= "http://127.0.0.1:3000/historialVehiculo/"
        var type= "POST"
        var data={
          "id_gps_entrada":document.getElementById("gpsentrada").value,
          "id_gps_salida":idgpsSalida,
          "idVehiculo":idVehiculo2,
          "id_tecnico":document.getElementById("tecnico").value,
          "comentario":document.getElementById("comentariove").value
        };
      redireccion="http://localhost:8000/vehiculo";
      peticion(url,type,data,"modalasignargpsve",redireccion);
    }else{
    }
  }//fin de funcion validar campos

  return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

var ModuloListado = function(){
	var _private = {}, _public = {};
	_private.formulario=null;
	var datos ="";

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.asignarFormulario();
		_private.agregarEventoAbotonGuardar();
		_private.agregarEventoAbotonNuevo();
		_private.agregarEventoAbotonCerrar();
	}

	_private.agregarEventoAbotonCerrar=function(){
		console.log("boton cerrar si existe");
		document.getElementById("bandera").style.display="none";
		document.getElementById("id").style.display="none";
		var btncerrar = $("#btnCerrar");
		
		if(btncerrar.length == 0){
			console.log("el boton cerrar de cliente no existe");
		}else{
			btncerrar[0].addEventListener('click', function(event){
				_private.limpiar();
				$("#modalnuevasim").modal("hide");
			})//fin del evento
		}//fin del if
	}//fin de la funcion btncerrar

	_private.agregarEventoAbotonGuardar=function(){
		var btnguardar= $("#btnguardarsim");
		console.log("entro al evento btn guardad");
		if(btnguardar.length==0){
			console.log("el boton guardarv no existe");
		}else{
			btnguardar[0].addEventListener('click', function(event){
				console.log("despues del click");
				var forms = document.getElementsByClassName('needs-validation');
				validarCampos(forms,event,function(estado){
					_private.validarFormulario(estado);
				})//sin de funcion llamado a funcion validar camposº
			})//fin de evento
		}//fin de if
	}//fin de funcion guardarV

	_private.limpiar=function(){
		document.getElementById("formsim").reset();
	}//fin de limpiar



	//validamos el formulario junto con la informacion de la api
	_private.validarFormulario=function(esvalido){
		if(esvalido == true){
			console.log("todo listo para guardar");
			if($("#bandera").val()	== "crear"){
				var redireccion="http://localhost:8000/sims"
				var url="http://127.0.0.1:3000/sims/"
				datos = {
						"id_marca": document.getElementById("marca").value,
						"companiatelef": document.getElementById("compania").value,
						"plandatos": document.getElementById("plandatos").value,
						"fechaVplan": document.getElementById("finplan").value,
						"fechaIplan": document.getElementById("inicioplan").value,
						"precioplan": document.getElementById("precioplan").value,
						"numerotelef": document.getElementById("numerotelefono").value,
						"iccid": document.getElementById("iccid").value,
						"apn": document.getElementById("apn").value,
						"id_lote": document.getElementById("idlote").value,
						"estado": document.getElementById("estado").value
					};//fin de datos
				peticion(url,"POST",datos,"modalnuevasim",redireccion);
			}
		}//fin del if
		else {alert("formulario invalido");			}//fin del else
	}//fin de funcion validar formulario

	
	_private.asignarFormulario= function(){
		var elementos = $("form");
		if(elementos.length ==0){
			console.log("formulario nuevo no encontado")
		}else{
			_private.formulario=elementos[0];

		}
	}// fin de funcion  asignarFormulario

	//este boton es para abrir el modal de nuevoprovedor
	_private.agregarEventoAbotonNuevo= function(){
		document.getElementById("bandera").style.display="none"
		document.getElementById("id").style.display="none"
		var btnnuevo = $("#btnnuevasim");

		if(btnnuevo.length == 0){
			console.log("boton nuevo no existe");
		}else{
			btnnuevo[0].addEventListener('click', function(event) {
			$('#modalnuevasim').modal('show')
			_private.limpiar()
			$("#bandera").val("crear");
		});
		}
	}//fin de boton nuevo

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);
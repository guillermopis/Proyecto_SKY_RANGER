var ModuloListado = function(){
	var _private = {}, _public = {};
	_private.formulario=null;
	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonNuevo();
		_private.asignarFormulario();
		_private.agregarEventoAbotonGuardar();
	}


	_private.limpiar=function(){
		document.getElementaryById("modalnuevoproveedor").reset();
	}//fin de limpiar

	//validamos el formulario junto con la informacion de la api
	_private.validarFormulario=function(){
		var valido = _private.formulario.checkValidity();
		if(valido == true){
			console.log("todo listo para guardar");
			if($("#proveer").val()	== "crear"){
			//console.log('aquillego');
				_private.peticion("http://127.0.0.1:3000/proveedores/","POST");
			//}
		}//fin del if
	}//fin de funcion validar formulario

	_private.peticion=function(url,type){
		//console.log('entraste a la peticion post');
		$.ajax({
					url: url,
					type: type,
					data: {
						"nombre": document.getElementById("nombre").value,
						"nit": document.getElementById("nit").value,
						"direccion": document.getElementById("direccion").value,
						"telefono": document.getElementById("telefono").value,
						"extension": document.getElementById("extension").value,
						"correo_empresa": document.getElementById("correo_empresa").value,
						"estado": document.getElementById("estado").value,
						"contacto": document.getElementById("contacto").value,
						"fecha_relacion": document.getElementById("fecha_relacion").value,
						"correo_contacto": document.getElementById("correo_contacto").value						
					}
				}).done(function(data){
					$('#modalnuevoproveedor').modal('hide')
					alert("DATOS GUARDADOS CORRECTAMENTE ");
					//volvemos a donde estabamos 
					location.href = "http://localhost:8000/proveedores";
				})//fin de ajax
	}//fnin de funcino peticion

	_private.agregarEventoAbotonGuardar = function(){
		var botonGuardar = $("#btnGuardar");
		console.log('el btnguardar si existe');
		if(botonGuardar.length==0){
			console.log("el boton guardar no existe");
			return;
		}else{
			botonGuardar[0].addEventListener('click', function(event){
				_private.validarFormulario();
			});//fin de evento
		}
	}// fin de funcion evento a boton guardar

	_private.asignarFormulario= function(){
		var elementos = $("form");
		if(elementos.length ==0){
			console.log("formulario nuevo no encontado")
		}else{
			_private.formulario=elementos[0];
		}
	}// fin de funcion  asignarFormulario

	//este boton es para abrir el modal de nuevoprovedor
	_private.agregarEventoAbotonNuevo=function(){
		console.log('si exist btnnuevo');
		$("#btnnuevoproveedor")[0].addEventListener('click', function(event) {
			$('#modalnuevoproveedor').modal('show')
			$("#proveer").val("crear");
			console.log('proveer tiene valor de crea');
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);
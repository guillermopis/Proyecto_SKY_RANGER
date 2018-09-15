
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
		//_private.agregarEventoAbotonCerrar();

		//_private.editarcliente();
	}
	_private.limpiar=function(){
		document.getElementaryById("modalnuevocliente").reset();
	}//fin de limpiar

	_private.validarCampos=function() {
	    var forms = document.getElementsByClassName('needs-validation');
	    var validation = Array.prototype.filter.call(forms, function(form) {
	        if (form.checkValidity() === false) {
						alert("el formulario es invalido");
	          event.preventDefault();
	          event.stopPropagation();
	        }else{
						alert("el formulario es valido");
					}
	        form.classList.add('was-validated');
	    });
}// fin de funcion validar campos

	_private.validarFormulario=function(){
		var esvalido = _private.formulario.checkValidity();
		if(esvalido == true){
			alert("formulario valido");
			console.log("todo listo, guardemos la info");
			if($("#bandera").val()	== "crear"){
					_private.peticion("http://127.0.0.1:3000/clientes/","POST");
			}
			//_private.EnviarDatosDeCliente();
		}else{alert("formulario invalido")}//fin del if
	}//fin de funcion validar formulario

	_private.EnviarDatosDeCliente=function(){

	}//fin de funcion EnviarDatosDeCliente

	_private.peticion=function(url,type){
		$.ajax({
					url: url,
					type: type,
					data: {
						"nombre": document.getElementById("nombre").value,
						"direccion": document.getElementById("direccion").value,
						"correo": document.getElementById("correo").value,
						"dirfact": document.getElementById("dirfact").value,
						"nit": document.getElementById("nit").value,
						"telefono": document.getElementById("telefono").value,
						"estado": document.getElementById("estado").value,
						"tipopago": document.getElementById("tipopago").value,
						"tiposervicio": document.getElementById("tiposervicio").value,
						"fecha": document.getElementById("fecha").value,
						"tipomora": document.getElementById("tipoMora").value,
						"saldo": document.getElementById("saldo").value,
						"anticipo": document.getElementById("anticipo").value
					}
				}).done(function(data){
					$('#modalnuevocliente').modal('hide')
					alert("DATOS GUARDADOS CORRECTAMENTE ");
					location.href = "http://localhost:8000/clientes";
				})//fin de ajax
	}//fnin de funcino peticion

	_private.agregarEventoAbotonGuardar = function(){
		var botonGuardar = $("#btnGuardar");
		if(botonGuardar.length==0){
			console.log("el boton guardar no existe");
			return;
		}else{
			botonGuardar[0].addEventListener('click', function(event){
			//	_private.validarFormulario();
				_private.validarCampos();
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

	//este boton es para abrir el modal de nuevo cliente
	_private.agregarEventoAbotonNuevo=function(){
		$("#btnnuevocliente")[0].addEventListener('click', function(event) {
			$('#modalnuevocliente').modal('show')
			$("#bandera").val("crear");
		});
	}
	
	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

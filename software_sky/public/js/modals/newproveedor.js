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
		_private.agregarEventoACheck1();
		_private.agregarEventoAbotonCerrar();
		//para paginacion
		//_private.asignarEventoAbuscarPornombre();
		/*_private.asignarEventoAbuscarPornombre();
		_private.agregarEventoASiguiente();
		_private.configuracionDePaginacion();
		_private.traerTotal();*/
		//_private.agregarEventoAanterior();
	}

	_private.agregarEventoAbotonCerrar=function(){
		document.getElementById("bandera").style.display="none";
		document.getElementById("id").style.display="none";
		btncerrar = $("#btnCerrar");
		console.log("boton cerrar si existe");
		if(btncerrar.length == 0){
			console.log("el boton cerrar de cliente no existe");
		}else{
			btncerrar[0].addEventListener('click', function(event){
				_private.limpiar();
				$("#modalnuevoproveedor").modal("hide");
			})//fin del evento
		}//fin del if
	}//fin de la funcion btncerrar

	_private.agregarEventoAbotonGuardar = function(){
		var botonGuardar = $("#btnguardarproveedor");
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




		_private.agregarEventoACheck1=function(){
				var check = $("#check1");
				if(check.length==0){
					console.log("el chek no existe");
					return;
				}else{
					check[0].addEventListener('click', function(event){
						if($('#check1').prop('checked')){
							$('#formproveedor').find('input, button, select').attr('disabled', false);
							document.getElementById("btnguardarproveedor").disabled=false;
						}else{
							$('#formproveedor').find('input, button, select').attr('disabled','disabled');
							document.getElementById("btnguardarproveedor").disabled=true;
						}
					});//fin de evento
				}
		}//fin de funcion agregarEventoACheck1

		_private.limpiar=function(){
			document.getElementById("formproveedor").reset();
		}//fin de limpiar

	/*_private.validarCampos=function() {
	    var forms = document.getElementsByClassName('needs-validation');
	    var validation = Array.prototype.filter.call(forms, function(form) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }else{
						__private.validarFormulario();
					}
	        form.classList.add('was-validated');
	    });
	}// fin de funcion validar campos*/



	

	//validamos el formulario junto con la informacion de la api
	_private.validarFormulario=function(){
		var valido = _private.formulario.checkValidity();
		if(valido == true){
			console.log("todo listo para guardar");
			if($("#bandera").val()	== "crear"){
			console.log('aquillego');
				_private.peticion("http://127.0.0.1:3000/proveedores/","POST");
			}
			if($("#bandera").val()	== "ver"){//vamos actualizar la info
			_private.peticion("http://127.0.0.1:3000/proveedores/"+$('#id').val(),"PUT");
			}
			else {
				console.log('no se ejecuto la peticion put ni post');
			}//fin del else
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
					$('#modalnuevoproveedor').modal('hide');
					alert("Datos Guardados");
					//volvemos a la pagina 
					location.href = "http://localhost:8000/proveedores";
				})//fin de ajax
	}//fnin de funcino peticion

	
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
		var btnnuevo = $("#btnnuevoproveedor");
		if(btnnuevo.length ==0){
			console.log('el btnnuevoproveedor no existe');
		}else{
			btnnuevo[0].addEventListener('click', function(event){
			$('#modalnuevoproveedor').modal('show');
			_private.limpiar();
			document.getElementById("btnguardarproveedor").disabled=false;
			document.getElementById("check1").style.display="none";
			document.getElementById("che").style.display="none";
			$('#formproveedor').find('input, button, select').attr('disabled', false);
					document.getElementById("btnguardarproveedor").disabled=false;
			$("#bandera").val("crear");
			});//fin del evento del boton	
		}
	}//fin de funcion de evento nuevo 

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);
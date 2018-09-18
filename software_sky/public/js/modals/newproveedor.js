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
		/*_private.agregarEventoAbuscarNombre();
		_private.agregarEventoAanterior();
		_private.agregarEventoASiguiente();
		_private.traerTotal();*/
	}

	_private.limpiar=function(){
		document.getElementaryById("formproveedor").reset();
	}//fin de limpiar

	/*_private.traerTotal=function(){
			$.ajax({
						url: "http://127.0.0.1:3000/filtrarClientes/",
						type: "GET"
					}).done(function(data){
						total = data.data.length;
						if(total <= 5){
							document.getElementById("siguiente").style.display="none";
							document.getElementById("pagina").style.display="none";
						}else{
							document.getElementById("siguiente").style.display="block";
							document.getElementById("pagina").style.display="block";
						}
					})//fin de ajax
	}//fin de funcion traerTotal

	_private.agregarEventoASiguiente=function(){
			var siguiente = $("#siguiente");
			if(siguiente.length==0){
				console.log("el boton siguiente no existe");	return;
			}else{
				siguiente[0].addEventListener('click', function(event){
					var n = document.getElementById("pagina").value;
					var nu = (n*5);
					if(nu <= total){
						if((nu+5) > total){ //predecimos si habra otra pagina
							document.getElementById("siguiente").style.display="none";
						}
						document.getElementById("anterior").style.display="block";
						$("#pagina").text(String(n+1));
						document.getElementById("pagina").value=(n+1);
						_private.hacerFiltro(nu);
					}/*else{
						_private.hacerFiltro(nu);
						document.getElementById("pagina").value=(n+1);
						$("#pagina").text(String(n+1));
					}*/
						/*
				});//fin de evento
			}//fin de if
	}// fin de funcion siguiente*/

	/*_private.agregarEventoAanterior=function(){
		document.getElementById("anterior").style.display="none";
		var anterior = $("#anterior");
		if(anterior.length==0){
			console.log("el boton anterior no existe");
			return;
		}else{
			anterior[0].addEventListener('click', function(event){
			var n = document.getElementById("pagina").value;
			if(n != 1){
				if(n == 2){document.getElementById("anterior").style.display="none";};
				$("#pagina").text(String(n-1));
				document.getElementById("siguiente").style.display="block";
				document.getElementById("pagina").value=(n-1);
				var nu = ((n-2)*5);
				_private.hacerFiltro(nu);
			}else{
				_private.hacerFiltro(0);
			}//fin de if = 0
			});//fin de evento
		}//fin de if
	}// fin de funcion anterior*/

	/*_private.agregarEventoAbuscarNombre= function(a){
			var buscarn = $("#buscarnombre");
			if(buscarn.length==0){
				console.log("el campo buscarnombre no existe");
				return;
			}else{
				buscarn[0].addEventListener('keyup', function(event){
				//	alert('presiono una tecla');
					//aca ira una llamada ajax a la base de datos
					document.getElementById("anterior").style.display="none";
					document.getElementById("siguiente").style.display="block";
					document.getElementById("pagina").value=(1);
					$("#pagina").text("1");
					_private.hacerFiltro(0);
				});//fin de evento
			}
		}// fin de funcion agregarEventoAbuscarNombre

		_private.hacerFiltro=function(a){
				//alert("estoy en AJAX");
				$.ajax({
							url: 'http://localhost:3000/clientes/{"id":"null","a":"'+a+'", "b":"5","texto":"'+document.getElementById("buscarnombre").value+'"}',
							type: "GET"
						}).done(function(data,message){ //cargamos a la tabla
							//alert("AJAX ESTA RESPONDIENDO");
							$("#tablita").remove();
							var b = '<tbody id="tablita" '+
										"</tbody>";
							$("#tablaCliente").append(b);
							for (var a = 0; a<data.data.length; a++){
								//console.log(a);
							var fila=
							"<tr>"+
								'<th scope="row"></th>'+
								"<td>"+data.data[a].nombre+"</td>"+
								"<td>"+data.data[a].nit+"</td>"+
								"<td>"+data.data[a].direccion_fiscal+"</td>"+
								"<td>"+data.data[a].telefono+"</td>"+
								"<td>"+data.data[a].correo+"</td>"+
								"<td>"+
								'<div class="input-group">'+
								'<div class="input-group-append" id="btnver">'+
									'<button type="button" class="buttonsmall hover"'+ 'onClick="ver('+data.data[a].id+')">'+
									'<span class="fas fa-user-edit"></span>'+
									"</button>"+
								'</div>'+
							'</div>'+
								'</td>'+
							"</tr>";
								$("#tablita").append(fila);
							}//fin del for
							//console.log(data);
						})//fin de ajax
		}//fin de funcion hacer filtro*/

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

		//_private.limpiar=function(){
		//		document.getElementById("modalnuevoproveedor").reset();
		//}//fin de limpiar

	/*_private.validarCampos=function() {
	    var forms = document.getElementsByClassName('needs-validation');
	    var validation = Array.prototype.filter.call(forms, function(form) {
	        if (form.checkValidity() === false) {
	          event.preventDefault();
	          event.stopPropagation();
	        }else{
						_private.validarFormulario(form.checkValidity());
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
					$('#modalnuevoproveedor').modal('hide')
					alert("datos guardados");
					//volvemos a la pagina 
					location.href = "http://localhost:8000/proveedores";
				})//fin de ajax
	}//fnin de funcino peticion

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

	/*_private.agregarEventoAbotonGuardar = function(){
		var btnGuardar = $("#btnguardarproveedor");
		if(btnGuardar.length==0){
			console.log("el boton guardar no existe");
			return;
		}else{
			btnGuardar[0].addEventListener('click', function(event){
			//	_private.validarFormulario();
				_private.validarCampos();
			});//fin de evento
		}
	}// fin de funcion evento a boton guardar*/

	_private.asignarFormulario= function(){
		var elementos = $("form");
		if(elementos.length ==0){
			console.log("formulario nuevo no encontado")
		}else{
			_private.formulario=elementos[0];

		}
	}// fin de funcion  asignarFormulario
	
	/*_private.editarproveedor=function(){
		var btneditar = $("btneditarproveedor");
		if (btneditar.length==0){
			console.log('el btneditarproveedor no existe');
		}else{}
			$("#btneditarproveedor")[0].addEventListener('click', function(event) {
			//$('#modaleditarproveedor').modal('show');
			$("#bandera").val("ver");
			});//fin del evento click
		}//fin del else
	}//fin de la funcion editarproveedor*/

	//este boton es para abrir el modal de nuevoprovedor
	_private.agregarEventoAbotonNuevo=function(){
		console.log('si exist btnnuevo');
		var btnnuevo = $("#btnnuevoproveedor");
		if(btnnuevo.length ==0){
			console.log('el btnnuevoproveedor no existe');
		}else{
			btnnuevo[0].addEventListener('click', function(event){
				$('#modalnuevoproveedor').modal('show')
			    $("#bandera").val("crear");
				//abris el modal
			//fin de evento
			//fin de i$("#btnnuevoproveedor")[0].addEventListener('click', function(event) {
			});//fin del evento del boton	
		}
	}//fin de funcion de evento nuevo 

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);
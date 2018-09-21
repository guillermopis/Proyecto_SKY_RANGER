var ModuloListado = function(){
	var _private = {}, _public = {};
	_private.formulario=null;
	var total=0;
	var omitir=0;
	var busque=0;
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
		_private.asignarEventoAbuscarPorCliente();
		//_private.asignarEventoAbuscarPornombre();
		_private.agregarEventoASiguiente();
		_private.configuracionDePaginacion();
		_private.traerTotal();
		_private.agregarEventoAanterior();
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

//aca esta la configuracion inicial de la paginacion
	_private.traerTotal=function(){
			$.ajax({
						url: 'http://127.0.0.1:3000/proveedores/{"a":"0", "b":"0","nombre":""}',
						type: "GET"
					}).done(function(data){
						total = data.data.length;
						if(total <= 5){
							document.getElementById("anterior").style.display="none";
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
			console.log("boton siguiente existe");
			if(siguiente.length==0){
				console.log("el boton siguiente no existe");	return;
			}else{
				siguiente[0].addEventListener('click', function(event){
					var n = document.getElementById("pagina").value;
					var nu = (n*5);
					//alert("estoy en siguiente total= "+total);
					if(nu <= total){
						if((nu+5) > total){ //predecimos si habra otra pagina
							document.getElementById("siguiente").style.display="none";
						}
						document.getElementById("anterior").style.display="block";
						$("#pagina").text(String(n+1));
						document.getElementById("pagina").value=(n+1);
						console.log("vio despues de 5 ahora a tiene otro valor");
						//alert("estoy en siguiente n ="+	document.getElementById("pagina").value);
						_private.hacerFiltro(nu, 5);

					}
				});//fin de evento
			}//fin de if
	}// fin de funcion siguiente

_private.agregarEventoAanterior=function(){
		document.getElementById("anterior").style.display="none";
		var anterior = $("#anterior");
		if(anterior.length==0){
			console.log("el boton anterior no existe");
			return;
		}else{
			anterior[0].addEventListener('click', function(event){
			var n = document.getElementById("pagina").value;
			//alert("estoy en anterior n= "+n);
			if(n != 1){
				if(n == 2){document.getElementById("anterior").style.display="none";}
				document.getElementById("siguiente").style.display="block";
				$("#pagina").text(String(n-1));
				document.getElementById("pagina").value=(n-1);
				var nu = ((n-2)*5);

				_private.hacerFiltro(omitir, busque);
			}else{
				_private.hacerFiltro(omitir, busque);
			}//fin de if = 0
			});//fin de evento
		}//fin de if
	}// fin de funcion anterior


	//aca configuramos los botones para la paginacion
	_private.configuracionDePaginacion=function(total){
		if(total<= 5){
			document.getElementById("anterior").style.display="none";
			document.getElementById("siguiente").style.display="none";
			document.getElementById("pagina").value=(1);
			$("#pagina").text("1");
		}else{
			document.getElementById("anterior").style.display="none";
			document.getElementById("siguiente").style.display="block";
		}
	}// fin de funcion configuracionDePaginacion

_private.asignarEventoAbuscarPorCliente=function(){
		var buscarC = $("#buscarnombre");
		if(buscarC.length==0){
			console.log("el campo buscar por cliente no existe");
		}else{
			buscarC[0].addEventListener('keyup',function(event){
				document.getElementById("anterior").style.display="none";
				$("#pagina").text("1");
			_private.hacerFiltro(omitir,busque);
		});//fin de evento keyup
		}//fin de if
	}//fin de funcioi buscar por nombre de cliente*/


_private.hacerFiltro=function(omitir, busque){
		$.ajax({
					url:  'http://localhost:3000/proveedores/{"a":"'+omitir+'", "b":"'+busque+'","nombre":"'+document.getElementById("buscarnombre").value+'"}',
					type: "GET"
				}).done(function(data,message){ //cargamos a la tabla
					//alert("AJAX ESTA RESPONDIENDO");
					var total = data.data.length;
					//alert("respondiendo");
					console.log("entro a hacerfiltro");
					if(total<=5){
						document.getElementById("siguiente").style.display="none";
					}else{
						document.getElementById("siguiente").style.display="block";
					}
					//alert("estoy en hacerFiltro total= "+total);
					$("#tablita").remove();
					var b = '<tbody id="tablita" '+
								"</tbody>";
					$("#tablaProveedores").append(b);
					var respuestaTotal=data.data.length;
					if(respuestaTotal>5){respuestaTotal=5}
					for (var a = 0; a<respuestaTotal; a++){
						//alert("respondiendo2");
					var fila=
					"<tr>"+
						'<th scope="row"></th>'+
						"<td>"+data.data[a].nombre+"</td>"+
						"<td>"+data.data[a].direccion+"</td>"+
						"<td>"+data.data[a].telefono+"</td>"+
						"<td>"+data.data[a].extension+"</td>"+
						"<td>"+data.data[a].correo_empresa+"</td>"+
						"<td>"+data.data[a].estado+"</td>"+
						"<td>"+
						'<div class="input-group">'+
						'<div class="input-group-append" id="btnver">'+
							'<button type="button" class="buttonsmall hover"'+ 'onClick="ver(#{proveedore.id})">'+
							'<span class="fas fa-user-edit"></span>'+
							"</button>"+
						'</div>'+
					'</div>'+
						'</td>'+
					"</tr>";
						$("#tablita").append(fila);
					}//fin del for
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
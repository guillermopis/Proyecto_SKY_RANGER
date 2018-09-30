
var ModuloListado = function(){
	var _private = {}, _public = {};
	_private.formulario=null;
	var total =0;
	var omitir=0;
	var busque=0;
	var datosPeticion="";
	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		//_private.traerTotal();
		_private.agregarEventoAbotonNuevo();
		_private.agregarEventoAbotonGuardar();
		_private.agregarEventoAbotonGuardarV();
		_private.agregarEventoACheck1();
		_private.agregarEventoAbuscarNombre();
	//	_private.agregarEventoAanterior();
	//	_private.agregarEventoASiguiente();
	//	_private.configuracionDePaginacion();

	}// fin de iniciar

	_private.agregarEventoAbotonCerrar=function(){
		btncerrar = $("#btnCerrar");
		if(btncerrar.length == 0){
			console.log("el botn cerrar de cliente no existe")
		}else{
			btncerrar[0].addEventListener('click', function(event){
				_private.limpiar();
				$("#modalnuevocliente").modal("hide");
			})//fin del evento
		}//fin del if
	}//fin de la funcion btncerrar

	//funcion para guardar un vehiculo a ese cliente.
	_private.agregarEventoAbotonGuardarV=function(){
		var btnguardarv =$("#btnGuardarV");
		if(btnguardarv.length == 0){
			console.log("el botn guardar vehiculo no existe")
		}else{
			btnguardarv[0].addEventListener('click', function(event){
				var forms = document.getElementsByClassName('needs-validation');
				$("#bandera").val("nuevoVehiculo");
				validarCampos(forms,event,function(estado){
					_private.validarFormulario(estado);
				})//fin de llamado a valida campos
			})//fin del evento
		}
	}//fin de funcion agregar evento a boton guardar vehiculo

	_private.traerTotal=function(){
			$.ajax({
						url: "http://127.0.0.1:3000/filtrarClientes/",
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
						_private.hacerFiltro(nu,busque);
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
			if(n != 1){
				if(n == 2){document.getElementById("anterior").style.display="none";};
				$("#pagina").text(String(n-1));
				document.getElementById("siguiente").style.display="block";
				document.getElementById("pagina").value=(n-1);
				var nu = ((n-2)*5);
				_private.hacerFiltro(anterior,busque);
			}else{
				_private.hacerFiltro(omitir,busque);
			}//fin de if = 0
			});//fin de evento
		}//fin de if
	}// fin de funcion anterior

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

	_private.agregarEventoAbuscarNombre= function(a){
			var buscarn = $("#buscarnombre");
			if(buscarn.length==0){
				console.log("el campo buscarnombre no existe");
				return;
			}else{
				buscarn[0].addEventListener('keyup', function(event){
					//aca ira una llamada ajax a la base de datos
					document.getElementById("anterior").style.display="none";
					document.getElementById("siguiente").style.display="block";
					$("#pagina").text("1");
					$("#pagina").val(1);
					//_private.hacerFiltro(omitir,busque);
					_private.hacerFiltro(omitir,busque);
				});//fin de evento
			}
		}// fin de funcion agregarEventoAbuscarNombre

		_private.hacerFiltro=function(omitir,busque){
				$.ajax({
							url: 'http://localhost:3000/clientes/{"id":"null","a":"'+omitir+'", "b":"'+busque+'","texto":"'+document.getElementById("buscarnombre").value+'"}',
							type: "GET"
						}).done(function(data,message){ //cargamos a la tabla

								var total = (data.data.length);
								if(total<=5){
									document.getElementById("siguiente").style.display="none";
								}else{
									document.getElementById("siguiente").style.display="block";
								}

							$("#tablita").remove();
							var b = '<tbody id="tablita" '+
										"</tbody>";
							$("#tablaCliente").append(b);
							var respuestaTotal=data.data.length;
							if(respuestaTotal>5){respuestaTotal=5}
							for (var a = 0; a<respuestaTotal; a++){
								var nomC=("'"+data.data[a].nombre+"'");
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
									'<button type="button" class="buttonsmall hover"'+ 'onClick="nuevoVehiculo('+data.data[a].id+','+nomC+')">'+
									'<span class="fas fa-plus-circle"></span>'+
									'<span class="fas fa-car"></span>'+
									"</button>"+
								'</div>'+
							'</div>'+
								'</td>'+
							"</tr>";
								$("#tablita").append(fila);
							}//fin del for
							//console.log(data);
						})//fin de ajax
		}//fin de funcion hacer filtro

		_private.agregarEventoACheck1=function(){
				var check = $("#check1");
				if(check.length==0){
					console.log("el chec no existe");
					return;
				}else{
					check[0].addEventListener('click', function(event){
						if($('#check1').prop('checked')){
							$('#formcliente').find('input, button, select').attr('disabled', false);
							document.getElementById("btnGuardar").disabled=false;
						}else{
							$('#formcliente').find('input, button, select').attr('disabled','disabled');
							document.getElementById("btnGuardar").disabled=true;
						}
					});//fin de evento
				}
		}//fin de funcion agregarEventoACheck1

		_private.limpiar=function(){
				document.getElementById("formcliente").reset();
		}//fin de limpiar


_private.validarFormulario=function(esvalido){
	if(esvalido == true){
		console.log("todo listo, guardemos la info");
		if($("#bandera").val()	== "crear"){
				datosPeticion={
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
				};
				peticion("http://127.0.0.1:3000/clientes/","POST",datosPeticion,"modalnuevocliente","http://localhost:8000/clientes");
		}
		if($("#bandera").val()	== "ver"){//vamos actualizar la info
			datosPeticion={
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
			};
			peticion("http://127.0.0.1:3000/clientes/"+$('#id').val(),"PUT",datosPeticion,"modalnuevocliente","http://localhost:8000/clientes");
		}
		if($("#bandera").val() == "nuevoVehiculo"){
			datosPeticion={
				"clienteId":document.getElementById("id").value,
				"marca":document.getElementById("marcave").value,
				"linea":document.getElementById("linea").value,
				"modelo":document.getElementById("modelove").value,
				"color":document.getElementById("colorve").value,
				"tipo":document.getElementById("tipove").value,
				"placa":document.getElementById("placave").value,
				"motor":document.getElementById("motor").value,
				"chasis":document.getElementById("chasis").value,
				"estado":document.getElementById("estadove").value,
				"precio_servicio":document.getElementById("precioseve").value,
				"fecha_instalacion":document.getElementById("fechainstve").value
			};
				peticion("http://127.0.0.1:3000/vehiculos/","POST",datosPeticion,"modalnuevocliente","http://localhost:8000/clientes");
		}
	}//fin del if
	else{alert("formulario invalido");}
}//fin de funcion validar formulario


	_private.agregarEventoAbotonGuardar = function(){
		var botonGuardar = $("#btnGuardar");
		if(botonGuardar.length==0){
			console.log("el boton guardar no existe");
			return;
		}else{
			botonGuardar[0].addEventListener('click', function(event){
				var forms = document.getElementsByClassName('needs-validation');
				validarCampos(forms,event,function(estado){
					_private.validarFormulario(estado);
				})//sin fe funcion llamado a funcion validar camposº
			});//fin de evento
		}
	}// fin de funcion evento a boton guardar


	//este boton es para abrir el modal de nuevo cliente
	_private.agregarEventoAbotonNuevo=function(){
		document.getElementById("bandera").style.display="none"
		document.getElementById("id").style.display="none"
		var nuevo = $("#btnnuevocliente");
		if(nuevo.length == 0){
			console.log("boton nuevo no existe");
		}else{
		nuevo[0].addEventListener('click', function(event) {
			$('#modalnuevocliente').modal('show')
			_private.limpiar()
			document.getElementById("btnGuardar").disabled=false;
			document.getElementById("check1").style.display="none";
			document.getElementById("che").style.display="none";
			$('#formcliente').find('input, button, select').attr('disabled', false);
					document.getElementById("btnGuardar").disabled=false;
			$("#bandera").val("crear");
		});
		}
	}//fin de boton nuevo

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

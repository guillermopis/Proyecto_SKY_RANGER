
var ModuloListado = function(){
	var _private = {}, _public = {};
	_private.formulario=null;
	//_private.total=0;
	var total =0;
	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonNuevo();
		_private.asignarFormulario();
		_private.agregarEventoAbotonGuardar();
		_private.agregarEventoACheck1();
		_private.agregarEventoAbuscarNombre();
		_private.agregarEventoAanterior();
		_private.agregarEventoASiguiente();
		_private.traerTotal();
		//_private.agregarEventoAbotonCerrar();
	}

	_private.traerTotal=function(){
		$.ajax({
					url: "http://127.0.0.1:3000/filtrarClientes/",
					type: "GET"
				}).done(function(data){
					total = data.data.length;
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
				_private.hacerFiltro(nu);
			}else{
				_private.hacerFiltro(0);
			}//fin de if = 0
			});//fin de evento
		}//fin de if
	}// fin de funcion siguiente

	_private.agregarEventoAbuscarNombre= function(a){
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
	}//fin de funcion hacer filtro
	_private.agregarEventoACheck1=function(){
		var check = $("#check1");
		if(check.length==0){
			console.log("el boton guardar no existe");
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

	_private.validarFormulario=function(){
		var esvalido = _private.formulario.checkValidity();
		if(esvalido == true){
			console.log("todo listo, guardemos la info");
			if($("#bandera").val()	== "crear"){
					_private.peticion("http://127.0.0.1:3000/clientes/","POST");
			}
			if($("#bandera").val()	== "ver"){//vamos actualizar la info
				_private.peticion("http://127.0.0.1:3000/clientes/"+$('#id').val(),"PUT");
			}
			//_private.EnviarDatosDeCliente();
		}//fin del if
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
					alert(data.mensaje);
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

	_private.agregarEventoAbotonNuevo=function(){
		$("#btnnuevocliente")[0].addEventListener('click', function(event) {
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

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

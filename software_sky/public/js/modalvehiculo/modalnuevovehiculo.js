var ModuloListado = function(){
	var _private = {}, _public = {};
	var total=0;
	var omitir=0;
	var busque=0;
	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.traerTotal();
		_private.configuracionDePaginacion();
		_private.vehiculonuevo();
		_private.asignargps();
		_private.asignarEventoAbuscarPorCliente();
		_private.asignarEventoAbuscarPorPlaca();
		_private.agregarEventoASiguiente();
		_private.agregarEventoAanterior();
	}
//aca esta la configuracion inicial de la paginacion
	_private.traerTotal=function(){
			$.ajax({
						url: 'http://127.0.0.1:3000/vehiculos/{"a":"0", "b":"0","texto":"","placa":""}',
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
					//alert("estoy en siguiente total= "+total);
					if(nu <= total){
						if((nu+5) > total){ //predecimos si habra otra pagina
							document.getElementById("siguiente").style.display="none";
						}
						document.getElementById("anterior").style.display="block";
						$("#pagina").text(String(n+1));
						document.getElementById("pagina").value=(n+1);
						alert("estoy en siguiente n ="+	document.getElementById("pagina").value);
						_private.hacerFiltro(nu,5);

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
			alert("estoy en anterior n= "+n);
			if(n != 1){
				if(n == 2){document.getElementById("anterior").style.display="none";}
				document.getElementById("siguiente").style.display="block";
				$("#pagina").text(String(n-1));
				document.getElementById("pagina").value=(n-1);
				var nu = ((n-2)*5);
				_private.hacerFiltro(omitir,busque);
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


	_private.asignarEventoAbuscarPorPlaca=function(){
		var buscarP = $("#buscarPorPlaca");
		if(buscarP.length==0){
			console.log("el campo buscar por placa no existe");
		}else{
			buscarP[0].addEventListener('keyup',function(event){
			//configuracion de la paginacion
			_private.hacerFiltro(0);
		});//fin de evento keyup
		}//fin de if
	}//fin de funcion buscar por placa

	_private.asignarEventoAbuscarPorCliente=function(){
		var buscarC = $("#buscarPorCliente");
		if(buscarC.length==0){
			console.log("el campo buscar por cliente no existe");
		}else{
			buscarC[0].addEventListener('keyup',function(event){
				document.getElementById("anterior").style.display="none";
				$("#pagina").text("1");
			_private.hacerFiltro(omitir,busque);
		});//fin de evento keyup
		}//fin de if
	}//fin de funcioi buscar por nombre de cliente

	_private.hacerFiltro=function(omitir,buscque){
		$.ajax({
					url:  'http://localhost:3000/vehiculos/{"a":"'+omitir+'", "b":"'+busque+'","texto":"'+document.getElementById("buscarPorCliente").value+'","placa":"'+document.getElementById("buscarPorPlaca").value+'"}',
					type: "GET"
				}).done(function(data,message){ //cargamos a la tabla
					//alert("AJAX ESTA RESPONDIENDO");
					var total = data.data.length;
					alert("respondiendo");
					if(total<=5){
						document.getElementById("siguiente").style.display="none";
						//document.getElementById("anterior").style.display="none";
					//	$("#pagina").text("1");
						//document.getElementById("pagina").value=(1);
					}else{
						document.getElementById("siguiente").style.display="block";
					}
					//alert("estoy en hacerFiltro total= "+total);
					$("#tablita").remove();
					var b = '<tbody id="tablita" '+
								"</tbody>";
					$("#tablaVehiculos").append(b);

					//_private.configuracionDePaginacion(total);
					var respuestaTotal=data.data.length;
					//con este if obligo a que si la consulta trajo mas de 5 registros, solomuestre 5
					if(respuestaTotal>5){respuestaTotal=5}
					for (var a = 0; a<respuestaTotal; a++){
						alert("respondiendo2");
					var fila=
					"<tr>"+
						'<th scope="row"></th>'+
						"<td>"+data.data[a].cliente.nombre+"</td>"+
						"<td>"+data.data[a].marca+"</td>"+
						"<td>"+data.data[a].linea+"</td>"+
						"<td>"+data.data[a].modelo+"</td>"+
						"<td>"+data.data[a].color+"</td>"+
						"<td>"+data.data[a].placa+"</td>"+
						"<td>"+data.data[a].estado+"</td>"+
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
				})//fin de ajax
	}//fin de funcion hacer filtro

	_private.vehiculonuevo=function(){
		$("#btnnuevovehiculo")[0].addEventListener('click', function(event) {
			$('#modalnuevovehiculo').modal('show');
		});
	}

	_private.asignargps=function(){
		$("#btnasignargps")[0].addEventListener('click', function(event) {
			$('#modalasignargpsve').modal('show');
		});
	}
	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

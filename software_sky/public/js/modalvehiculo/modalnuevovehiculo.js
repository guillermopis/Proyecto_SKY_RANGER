var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.vehiculonuevo();
		_private.asignargps();
		_private.asignarEventoAbuscarPorCliente();
		_private.asignarEventoAbuscarPorPlaca();
	}
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
			//configuracion de la paginacion
			_private.hacerFiltro(0);
		});//fin de evento keyup
		}//fin de if
	}//fin de funcioi buscar por nombre de cliente

	_private.hacerFiltro=function(a){
		$.ajax({
					url:  'http://localhost:3000/vehiculos/{"a":"'+a+'", "b":"5","texto":"'+document.getElementById("buscarPorCliente").value+'","placa":"'+document.getElementById("buscarPorPlaca").value+'"}',
					type: "GET"
				}).done(function(data,message){ //cargamos a la tabla
					//alert("AJAX ESTA RESPONDIENDO");
					$("#tablita").remove();
					var b = '<tbody id="tablita" '+
								"</tbody>";
					$("#tablaVehiculos").append(b);
					for (var a = 0; a<data.data.length; a++){
						//console.log(a);
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
					//console.log(data);
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

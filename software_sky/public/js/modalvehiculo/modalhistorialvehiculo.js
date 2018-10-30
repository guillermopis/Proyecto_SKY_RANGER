var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.historialvehiculos();
	}

	//agregamos evento para el modal de un new proveedor
	_private.historialvehiculos=function(){
		$("#historialvehiculo")[0].addEventListener('click', function(event) {
			$('#modalhistorialvehiculos').modal('show');
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

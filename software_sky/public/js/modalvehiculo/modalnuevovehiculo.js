var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.vehiculonuevo();
		_private.asignargps();
	}

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

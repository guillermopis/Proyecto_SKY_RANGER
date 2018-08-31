
var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonNuevo();
	}

	_private.agregarEventoAbotonNuevo=function(){
		$("#btnnuevocliente")[0].addEventListener('click', function(event) {
			$('#modalnuevocliente').modal('show');
			//$('#modalnuevocliente').modal('handleUpdate');
			//$('#modalnuevocliente').on('shown.bs.modal');
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

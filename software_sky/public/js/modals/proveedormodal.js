
var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.proveedornuevo();
		_private.editarproveedor();
	}

	_private.proveedornuevo=function(){
		$("#btnnuevoproveedor")[0].addEventListener('click', function(event) {
			$('#modalnuevopro').modal('show');
		});
	}

	_private.editarproveedor=function(){
		$("#btneditarprov")[0].addEventListener('click', function(event) {
			$('#modaleditarprov').modal('show');
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.usuarionuevo();
	}

	_private.usuarionuevo=function(){
		$("#btnnuevousuario")[0].addEventListener('click', function(event) {
			$('#modalnuevousuario').modal('show');
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

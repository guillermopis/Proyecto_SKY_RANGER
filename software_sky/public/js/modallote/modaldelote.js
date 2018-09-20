var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.lote=function(){
		_private.lotenuevo();
	}

	_private.lotenuevo=function(){
		$("#btnnuevolote")[0].addEventListener('click', function(event) {
			$('#modalnuevolote').modal('show');
		});
	}

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.lote() , false);


var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.agregarEventoAbotonNuevo();
		_private.agregarEventoACheck1();
		//_private.editarcliente();
	}

	_private.agregarEventoACheck1 = function(){
		$("#check1")[0].addEventListener('click', function(event){
			console.log("clic a check1");
		})
	}//fin de funcion agregarEventoACheck1
	_private.agregarEventoAbotonNuevo=function(){
		$("#btnnuevocliente")[0].addEventListener('click', function(event) {
			$('#modalnuevocliente').modal('show');
			$('check1')[0].prop('checked', true);
		});
	}
	/*
	_private.editarcliente=function(){
		$("#btneditarcliente")[0].addEventListener('click', function(event) {
			$('#modaleditarcliente').modal('show');
		});
	}
*/
	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);


var ModuloListado = function(){
	var _private = {}, _public = {};

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		//_private.proveedornuevo();
		_private.editarproveedor();
	}

	//peticion para enviar datos a la api


	//agregamos evento para el modal de un new proveedor
	/*_private.proveedornuevo=function(){
		console.log('entraste botnnuevo');
		$("#btnnuevoproveedor")[0].addEventListener('click', function(event) {
			$('#modalnuevoproveedor').modal('show');
		});
	}*/

	//evento abrir el modal de editar proveedor 
	/*_private.editarproveedor=function(){
		$("#btneditarproveedor")[0].addEventListener('click', function(event) {
			$('#modalnuevoproveedor').modal('show');
		});
	}*/

	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

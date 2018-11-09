var ModuloListado = function(){
	var _private = {}, _public = {};
	_private.formulario=null;
	var codigopalabra = "";

	_public.__construct = function() {
		return _public;
	};

	_public.iniciar=function(){
		_private.asignarFormulario();
		_private.agregarEventoAbotonNuevo();
		_private.limpiar();
		//_private.validarFormulario();
		//_private.loteeditar();
		//_private.agregarEventosimlote();
		_private.agregarEventoAbotonGuardar();
		//_private.codigodelotes();
	}

	
	

	_private.agregarEventoAbotonGuardar=function(){
		var btnguardar= $("#btnGuardarlote");
		console.log("entro al evento btn guardad");
		if(btnguardar.length==0){
			console.log("el boton guardarv no existe");
		}else{
			btnguardar[0].addEventListener('click', function(event){
				console.log("despues del click");
				var forms = document.getElementsByClassName('needs-validation');
				validarCampos(forms,event,function(estado){
					_private.validarFormulario(estado);
				})//sin de funcion llamado a funcion validar camposº
			})//fin de evento
		}//fin de if
	}//fin de funcion guardarV

	_private.validarFormulario=function(esvalido){
		console.log("validar formulario");
		if(esvalido == true){
		//console.log("despues de validarcampos");
			if($("#bandera").val()	== "crearsim"){
						console.log("despues de estado");
						var redireccion="http://localhost:8000/lotes"
						var url="http://127.0.0.1:3000/lotes/"
						var datos={
							clote: document.getElementById("codigolote").value,
							idproveedor: document.getElementById("idproveedor").value,
							ndispositivos: document.getElementById("cantidaddis").value,
							fcompra: document.getElementById("fechacompralote").value,
							factivacion:   document.getElementById("fechaactivacionlote").value,
							fvplan:document.getElementById("fechavencimientolote").value,
							preciounitario: document.getElementById("preciounitariolote").value,
							preciototal: document.getElementById("preciototallote").value,
							duracionplan: document.getElementById("duraciondatoslote").value
						}; //acca van los datos de api
						peticion(url,"POST",datos,"modalnuevolote",redireccion);
					}//fi de if estadono se
			 if($("#bandera").val()	== "creargps"){
						console.log("despues de gps post");
						var redireccion="http://localhost:8000/lotes"
						var url="http://127.0.0.1:3000/lotes/"
						var datos={
							"clote": document.getElementById("codigolote").value,
							"idproveedor": document.getElementById("idproveedor").value,
							"ndispositivos": document.getElementById("cantidaddis").value,
							"fcompra": document.getElementById("fechacompralote").value,
							"factivacion":   document.getElementById("fechaactivacionlote").value,
							"fvplan": 00, //document.getElementById("fechavencimientolote").value,
							"preciounitario": document.getElementById("preciounitariolote").value,
							"preciototal": document.getElementById("preciototallote").value,
							"duracionplan": 0 // document.getElementById("duraciondatoslote").value
						}; //acca van los datos de api
					peticion(url,"POST",datos,"modalnuevolote",redireccion);
				}//fin del if creargps
			}//fin del if esvalido
			else {alert('formulario invalido');
			     }//fin del else
	}//fin de la funcion validar formulario

	_private.limpiar=function(){
			document.getElementById("formnuevolote").reset();
		}//fin de limpiar

	_private.asignarFormulario= function(){
		var elementos = $("form");
		if(elementos.length == 0){
			console.log("formulario nuevo no encontado")
		}else{
			_private.formulario=elementos[0];

		}
	}// fin de funcion  asignarFormulario

	
	_private.agregarEventoAbotonNuevo=function(){
		document.getElementById("bandera").style.display="none"
		document.getElementById("id").style.display="none"
		var btnnuevo = $("#btnnuevolote");

		if(btnnuevo.length == 0){
			console.log("boton nuevo no existe");
		}else{
			btnnuevo[0].addEventListener('click', function(event) {
			$('#modalnuevolote').modal('show')
			
			//$("#bandera").val("crearsim");
			});
		}//fin del else

	}

	
	return _public.__construct.apply(this, arguments);
}
var listado = new ModuloListado();
document.addEventListener('DOMContentLoaded',listado.iniciar() , false);

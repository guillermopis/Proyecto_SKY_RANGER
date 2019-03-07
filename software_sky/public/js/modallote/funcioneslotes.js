var codigopalabra = "";
var agregarfech = "";

function preciototal(){
	var unitario = document.getElementById("preciounitariolote").value;
	var dispositivos = document.getElementById("cantidaddis").value;
	document.getElementById("preciototallote").value = unitario * dispositivos;
}

function check1(checkbox) {
		if (checkbox.checked) {
			console.log("ejecuto bien el check1");
			gpslote.checked = false;
			codigopalabra = "SIM";
			document.getElementById("codigolote").value = codigopalabra;
			document.getElementById("fechavencimientolote").disabled = false;
			document.getElementById("duraciondatoslote").disabled = false;
		} 
		else {
			simlote.checked =false;
			console.log("error chek1 de sim");
		}
}
function check2(checkbox) {
		if (checkbox.checked) {
			codigopalabra = "";
			simlote.checked = false;
			codigopalabra = "GPS";
			document.getElementById("codigolote").value = codigopalabra;
			document.getElementById("fechavencimientolote").disabled = true;
			document.getElementById("duraciondatoslote").disabled = true;
		} 
		else {
			gps.lote.checked= false;
			console.log("error chek2 de gps");
		}
}

//funcion para agregar fecha a codigo de lote
function agregarfechasim(){
	agregarfech = document.getElementById("fechaactivacionlote").value;
	switch (codigopalabra){
		case 'SIM':
			_private.limpiar()
			$("#bandera").val("crearsim");
			document.getElementById("codigolote").value = (codigopalabra +"_"+"FechaActivacion"+"_"+ agregarfech);
			console.log("switch en sim");
		break;
		case 'GPS':
			_private.limpiar()
			document.getElementById("codigolote").value = (codigopalabra +"_"+"FechaImport"+"_"+ agregarfech);
			$("#bandera").val("creargps");
			console.log("switch en gps");
		break;
		default:
		alert("Codigo de lote esta vacio");
		console.log("codigopalabra tiene algo diferente a null");
	}
	/*
	if (codigopalabra == null ){
		alert("Por favor seleccione lote a ingresar SIM");
	}if (codigopalabra == "SIM"){
		document.getElementById("codigolote").value = (codigopalabra +"_"+"activacion"+"_"+ agregarfech);
		console.log(agregarfech);
	}
	else{
		document.getElementById("codigolote").value = (codigopalabra +"_"+"activacion"+"_"+ agregarfech);
		console.log(agregarfech);
	}*/
}

function fechamayor(){
	var fechacompra = document.getElementById("fechacompralote").value;
	var fechavencimiento = document.getElementById("fechavencimientolote").value;

	if((Date.parse(fechacompra)) >= (Date.parse(fechavencimiento))){
		alert("La fecha de compra no puede ser mayor que la fecha de vencimiento");
	}else{
		console.log("fecha de compra es menor a fecha vencimiento");
	}	
}

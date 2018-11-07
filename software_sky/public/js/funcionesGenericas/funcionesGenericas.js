validarCampos=function(forms,event,callback) {
  setTimeout(function() {
  'use strict';
    var validation = Array.prototype.filter.call(forms, function(form) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          var estado = form.checkValidity();
          callback(estado);
        }
        form.classList.add('was-validated');
    });
}, 0 | Math.random()*100);
}// fin de funcion validar campos


peticion=function(url,type,datos,modal,redireccion){
  $.ajax({
        url: url,
        type: type,
        data: datos
      }).done(function(data){
        $(modal).modal('hide')
        alert(data.mensaje);
        location.href = redireccion;
      })//fin de ajax
}//fnin de funcino peticion

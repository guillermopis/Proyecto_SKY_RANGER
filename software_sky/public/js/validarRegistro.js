// funcion para validar que no ingresen comillas ni caracteres especiales
function validateInputCharacter(e)
{
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    caracteres = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ´áéíóúÁÉÍÓÚ ";
    especiales = "8-37-38-32-46-164";
    teclado_especial = false;
        for(var i in especiales)
        {
            if(key==especiales[i])
            {
                teclado_especial = true;
                break;
            }
        }
        if(caracteres.indexOf(teclado) == -1 && !teclado_especial)
        {
            return false;
        }
}

function validarRegistro()
{
    var name                = $('#name').val();
    var last_name           = $('#last_name').val();
    var email               = $('#email').val();
    var password            = $('#password').val();
    var confirm_password    = $('#confirm_password').val();
    var alerta_password = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Las contraseñas no coinciden!</strong></div>';
    var alerta_email = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>El correo electrónico no es válido!</strong></div>';

    //VALIDAMOS EL EMAIL PARA QUE SEA DEL TIPO usuairo@miumg.edu.gt
    if(email != '')
    {
        var expresion_regular = /^\w+([\.-]?\w+)*@[miumg]{5}\.[edu]{3}\.[gt]{2}$/;
        if(!expresion_regular.test(email)){
            $('#msg_error_email').fadeIn("slow").html(alerta_email);
            return false;
        }else{
            $('#msg_error_email').fadeIn("slow").html('');
        }
    }
    
    //VALIDAMOS EL PASSWORD
    if(password != '' || confirm_password != '')
    {
        if(password != confirm_password){
            $('#msg_error_password').fadeIn("slow").html(alerta_password);
            return false;
        }else{
            $('#msg_error_password').fadeIn("slow").html('');
        }
    }
    return true;
}
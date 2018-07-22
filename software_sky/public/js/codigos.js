$(document).ready(function(){
    
    function enabledLogin(){
        if($('#username').val() != "" && $('#password').val() != ""){
            $('#btn_continue').removeAttr('disabled');
        }else{
            $('#btn_continue').attr('disabled','disabled');
        }
    }

    $('#username, #password').keyup(enabledLogin);

    //para mostrar contraseña
    var conteo = 0;
    $('#show_pass').on('click',function(){
        if(conteo==0){
            conteo = 1;
            $('#password').removeAttr('type');
            $('#icon_eye').addClass('glyphicon-eye-close').removeClass('glyphicon-eye-open');
        }else{
            conteo = 0;
            $('#password').attr('type','password');
            $('#icon_eye').addClass('glyphicon-eye-open').removeClass('glyphicon-eye-close');
        } 
    });

    //codigo para el tooltip
    $('[data-toggle="tooltip"]').tooltip();

    //metodo para calificar el video
    $('input[type=radio][name=rating]').change(function(){
        var datos = {
            id_auth : $('#id_auth').val(),
            id_video : $('#id_video').val(),
            votos : this.value
        };
        
        $.ajax({
            data: datos,
            url: '/calificar',
            type: 'post',
            beforeSend : function(){
                $('.msj').text('Procesando, espere por favor...');
            },
            success : function(response){
                $('#starRating').fadeOut("slow");
                $('.msj').delay(500).fadeIn("slow").html(" !Gracias por tu voto¡ </span><span class='label label-warning'>"+datos.votos+"</span> <span class='glyphicon glyphicon-star gl-votos'>");
                $('#total_votos').html("<span class='label label-success'> "+response.countVotos+" </span>")
            }
        });
    });

    //metodo para activar o desactivar el boton de mensajes
    function enabledMessage(){
        if($('#message').val().trim() != ''){
            $('#btn_message').removeAttr('disabled');
        }else{
            $('#btn_message').attr('disabled','disabled');
        }
    }

    //verificamos cada ves que se teclea en el campo del mensaje
    $('#message').keyup(enabledMessage);

    //metodo para activar o desactivar el boton de comentar
    function enabledComment(){
        if($('#comment').val().trim() != ''){
            $('#btnComentar').removeAttr('disabled');
            $('#btnComentar_xs').removeAttr('disabled');
        }else{
            $('#btnComentar').attr('disabled','disabled');
            $('#btnComentar_xs').attr('disabled','disabled');
        }
    }

    //verificamos cada ves que se teclea en el campo de comentario
    $('#comment').keyup(enabledComment);

    /*$('#btnComentar, #btnComentar_xs').on('click', function(){
        $.ajax({
            data: $('#formDataComment').serialize(),
            url: '/comentar',
            type: 'post',
            success : function(){
                $('#comment').val('');
            }
        });
    });*/

    //metodos para agregar un nuevo video y su funcionalidad dinamica
    $('input[type=radio][name=categoria]').on('click', function(){
        $("#soloCategorias").slideUp('slow');
        $("#masDatos").slideDown('slow');
    });

    //metodo para regresar a seleccionar las categorias
    $('#btn_back_categoria').on('click',function(){
        $("#soloCategorias").slideDown('slow');
        $("#masDatos").slideUp('slow');
    });

    //metodo para eliminar una publicacion
    function eliminar(input){
        var eliminarOK = confirm("¿Estás seguro de elminar tu publicación?");
        return (eliminarOK) ? input.parentNode.submit() : false;
    }

    //tabs
    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    /* metod para buscar */
    $('#btn_search').on('click', function(){
        var search_str = $('#search').val();
        location.href="/inicio?search="+search_str;
    });
});
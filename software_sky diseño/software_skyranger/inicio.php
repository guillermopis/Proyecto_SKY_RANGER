<!DOCTYPE html>
<?php
    include("conexion_sql_server.php");
    session_start(); ob_start(); 
?>

<html lang="es">
<head>
    <title>Inicio</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <link rel="Shortcut Icon" type="image/x-icon" href="assets/icons/skyranger.jpg" />
    <script src="js/sweet-alert.min.js"></script>
    <link rel="stylesheet" href="css/sweet-alert.css">
    <link rel="stylesheet" href="css/material-design-iconic-font.min.css"> <!--nos muestra los iconos del menu y de arriba-->   
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css"> <!--nos permite desplazarnos de arriba a abajo en el menu-->        
    <script>window.jQuery || document.write('<script src="js/jquery-1.11.2.min.js"><\/script>')</script> <!--permite mostrar un menu en una opcion-->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
    <div class="navbar-lateral full-reset">
        <div class="visible-xs font-movile-menu mobile-menu-button"></div>
        <div class="full-reset container-menu-movile custom-scroll-containers">
            <div class="logo full-reset all-tittles" style="background-color: #021528">
                SKY RANGER
            </div>
            <div class="full-reset" style="background-color:#021528; padding: 10px 0; color:#fff;">
                <figure>
                    <img src="assets/img/skyranger2.jpeg" class="img-responsive center-box" style="width:70%;">
                </figure>
                <p class="text-center" style="padding-top: 15px;">Sistema de GPS</p>
            </div>
            <div class="full-reset nav-lateral-list-menu" style="background-color: #021528">
                <ul class="list-unstyled"> <!--sirve para alinear la liesta-->     <!--&nbsp significa espacio-->
                    <li>   
                        <div class="dropdown-menu-button"><i class="zmdi zmdi-account zmdi-hc-fw"></i>&nbsp;&nbsp; CLIENTES <i class="zmdi zmdi-chevron-down pull-right zmdi-hc-fw"></i></div>
                        <ul class="list-unstyled" style="background-color: #2874A6">                            
                            <li><a href="trabajador-nuevo.php"><i class="zmdi zmdi-account-add zmdi-hc-fw"></i>&nbsp;&nbsp; NUEVO CLIENTE</a></li>               
                            <li><a href="trabajador-reporte.php"><i class="zmdi zmdi-accounts zmdi-hc-fw"></i>&nbsp;&nbsp; DAR DE BAJA</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="dropdown-menu-button"><i class="zmdi zmdi-accounts zmdi-hc-fw"></i>&nbsp;&nbsp; PROVEEDORES <i class="zmdi zmdi-chevron-down pull-right zmdi-hc-fw"></i></div>
                        <ul class="list-unstyled" style="background-color: #2874A6">
                            <li><a href="cliente-nuevo.php"><i class="zmdi zmdi-account-add zmdi-hc-fw"></i>&nbsp;&nbsp; NUEVO PROVEEDOR</a></li>
                            <li><a href="cliente-reporte.php"><i class="zmdi zmdi-accounts zmdi-hc-fw"></i>&nbsp;&nbsp; Reporte PROVEEDOR</a></li>
                        </ul>
                    </li>                    
                    <li>
                        <div class="dropdown-menu-button"><i class="zmdi zmdi-accounts zmdi-hc-fw"></i>&nbsp;&nbsp; VEHICULOS <i class="zmdi zmdi-chevron-down pull-right zmdi-hc-fw"></i></div>
                        <ul class="list-unstyled" style="background-color: #2874A6">
                            <li><a href="proveedor-nuevo.php"><i class="zmdi zmdi-account-add zmdi-hc-fw"></i>&nbsp;&nbsp; NUEVO VEHICULO</a></li>
                            <li><a href="proveedor-reporte.php"><i class="zmdi zmdi-accounts zmdi-hc-fw"></i>&nbsp;&nbsp; DAR DE BAJA</a></li>
                        </ul>
                    </li>                    
                    </li>                    
                </ul>
            </div>
        </div>
    </div>
<!--barra principal de arriba-->
    <div class="content-page-container full-reset custom-scroll-containers" style="background-color:   #f8f9f9 ;">
        <nav class="navbar-user-top full-reset" style="background-color: #021528">
            <ul class="list-unstyled full-reset">
                <figure>
                   <img src="assets/img/user01.png" alt="user-picture" class="img-responsive img-circle center-box">
                </figure>
                <li style="color:#fff; cursor:default;">
                    <span class="all-tittles"><?php echo $_SESSION['sesion']; ?></span>
                </li>
                <li  class="tooltips-general exit-system-button" data-href="index.php" data-placement="bottom" title="Salir del sistema">
                    <i class="zmdi zmdi-power"></i>
                </li>
                <li class="mobile-menu-button visible-xs" style="float: left !important;">
                    <i class="zmdi zmdi-menu"></i>
                </li>
            </ul>
        </nav>
        
        <section class="full-reset text-center" style="padding: 40px 0;">
            <font face="Balmoral LET" size="6" color="red">
                SKY RANGER GUATEMALA
             </font>   
        </section>                
</div>
</body>
</html>
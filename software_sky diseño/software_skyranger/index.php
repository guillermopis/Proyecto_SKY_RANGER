<!DOCTYPE html>
<html lang="es">
<head>
	<title>SKY RANGER</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="Shortcut Icon" type="image/x-icon" href="assets/icons/skyranger.jpg" />
    <script type="text/javascript" src="js/sweet-alert.min.js"></script>
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>    
    <link rel="stylesheet" href="css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">    
    <link rel="stylesheet" href="css/style.css"> <!--estilo al login-->
    <link rel="stylesheet" href="css/login.css"/> <!--cuadro donde va el login-->

</head>
<body style="background-image: url(assets/img/gps.jpg); background-size: cover;">	
	<div class="form-container"> <!--aqui se agrega un cuadro donde ira la informacion-->
		<p class="text-center" style="margin-top: 17px">			
			<img src="assets/icons/skyranger2.jpeg" border="3" width="50%">
		</p>
	<h4 class="text-center all-tittles" style="margin-bottom: 30px;">Iniciar Sesion</h4>
	<form  method="post" action="login.php">
		<div class="group-material-login">
			<input type="text" name="usuarioE" class="material-login-control" required="" maxlength="70">
			<span class="bar-login"></span> <!--muestra linea en el cuadro de texto -->
			<label><i class="zmdi zmdi-account"></i> &nbsp; Usuario</label>				
		</div><br>
		<div class="group-material-login">
			<input type="password" name="contraseñaE" class="material-login-control" required="" maxlength="70">			
			<span class="highlight-login"></span>
			<span class="bar-login"></span> <!--muestra linea en el cuadro de texto -->
			<labeL><i class="zmdi zmdi-lock"></i> &nbsp; Contraseña</label>
		</div><br>
		<button class="btn-login" name="loginn"  type="submit">Ingresar al Sistema &nbsp; <i class="zmdi zmdi-arrow-right"></i></button>
	</form>
	</div>
	
</body>
</html>
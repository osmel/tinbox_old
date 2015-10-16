<?php
/*
@session_start();
if (!(isset($_SESSION['usuario']))){header("Location:index2.php");}

@header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
@header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
@header("Cache-Control: no-store, no-cache, must-revalidate");
@header("Cache-Control: post-check=0, pre-check=0", false);
@header("Pragma: no-cache");

include('../include/conexion.php');
$enlace = conectar();
$accion="";$id="";$usuario="";$pass="";$nombre="";$apellido="";$correo="";$sexo="";$proyecto="";$tipo="";$estatus="";
if(isset($_REQUEST['accion'])){
  $accion = $_REQUEST['accion'];
  $id = $_REQUEST['id'];
  $usuario = $_REQUEST['usuario'];
  $pass = $_REQUEST['pass'];
  $nombre = $_REQUEST['nombre'];
  $apellido = $_REQUEST['apellido'];
  $correo = $_REQUEST['correo'];
  $sexo = $_REQUEST['sexo'];
  $proyecto = $_REQUEST['proyecto'];
  $tipo = $_REQUEST['tipo'];
  $estatus = $_REQUEST['estatus'];
  if($accion==1){
	mysql_query("insert into usuarios(usuario, idtipo, nombre, apellidos, correo, contrasena, sexo, idproyecto, status,fecha)values('$usuario', '$tipo', '$nombre', '$apellido', '$correo', '$pass', '$sexo', '$proyecto', '$estatus', '".date("Y-m-d")."')",$enlace);
	$accion="";$id="";$usuario="";$pass="";$nombre="";$apellido="";$correo="";$sexo="";$proyecto="";$tipo="";$estatus="";
  }
  if($accion==2){
	  $id = $_REQUEST['id_element'];
	mysql_query("update usuarios set usuario='$usuario', idtipo='$tipo', nombre='$nombre', apellidos='$apellido', correo='$correo', contrasena='$pass', sexo='$sexo', idproyecto='$proyecto', status='$estatus' where idusuario = '$id'",$enlace);
	$accion="";$id="";$usuario="";$pass="";$nombre="";$apellido="";$correo="";$sexo="";$proyecto="";$tipo="";$estatus="";
  }
  if($accion==4){
	mysql_query("delete from usuarios where idusuario = '$id'",$enlace);
  }
  if($accion==3){
    $consulta_usuarios2 = mysql_query("select * from usuarios where idusuario = '$id'",$enlace);
    $row_usuarios2 = mysql_fetch_object($consulta_usuarios2);
    $id = $row_usuarios2 -> idusuario;
    $usuario = $row_usuarios2 -> usuario;
    $pass = $row_usuarios2 -> contrasena;
    $tipo = $row_usuarios2 -> idtipo;
    $nombre = $row_usuarios2 -> nombre;
    $apellido = $row_usuarios2 -> apellidos;
    $correo = $row_usuarios2 -> correo;
    $sexo = $row_usuarios2 -> sexo;
    $proyecto = $row_usuarios2 -> idproyecto;
    $estatus = $row_usuarios2 -> status;
  }
}
*/
  
	$idusuario= 5; //$_SESSION['idusuario'];
	$proyecto =  3;//$_SESSION['idproyecto'];
	$nombre =  "Jose" ;//$_SESSION['nombre'];
	$apellido =  "Perez Perez";//$_SESSION['apellido'];	
	
	echo '<input type="hidden" value="'.$idusuario.'" id="idusuario" name="idusuario">'; 
	echo '<input type="hidden" value="'.$proyecto.'" id="proyecto" name="proyecto">'; 
	echo '<input type="hidden" value="'.$nombre.'" id="nombre" name="nombre">'; 
	echo '<input type="hidden" value="'.$apellido.'" id="apellido" name="apellido">'; 
		
?>
  <!DOCTYPE html>  
    <html>  
    <head>  
        <meta charset="UTF-8" />  
        <title>Crear mi Anuario</title>  

    
     <!-- Importar el lenguaje español ext-lang-es.js   -->
	
	
		<link rel="stylesheet" type="text/css" href="../extjs/resources/css/ext-all.css" />  
		<?php
		echo '<link rel="stylesheet" type="text/css" href="css/data-view.css" />';
		
		?>
		 
	<script type="text/javascript" src="../extjs/ext-all.js" >   </script>

     <!-- Importar el lenguaje español ext-lang-es.js   -->
	<script type="text/javascript" src="../extjs/locale/ext-lang-es.js"></script>   
	
     <!-- Llamar a la aplicaion -->  
        <script src="js/aplicacion.js" type="text/javascript" charset="utf-8"></script>  

<style type="text/css">
.contimagen {
 cursor:move;

}

.textoarea{
 color:#000;
 font: 15px Arial, Helvetica, sans-serif;
 height: auto;
 width: 170px;
 overflow:hidden;
 border:1px solid #99bbe8;
 resize: none;
 cursor:default;
}
/*.contTexto1 {
overflow:scroll;
 
}*/
</style>	

    </head>  
    <body >  
	
    </body>  
</html>  

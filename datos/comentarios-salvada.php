<?php

	include_once("../../conexion.php");
	$enlace = conectar();

   function logmsg($log_string)
   {
	       error_log("\n".$log_string,3,'/tmp/php.log');
   }

$arr = array();
   
//Casos en funcion del pedido 
switch ($_SERVER["REQUEST_METHOD"])
{
	case 'POST':
	
			//creamos una consulta con todos los registro de la tabla
			$rs = mysql_query("select idcomentario,usuario,comentario,contenedor from comentarios where usuario=".$_REQUEST["idusuario"]." and contenedor='".$_REQUEST["contenedor"]."'",$enlace );	
         //realizamos una iteracion a los registros			
			while($obj = mysql_fetch_object($rs)) {
				$arr[] = $obj; //anadimos al arreglo todos los registros
			}
			echo '{';	// borrado "idProperty": "date" so ExtJS probably assumes first field
		
		
			if ($arr ){ 
				echo '"success":true, "data":'.json_encode($arr).'}';
			}
			
			else 	
			{ 
				echo '"success":false, "data":'.json_encode($arr).'}';
			};

	break;
 
	
			default:
	break;
  }
  mysql_close($enlace);
?>
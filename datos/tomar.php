<?php
	$connection= mysql_connect("localhost","root","") or die("Connection Failed".mysql_error());
	mysql_select_db("anuario_db",$connection)or die("Error de conexion a la base de datos".mysql_error());

   function logmsg($log_string)
   {
	       error_log("\n".$log_string,3,'/tmp/php.log');
   }


//Casos en funcion del pedido 
//echo $_SERVER["REQUEST_METHOD"];
switch ($_SERVER["REQUEST_METHOD"])
{
	case 'GET':
			if (($_REQUEST["contenedor"]!='') and ($_REQUEST["idcomentario"]==0))
			{
			$rs = mysql_query("update comentarios set contenedor='' where idusuario=".$_REQUEST["idusuario"]." and contenedor='".$_REQUEST["contenedor"]."'");	 //".$_REQUEST["tablename"]);	
            }
			else
			{	
			$rs = mysql_query("update comentarios set contenedor='".$_REQUEST["contenedor"]."' where idusuario=".$_REQUEST["idusuario"]." and idcomentario=".$_REQUEST["idcomentario"]);	 //".$_REQUEST["tablename"]);	
			};
			//creamos una consulta con todos los registro de la tabla
			$rs = mysql_query("select idcomentario,idusuario,comentario,contenedor from comentarios where idusuario=".$_REQUEST["idusuario"]." and contenedor=''"  );	 //".$_REQUEST["tablename"]);	
         //realizamos una iteracion a los registros			
			while($obj = mysql_fetch_object($rs)) {
				$arr[] = $obj; //anadimos al arreglo todos los registros
			}
			echo '{';	// borrado "idProperty": "date" so ExtJS probably assumes first field
			echo '"success":true, "data":' . json_encode($arr) . '}';
	break;
 //caso de actualizacion 
	CASE 'POST':
	        //decodificar la informacion que viene
			//$_PUT = json_decode(file_get_contents('php://input'));

			//$tokens = explode('/', $_REQUEST["tablename"]);
			
			//$table = $tokens[0];
			//$rowindex = $tokens[1];	

			//$t = "update $table set ";
			
			//foreach ($_PUT as $key => $val) {
			//	$t = $t."$key = '$val',";
			//} 
			//$t = substr($t,0,-1);
			//$t = $t . " where id = ".$rowindex;
			
         //realizamos una iteracion a los registros			
		//	while($obj = mysql_fetch_object($rs)) {
		//		$arr[] = $obj; //anadimos al arreglo todos los registros
		//	}
		
			$rs = mysql_query("update comentarios set contenedor='".$_REQUEST["contenedor"]."' where idusuario=".$_REQUEST["idusuario"]." and idcomentario=".$_REQUEST["idcomentario"]);	 //".$_REQUEST["tablename"]);	
	
			//creamos una consulta con todos los registro de la tabla
			$rs = mysql_query("select idcomentario,idusuario,comentario,contenedor from comentarios where idusuario=".$_REQUEST["idusuario"]." and contenedor=''"  );	 //".$_REQUEST["tablename"]);	
         //realizamos una iteracion a los registros			
			while($obj = mysql_fetch_object($rs)) {
				$arr[] = $obj; //anadimos al arreglo todos los registros
			}
			echo '{';	// borrado "idProperty": "date" so ExtJS probably assumes first field
			echo '"success":true, "data":' . json_encode($arr) . '}';
				
	
	break;
	
			default:
	break;
  }
  mysql_close();
?>
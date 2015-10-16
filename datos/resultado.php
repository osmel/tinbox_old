<?php
	$connection= mysql_connect("localhost","root","") or die("Connection Failed".mysql_error());
	mysql_select_db("anuario_db",$connection)or die("Error de conexion a la base de datos".mysql_error());

   function logmsg($log_string)
   {
	       error_log("\n".$log_string,3,'/tmp/php.log');
   }


//Casos en funcion del pedido 
switch ($_SERVER["REQUEST_METHOD"])
{
	case 'GET':
			$fields = array();
			$arr = array();
			
			//crea un objeto con toda la estructura de la tabla
			$fields_query = mysql_query("describe ".$_REQUEST["tablename"]);//Nos muestra la estructura de Tabla
         //iteracion de todos los campos de la tabla	      
	        while($fobj = mysql_fetch_object($fields_query)) {
			// ExtJS Model 4.x necesita el nombre y la cabecera de columna para el Grid con dataIndex definido
           // Para construir automáticamente el modelo de columna, desde aca se crean los nombres de los campos
				$fobj->name = $fobj->Field;
				$fobj->header = $fobj->Field;
				$fobj->dataIndex = $fobj->Field;
				$fields[] = $fobj; //anadimos al arreglo de campo la estructura por campo(name, header, dataIndex)
			}
			
			//creamos una consulta con todos los registro de la tabla
			$rs = mysql_query("select * from ".$_REQUEST["tablename"]);	
         //realizamos una iteracion a los registros			
			while($obj = mysql_fetch_object($rs)) {
				$arr[] = $obj; //anadimos al arreglo todos los registros
			}
			echo '{ metaData: { "root": "data", "fields" : ' . json_encode($fields) . '}';	// borrado "idProperty": "date" so ExtJS probably assumes first field
			echo ',"success":true, "data":' . json_encode($arr) . '}';
	break;
 //caso de actualizacion 
	CASE 'POST':
	        //decodificar la informacion que viene
			$_PUT = json_decode(file_get_contents('php://input'));

			$tokens = explode('/', $_REQUEST["tablename"]);
			
			$table = $tokens[0];
			$rowindex = $tokens[1];	

			$t = "update $table set ";
			
			foreach ($_PUT as $key => $val) {
				$t = $t."$key = '$val',";
			} 
			$t = substr($t,0,-1);
			$t = $t . " where id = ".$rowindex;
			if (mysql_query($t)) {
				echo "{success:true}";
			}
			else echo "{success:false}";

	break;
	
			default:
	break;
  }
  mysql_close();
?>

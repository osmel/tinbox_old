<?php
//subir multiples archivos
//http://www.pixmatstudios.com/es/blog/codeigniter-uploadify/
//http://www.ajaxshake.com/es/JS/12990/--codigos-html-codigos-javascript-ext-js-gratis.html
if(isset($_FILES)){
  $temp_file_name = $_FILES['photo']['tmp_name'];
  $original_file_name = $_FILES['photo']['name'];

  //5 es el usuario que hay que cogerlo arriba con un hidden de idusuario que pase cuando se suba foto $idusuario = $_REQUEST["idusuario"];
  $idusuario = $_REQUEST["idusuario"];

  // Find file extention
  $ext = explode ('.', $original_file_name);
  $ext = $ext [count ($ext) - 1];

  // Remove the extention from the original file name
  $file_name = str_replace ($ext, '', $original_file_name);

  
  $ahora=time();
  $fecha_actual = localtime(time(),1);
  $mes_actual = $fecha_actual['tm_mon'] + 1;
  $dia_actual = $fecha_actual['tm_mday'];
  //5 es el usuario que hay que cogerlo arriba con un hidden de idusuario que pase cuando se suba foto $idusuario = $_REQUEST["idusuario"];
  $nombre = $idusuario.'img'.$dia_actual.$mes_actual.date ( "his" ,$ahora );
  
  $new_name = '../images/original/'.$nombre.'.'.$ext;

  if (move_uploaded_file ($temp_file_name, $new_name)) {
  
   //===========================redimensionar imagen===================================

	$filename = $new_name; 
	$anchoh = 150;
	$altoh = 150;

	list($ancho, $alto) = getimagesize($filename); 

	$divisor1 = $ancho / $anchoh;
	$divisor2 = $alto / $altoh;

	//Obtener las nuevas dimensiones
	$newancho = $ancho / $divisor1;
	$newalto  = $alto / $divisor2;

	// Content-type para el navegador 

	//************************************************
	$thumb = imagecreatetruecolor($newancho, $newalto); 
  
	//////////////para darle calidad de colores a la imagen si se quita las 2 lineas a continuacion pierde la calidad
	$white = imagecolorallocate($thumb, 255, 255, 255); 
	imagefill($thumb, 0, 0, $white); 
	
	$source = imagecreatefromjpeg($filename); 
	///////////////////////////////////////////	
	// Redimensionar 
	imagecopyresized($thumb, $source, 0, 0, 0, 0, $newancho, $newalto, $ancho, $alto); 
 
	// Creamos el nombre del archivo dependiendo la opción
	//$fichero = 'pdf/original'.$contenHoja.$numHoja.'.'.$ext;
	$fichero  = '../images/img/'.$nombre.'.'.$ext;
	imagejpeg($thumb,$fichero);
	imagedestroy($thumb);
	////////////////////////////////////////////////////////

  
  
  
     echo "{success:true, file:'exito'}";
	 
   } else {
     echo "{success:false, file:'fracaso'}";
    }
}	

//echo "{success:true, file:null}";
?>

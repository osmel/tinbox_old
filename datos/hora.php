<?php
/*
echo "<p>Ejemplo 1: ".date("d/m/y H:i:s")."</p>";
echo "<p>Ejemplo 1: ".date("dmyHis")."</p>";



$fecha_actual = localtime(time(),1);
$anyo_actual = $fecha_actual['tm_year'] + 1900;
$mes_actual = $fecha_actual['tm_mon'] + 1;
$dia_actual = $fecha_actual['tm_mday'];
echo  $dia_actual.$mes_actual.$anyo_actual;
print "<p>Hoy es el $dia_actual/$mes_actual/$anyo_actual.</p>"; 

        $ahora=time();
		echo date ( "his" ,$ahora ); 



$ahora=time();
echo date ( "h:i:s" ,$ahora ); 
$fecha_actual = localtime(time(),1);
$anyo_actual = $fecha_actual['tm_year'] + 1900;
$mes_actual = $fecha_actual['tm_mon'] + 1;
$dia_actual = $fecha_actual['tm_mday'];
echo  '<br/>img'.'01'.$dia_actual.$mes_actual.date ( "his" ,$ahora );
print "<p>Hoy es el $dia_actual/$mes_actual/$anyo_actual.</p>"; 
*/
        

		
  //$temp_file_name = $_FILES['photo']['tmp_name'];
 // $original_file_name = $_FILES['photo']['name'];
  /**/
  $original_file_name = '/imagen/img/osmel.jpg';
  // Find file extention
  $ext = explode ('.', $original_file_name);
  $ext = $ext [count ($ext) - 1];
  echo $ext.'<br/>';

  // Remove the extention from the original file name
  $file_name = str_replace ($ext, '', $original_file_name);
  
    $ext = explode ('/',  $file_name);
  $ext = $ext [count ($ext) - 1];
 
echo substr($ext, 0, -1).'<br/>';
		
  echo $file_name.'<br/>'; 		
  
  
 $idusuario = 5;
$destino = 'images/imagePlantilla/';

$Contenedor = 'ver1';

$ficheroOrigen ='images/img/osmel2334443.jpg';
  $ext = explode ('.', $ficheroOrigen); //devuelve un array de elemento donde los separa el punto(.)
                                        //por ende aqui hay un array de 2 elemento
  $ext = $ext [count ($ext) - 1];  //arreglo el ultimo elemento del arreglo es la extension
  echo 'extension '. $ext.'<br/>';

  // Remove the extention from the original file name
  $file_name = str_replace ($ext, '', $ficheroOrigen);
  $otro = explode ('/',  $file_name);
  $otro = $otro [count ($otro) - 1];
  $otro =  substr($otro, 0, -1);
if ($destino == 'images/imgPlantilla/')  // then $ficheroDestino =$destino.$otro.$idusuario.'.'. $ext;  else el que esta debajo con contenedor
       {$ficheroDestino =$destino.$otro.$idusuario.$Contenedor.'.'. $ext;}
	   else 
	   {$ficheroDestino =$destino.$otro.$idusuario.'.'. $ext;};
   
   echo $ficheroDestino.'<br/>';
 
?>
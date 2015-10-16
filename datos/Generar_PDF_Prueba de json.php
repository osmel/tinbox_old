<?php 
$json = file_get_contents('php://input');
$data=json_decode(stripslashes($json),true);  /* ahora en $data tenemos el objeto que nos enviaron x json, */
$html ='';
$htmlComenta ='';
$htmlOriginal='';			
foreach ($data as $key => $val) { //recorrido de todos los bloques [0 y 1].
  foreach ($val as $tipoConten => $valorTipoConten) { //recorrido de tipo de bloque  [Imagen y comentario].
  foreach ($valorTipoConten as $numHoja => $valorNumHoja) { //recorrido de [0 y 1].
   foreach ($valorNumHoja as $hoja => $valorHoja) { //recorrido de hojas  [hoja1, hoja2].
    foreach ($valorHoja as $contenHoja => $valorConten) { //recorrido de cada contenedor por hoja [0,1,2].		
       echo $key.' '.$tipoConten.' '.$numHoja.'   '.$hoja.'   '.$contenHoja.'   '.$data[$key][$tipoConten][$numHoja][$hoja][$contenHoja]["XP"].'<br/>';     
	}
   }
  }	
 }  //fin del for
}  //fin del foreach

?> 
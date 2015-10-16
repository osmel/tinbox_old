<?php
//subir multiples archivos
//http://www.pixmatstudios.com/es/blog/codeigniter-uploadify/
//http://www.ajaxshake.com/es/JS/12990/--codigos-html-codigos-javascript-ext-js-gratis.html

$idusuario = $_REQUEST["idusuario"];
$ficheroOrigen = $_REQUEST["origen"];
$destino = $_REQUEST["destino"];
$Contenedor = $_REQUEST["contenedor"];
sleep(1); //tiempo de espera

  $ext = explode ('.', $ficheroOrigen); //devuelve un array de elemento donde los separa el punto(.)
                                        //por ende aqui hay un array de 2 elemento
  $ext = $ext [count ($ext) - 1];  //arreglo el ultimo elemento del arreglo es la extension

  // Remove the extention from the original file name
  // Remove the extention from the original file name
  
  //$file_name = str_replace ($ext, '', $ficheroOrigen);
  //$otro = explode ('/',  $file_name);
  //$otro = $otro [count ($otro) - 1];
  //$otro =  substr($otro, 0, -1);
  // echo $ext.' <br/>';  extension 
  //echo 'otro-'.$otro;   nombre del fichero
  
  $otro = substr($ficheroOrigen, 0, -4); 
 // echo $ext.'<br/>';
  //echo $otro.'<br/>';
  if ($destino == 'images/imgPlantilla/')  // then $ficheroDestino =$destino.$otro.$idusuario.'.'. $ext;  else el que esta debajo con contenedor
       {
			$ficheroOrigen1 ='images/original/'.$ficheroOrigen;
			$ficheroOrigen2 =    'images/img/'.$ficheroOrigen;
			$ficheroDestino1 ='images/imgPlantilla/'.$otro.$idusuario.$Contenedor.'.'. $ext;
			$ficheroDestino2 ='images/uso/'.$otro.$idusuario.$Contenedor.'.'. $ext;
	   }
	   else 
	   {
			$ficheroOrigen1 ='images/imgPlantilla/'.$ficheroOrigen;
			$ficheroOrigen2 = 'images/uso/'.$ficheroOrigen;
			$ficheroDestino1 ='images/original/'.substr($otro, 0, -4).'.'. $ext;
			$ficheroDestino2 ='images/img/'.substr($otro, 0, -4).'.'. $ext;
	   };
   
 
 //echo $ficheroOrigen1.'<br/>';
 //echo $ficheroDestino1.'<br/>';
 
 //echo $ficheroOrigen2.'<br/>';
 //echo $ficheroDestino2.'<br/>';
  
  if ((rename('../'.$ficheroOrigen1,  '../'.$ficheroDestino1)) and 
      (rename('../'.$ficheroOrigen2,  '../'.$ficheroDestino2)) )  
  {
   // echo "{success:true, file:".'/images/imgPlantilla/img'.$Contenedor.'.'. $ext."}";
		
           echo json_encode(array(  
                'success'=>true,  
                'file'=>$ficheroDestino1   
            )); 
   } else {
              echo json_encode(array(  
                'success'=>false,  
                'file'=>'fallo'   
            )); 
    }

?>

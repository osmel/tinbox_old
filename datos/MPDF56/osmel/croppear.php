<?php 
$json = file_get_contents('php://input');
$data=json_decode(stripslashes($json),true);  /* ahora en $data tenemos el objeto que nos enviaron x json, */
			
foreach ($data as $key => $val)
//$key=0;
 {  //los "data"

for ($i=0; $i<=2;    $i++)
 { 
 
 
 
 //////////////////////////////////////////////////////////
 
 
$fichero= '../../'.$data[$key]["data".$key][$i]["Imagen"];



////////////////////////////redimensionar imagen//////////////////////////////////////


// Variables que indican el archivo de la imagen y el nuevo tamano 
$filename = $fichero; 
$anchoh = $data[$key]["data".$key][$i]["AnchoH"];
$altoh = $data[$key]["data".$key][$i]["AltoH"];

list($ancho, $alto) = getimagesize($filename); 

//para obtener las nuevas dimensiones, si hubiese sido por porciento entonces hubiese multiplicado por ancho*%

//if($ancho > $alto) {
$divisor1 = $ancho / $anchoh;
//}
//else {
$divisor2 = $alto / $altoh;
//}
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
 
 header('Content-type: image/jpeg'); 
 //var $archivo = $_FILES[$fichero]['name'];
 //var $extension = explode('.',$_FILES[$fichero]['name']);
 //var $num = count($extension)-1;

// Creamos el nombre del archivo dependiendo la opción
 $fichero = 'b'.$i.$key.'bc.'.'jpg';

 imagejpeg($thumb,$fichero);
 //imagepng($thumb);
 imagedestroy($thumb);
 ////////////////////////////////////////////////////////
 

//$fichero= '../'.$data[$key]["data".$key][$i]["Imagen"];
//Padre
$xp = $data[$key]["data".$key][$i]["XP"];
$yp = $data[$key]["data".$key][$i]["YP"];  
$anchop = $data[$key]["data".$key][$i]["AnchoP"];
$altop = $data[$key]["data".$key][$i]["AltoP"];
//hijo
$xh = $data[$key]["data".$key][$i]["XH"];
$yh = $data[$key]["data".$key][$i]["YH"];  
$anchoh = $data[$key]["data".$key][$i]["AnchoH"];
$altoh = $data[$key]["data".$key][$i]["AltoH"];

//inicializando $x, $y, $ancho, $alto
$x = $xh; 
$y = $yh; 
$ancho = $anchoh; 
$alto = $altoh;

//calculos

//cuando tiene un segmento fuera por la y --
if ((($altoh+$yh)<$altop) and ($yh<=0) and (($yh+$altoh)>0))
{
	$y=1;
	$alto=$altoh+$yh;
	//echo "91."+"<br/>";
} 

//cuando tiene un segmento fuera por la y ++
if (($altoh+$yh)>$altop)
{
	$y=$yh;
	$alto=$altoh-$yh;
	//echo "92."+"<br/>";
	
}

//cuando tiene un ambos segmentos fuera de y ++ --
if ((($altoh+$yh)>$altop) and ($yh<=0))
{
	$y=1;
	$alto=$altop;
	//echo "92."+"<br/>";
	
}



//cuando tiene un segmento fuera por la x --
if ((($anchoh+$yh)<$anchop) and ($xh<=0) and (($xh+$anchoh)>0))
{
	$x=1;
	$ancho=$anchoh+$xh;
	//echo "91."+"<br/>";
} 

//cuando tiene un segmento fuera por la x ++
if (($anchoh+$xh)>$anchop)
{
	$x=$xh;
	$ancho=$anchoh-$xh;
	//echo "92."+"<br/>";
	
}

//cuando tiene un ambos segmentos fuera de x ++ --
if ((($anchoh+$xh)>$anchop) and ($xh<=0))
{
	$x=1;
	$ancho=$anchop;
	//echo "92."+"<br/>";
	
}

//cuando la figura esta fuera de los contornos
if ((($xh+$anchoh)<=0) or (($yh+$altoh)<=0) or (($yh>=$altop)) or ($xh>=$anchop))
{
	$x=0;
	$y=0;
	$ancho=0;
	$alto=0;
	//echo "95."+"<br/>";
	
} 

//final para la ubicacion ideal
$x=$x+$xp;
$y=$y+$yp;



	$filename= $fichero; 
	list($w, $h, $type, $attr) = getimagesize($filename); 
	$src_im = imagecreatefromjpeg($filename); 
	$dst_x = $x; //'200';   // termina x 
	$dst_y = $y; //'200';   // termina y 
	$src_x = 0;   // comienza x 
	$src_y = 0;   // comienza y 
	$src_w = $ancho+$dst_x;//'100'+$dst_x; // ancho 
	$src_h = $alto+$dst_y;//'100'+$dst_y; // alto 
	
	
	$dst_im = imagecreatetruecolor($src_w, $src_h); 
	$white = imagecolorallocate($dst_im, 255, 255, 255); 
	imagefill($dst_im, 0, 0, $white); 
	
	imagecopy($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h); 
    
	//header("Content-type: image/png"); 
	
	
	//imagepng($dst_im);   //representar la imagen

    //imagepng($dst_im);   //wwwiiii
	imagejpeg($dst_im, 'imagenes'.$i.$key.'.jpg'); //wwwiiii
    imagedestroy($dst_im);

}  //fin del for
  
  


//	imagepng($dst_im); //destruir la imagen

}  //fin del foreach
$html = 
'
<img src="'.$fichero.'" width="100" />&nbsp;
';

//==============================================================
//==============================================================
//==============================================================
include("../mpdf.php");

$mpdf=new mPDF('c'); 

$mpdf->WriteHTML($html);

$mpdf->Output("osmel.pdf");
exit;
//==============================================================
//==============================================================
//==============================================================
//==============================================================
//==============================================================

	
///////////////////////////////////////////////////////////////////////////////////	

/*

//Padre
$xp = $data[$key]["data".$key][0]["XP"];
$yp = $data[$key]["data".$key][0]["YP"];  
$anchop = $data[$key]["data".$key][0]["AnchoP"];
$altop = $data[$key]["data".$key][0]["AltoP"];
//hijo
$xh = $data[$key]["data".$key][0]["XH"];
$yh = $data[$key]["data".$key][0]["YH"];  
$anchoh = $data[$key]["data".$key][0]["AnchoH"];
$altoh = $data[$key]["data".$key][0]["AltoH"];

//inicializando $x, $y, $ancho, $alto
$x = $xh; 
$y = $yh; 
$ancho = $anchoh; 
$alto = $altoh;

//calculos

//cuando tiene un segmento fuera por la y --
if (($altoh+$yh)<=$altoh)
{
	$y=1;
	$alto=$altoh+$yh;
} 

//cuando tiene un segmento fuera por la y ++
if (($altoh+$yh)>=$altop)
{
	$y=$yh;
	$alto=$altoh-$yh;
}

//cuando tiene un segmento fuera por la x --
if (($anchoh+$xh)<=$anchoh)
{
	$x=1;
	$ancho=$anchoh+$xh;
} 

//cuando tiene un segmento fuera por la x ++
if (($anchoh+$xh)>=$anchop)
{
	$x=$xh;
	$ancho=$anchoh-$xh;
}


//cuando la figura esta fuera de los contornos
if (($xh>=$anchop) or ($yh>=$altop) or (($anchoh+$xh)<=0) or (($altoh+$yh)<=0))
{
	$x=0;
	$y=0;
	$ancho=0;
	$alto=0;
} 

//final para la ubicacion ideal

$x=$x+$xp;
$y=$y+$yp;

*/	
?> 




  

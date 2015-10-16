<?php 
$json = file_get_contents('php://input');
$data=json_decode(stripslashes($json),true);  /* ahora en $data tenemos el objeto que nos enviaron x json, */
$html ='';
$htmlComenta ='';
$htmlOriginal='';			
foreach ($data as $key => $val) { //recorrido de todas las paginas.
   
  for ($i=0; $i<=2;    $i++) {  // recorrido de las 3 fotos
	
	$idusuario = $data[$key]["data".$key][$i]["idusuario"];
	$proyecto = $data[$key]["data".$key][$i]["proyecto"];
	$nombre = $data[$key]["data".$key][$i]["nombre"];
	$apellido = $data[$key]["data".$key][$i]["apellido"];

	
	$fichero= '../'.$data[$key]["data".$key][$i]["Imagen"];  //ruta+foto
    $ext = explode ('.', $fichero); //devuelve un array de elemento donde los separa el punto(.)
                                        //por ende aqui hay un array de 2 elemento
    $ext = $ext [count ($ext) - 1];  //arreglo el ultimo elemento del arreglo es la extension

 //===========================redimensionar imagen===================================

	$filename = $fichero; 
	$anchoh = $data[$key]["data".$key][$i]["AnchoH"];
	$altoh = $data[$key]["data".$key][$i]["AltoH"];

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
	$fichero = 'pdf/original'.$i.$key.'.'.$ext;

	imagejpeg($thumb,$fichero);
	imagedestroy($thumb);
	////////////////////////////////////////////////////////
 

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
	
	//calculo para obtener las posiciones y medidas
	$x=(($xh>=0) and ($xh<=$anchop))*$xh;
	$y=((($yh>0) and ($yh<=$altop))*$yh);
	
	$ancho = (((($xh+$anchoh)>=0) and (($xh+$anchoh)<=$anchop))*($xh+$anchoh))+
	(((($xh+$anchoh)>$anchop) and ($xh<0))*$anchop)+
	(((($xh+$anchoh)>$anchop) and (($xh>=0) and ($xh<$anchop)))*($anchop-$xh));

	$alto = (((($yh+$altoh)>=0) and (($yh+$altoh)<=$altop))*($yh+$altoh))+
	(((($yh+$altoh)>$altop) and ($yh<0))*$altop)+
	(((($yh+$altoh)>$altop) and (($yh>=0) and ($yh<$altop)))*($altop-$yh));
	
	//final del calculo de las posiciones y medidas
	$comx= (($xh<0)*($xh*-1));
	$comy= (($yh<0)*($yh*-1));
	$x=$x+$xp;
	$y=$y+$yp;

	$filename= $fichero; 
	list($w, $h, $type, $attr) = getimagesize($filename); 
	$src_im = imagecreatefromjpeg($filename); 

	$dst_x = 0; //$x;    // termina x 
	$dst_y = 0; //$y;    // termina y 
	$src_x = $comx;   // comienza x 
	$src_y = $comy;   // comienza y 
	$src_w = $ancho+$dst_x; // ancho 
	$src_h = $alto+$dst_y; // alto 

	$dst_im = imagecreatetruecolor($src_w, $src_h); 
	$white = imagecolorallocate($dst_im, 255, 255, 255); 
	imagefill($dst_im, 0, 0, $white); 
	
	imagecopy($dst_im, $src_im, $dst_x, $dst_y, $src_x, $src_y, $src_w, $src_h); 
 	imagejpeg($dst_im, 'pdf/imagenes'.$i.$key.'.'. $ext); 
    imagedestroy($dst_im);

	$filename='pdf/imagenes'.$i.$key.'.'.$ext;	

$xx=0;//80;
$yy=0;//116;
	
	$x=$x+$xx;
	$y=$y+$yy;
	$cm =0; /* cantidad de centimetros a quitar*/
	$x=($x / 28.34645)-$cm;
	$y=$y / 28.34645-$cm;
	$ancho = ($ancho / 28.34645)-$cm;
	$alto = ($alto / 28.34645)-$cm;

	$html .= '<div class="imag" style = "position:absolute; left:'.$x.'cm; top:'.$y.'cm; " >
	<img src="'.$filename.'" style="image-resolution: 300dpi;" width="'.$ancho.'cm" height="'.$alto.'cm" />
	</div>';		

	
}  //fin del for

}  //fin del foreach


//===========================Tratamiento con los comentarios===================================
include_once("../../conexion.php");
$enlace = conectar();
$conten = array( 
			   array( 
				 "cont" => 'text1', 
                      "x" => (199/ 28.34645)-$cm,
                      "y" => (538/ 28.34645)-$cm,
				 "ancho"	=> (153.92/ 28.34645)-$cm,
				 "alto"	=> (153.92/ 28.34645)-$cm
               ),
			   array( 
				 "cont" => 'text2', 
                      "x" => (373/ 28.34645)-$cm,
                      "y" => (480/ 28.34645)-$cm,
				 "ancho"	=> (167.81/ 28.34645)-$cm,
				 "alto"	=> (158.17/ 28.34645)-$cm
               )
             );				

for ($registro = 0; $registro < 2; $registro++)
{
	$rs = mysql_query("select idcomentario,usuario,comentario,contenedor from comentarios where usuario=".$idusuario." and contenedor='".$conten[$registro]["cont"]."'" , $enlace );	 	
		    $TextAreaCont = '<div class="comenta" style = "position:absolute; left:10; top:10;  

													
											left:'.$conten[$registro]['x'].'cm;
											top:'.$conten[$registro]['y'].'cm;											
											width:'.$conten[$registro]['ancho'].'cm;
											height:'.$conten[$registro]['alto'].'cm;											
											">';											
			while($obj = mysql_fetch_object($rs)) {
				$TextAreaCont .= '<div class="comenta" style="
											color:#000;
													font-family:edwardian;
													text-align:justify;
											width: 170px;
											overflow:hidden;
											border:none;
											resize: none;
											margin:1px 0;
											padding: 1px 0;
											background-color: transparent;
											cursor:pointer;											
											" >'.$obj->comentario.'</div>';
			}

             $TextAreaCont = $TextAreaCont.'</div>';
			 $htmlComenta .= $TextAreaCont; 
			 
}

//===========================Impresion de la Hoja pdf===================================

$anchoFondo=21.59-$cm; 
$altoFondo=27.94-$cm; 

 $html = '
<div class="caja" style = "position:absolute;width:'.$anchoFondo.'cm; height:'.$altoFondo.'cm; left=0cm; top=0cm;" >
	<img id="fondo"  src="../images/fondos/fondo_completo.jpg"/> 
	</div>	
	'.$html;

/* crop | cross | none 
	size: 17.59cm 21.94cm;
	border: 4px solid red; 

*/
$html =	
'
<style>
.caja, .imag, .comenta{

		marks: crop;	 
		margin-top:0.0cm;
		margin-bottom:0.0cm;
		margin-left:0.0cm;
		margin-right:0.0cm;
		
		odd-header-name: myHeader2Odd;
		even-header-name: html_myHTMLHeaderEven;
		odd-footer-name: html_myHTMLFooterOdd;
		even-footer-name: myFooter2Even;
		
} 
.imag, .comenta{


		
} 

	@page{
	size: 21.59cm 27.94cm;

		margin-left:0.0cm;
		margin-top:0.0cm;
		margin-right:0.0cm;
		margin-bottom:0.0cm;
	
}


</style>' .$html;

include("MPDF56/mpdf.php");
//(50,64)

//$mpdf=new mPDF(''); 

$mpdf=new mPDF('utf8','letter');  //,'','',32,25,27,25,16,13
//$mpdf=new mPDF('utf8-s',array(215.9,279.4));  //,'','',32,25,27,25,16,13

//$mpdf=new mPDF('utf8-s',array(165.9,215.4));  //,'','',32,25,27,25,16,13
//$mpdf=new mPDF('utf8-s','letter');  //,'','',32,25,27,25,16,13
//$mpdf=new mPDF('utf8-s',array(221.5,286.5));  //,'','',32,25,27,25,16,13
$mpdf->mirrorMargins = 1;
//$mpdf=new mPDF('c',array(165.5,215.4));

//$mpdf->SetDisplayMode('fullpage');

$mpdf->WriteHTML($html);  //imagenes
$mpdf->WriteHTML($htmlComenta); //comentarios


$mpdf->Output("../pdf/".$proyecto.utf8_decode($nombre).$idusuario.".pdf",'F');
 mysql_close($enlace);

exit;


?> 
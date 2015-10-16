<?php
$dir = "../images/imgPlantilla/";
$idusuario= $_REQUEST['idusuario'];
$contenedor= $_REQUEST['contenedor'];
$images = array();
$d = dir($dir);
$si='';
while($name = $d->read()){
    if(!preg_match('/^'.$idusuario.'[^0123456789].*?i*([0-9a-zA-Z]+)'.$contenedor.'\.(jpg|gif|png)$/', $name)) continue;
    $size = filesize($dir.$name);
	$si='si';
    $lastmod = filemtime($dir.$name)*1000;
    $images[] = array('name'=>$name, 'size'=>$size,
			'lastmod'=>$lastmod, 'url'=>$dir.$name);
}
$d->close();

/*
$o = array('images'=>$images);
echo json_encode($o);

*/
if ($images )
     {
       echo json_encode(array(  
                'success'=>true,  
                'images'=>$images   
            )); 
   } else {
              echo json_encode(array(  
                'success'=>false,  
                'images'=>$images 
            )); 
    };


?>
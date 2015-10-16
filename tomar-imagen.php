<?php
$dir = "images/img/";
sleep(1); //tiempo de espera
$idusuario= $_REQUEST['idusuario'];
$images = array();
$d = dir($dir);
while($name = $d->read()){
    
	if(!preg_match('/^'.$idusuario.'[^0123456789].*?i*\.(JPG|jpg|jpeg|jpe|jfif|gif|png|PNG)$/', $name)) continue;

	 //'/^(.*?)\-(\d{3,4})p+|(\d{2,4})x(\d{2,4})+\.JPG|jpg$/';  


    $size = filesize($dir.$name);
    $lastmod = filemtime($dir.$name)*1000;
    $images[] = array('name'=>$name, 'size'=>$size,
			'lastmod'=>$lastmod, 'url'=>$dir.$name);
}
$d->close();

function comparar($x, $y){
 
          if ( $x['name'] == $y['name'] )
             return 0;
          else if ( $x['name'] > $y['name'] )
             return -1;
          else
             return 1;
 
}

usort($images, 'comparar');
$o = array('images'=>$images);
echo json_encode($o);
?>
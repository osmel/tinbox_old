<?php


$html = "
<h3 style=\"font-family: sans;\"> <h3>
<p style=\"font-family:ind_ml_1_001\">&#xd38;&#xd02</p>


";

//==============================================================
//==============================================================
//==============================================================
include("../mpdf.php");

$mpdf=new mPDF('-s','A4','','',32,25,27,25,16,13); 

$mpdf->SetDisplayMode('fullpage');

//$mpdf->useSubstitutionsMB = true;

$mpdf->WriteHTML($html);

$mpdf->Output();
exit;
//==============================================================
//==============================================================


?>
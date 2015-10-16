<?php

$hostname='localhost'; //// specify host, i.e. 'localhost'
$user_bd='root'; //// specify username
$pass_bd=''; //// specify password
$dbase='anuario_db'; //// specify database name

/*
$hostname='mysql.mianuariomx.com'; //// specify host, i.e. 'localhost'
$user_bd='mi_anuario'; //// specify username
$pass_bd='4nu45.smm..'; //// specify password
$dbase='anuario_db'; //// specify database name
*/

$connection = mysql_connect("$hostname" , "$user_bd" , "$pass_bd") 
or die ("Can't connect to MySQL");
$db = mysql_select_db($dbase , $connection) or die ("Can't select database.");
?>

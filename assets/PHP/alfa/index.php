<?php
error_reporting(0);
// die('hi...');
// echo 'hi';

require_once('plugins/PHPMailer.php');
require_once('plugins/excel_reader.php');
require_once('config.php');
require_once('error.php');
require_once('framework/base.php');
require_once('framework/alfa.php');
require_once('framework/db.php');



$app= new Alfa($_REQUEST['route'],1);
?>

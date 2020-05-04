<?php
/**
* 
*/

// require 'plugins/PHPMailer/src/Exception.php';
// require 'plugins/PHPMailer/src/PHPMailer.php';
// require 'plugins/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Mail extends Base
{
	
	public $res;
	function __construct()
	{
		parent::__construct();
		# code...
		// die('mmmmmmm');
	}

	function send($arg,$req){

		// ini_set('SMTP','localhost'); 
		// ini_set('sendmail_from', 'noreply@bitnymex.com'); 

		$this->required('POST',array('to','from','subject','msg'));

		// ini_set('SMTP', "bitnymex.com");
		// ini_set('smtp_port', "25");
		// ini_set('sendmail_from', "noreply@bitnymex.com");

		$cleanedFrom 	= (isset($req->name)?$req->name.' <':'').$req->from.(isset($req->name)?'>':'');//"noreply@bitnymex.com";
		$email 			= $req->to;
		$subject 		= $req->subject;
		$message  		= $req->msg;

		
		$headers  = "From: " . $cleanedFrom . "\r\n";
		$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

		$headers  = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
		// More headers
		$headers .= 'From: '.$cleanedFrom. "\r\n";
		$headers .= 'Reply-To: '.$cleanedFrom . "\r\n";
		$headers .= "X-Sender: <".$cleanedFrom.">\n";
		$headers .= "X-Mailer: PHP\n";

		$m=null;
		try{
			if (mail($email, $subject, $message, $headers)) {
	          $m= 'Your message has been sent.';
	        } else {
	          $m= 'There was a problem sending the email.';
	        }
		}catch(Exception $e){
			$m = $e->getMessage();
		}
		

		
		$res = array(
			'Req'=> $req,
			'Args'=>$arg,
			'Msg'=>$m
		);

		return $res;
	}
}
?>
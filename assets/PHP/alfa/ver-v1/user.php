<?php

class User extends Base
{
	protected $response;
	protected $db;
	function __construct($db)
	{
		parent::__construct();
		$this->db = $db;
		$this->response = array(
			'Msg' 		=> 'User Controller',
			'Result' 	=> false,
			'Status' 	=> 0 
		);
		# code...
	}

	function register(){
		$this->required('POST',array('username','password','name','email','country'));
        $input = $this->req;
        
        $sql = "INSERT INTO profile(username,name,email,country) VALUES('".$input->username."','".$input->name."','".$input->email."','".$input->country."')";
		// $this->response['data'] = $sql;
		$res = $this->db->noquery	($sql);
		if ($res == true) {
			$this->response['Result'] = true;
			$this->response['Status'] = 1;
			$this->response['Msg'] = 'Register successfull';
			
		}

		
		return $this->response;
	}

	function login(){
		$this->required('POST',array('username','password'));
		$input = $this->req;

		$sql = "SELECT * FROM profile WHERE email='".$input->username."' AND password='".$input->password."'";
		$res= $this->db->execute($sql);
		if ($res->num_rows > 0) {
			$row = $res->fetch_assoc();
			$this->response['data'] = $row;	
			$this->response['Result'] = true;
			$this->response['Status'] = 1;
			$this->response['Msg'] = 'Login successfull';

		}

		// $this->response['data']=$sql;	

		return $this->response;
	}

}
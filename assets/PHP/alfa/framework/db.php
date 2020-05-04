<?php
class Database extends Base
{
	protected $connection;
	function __construct($param=null)
	{
		parent::__construct();
		$host = 'localhost';
		$user = 'root';
		$pass = '';
		$db   = 'allinone';
		$this->connection = null;//mysqli_connect($host,$user,$pass,$db);

		// Check connection
		// if (mysqli_connect_errno())
		// {
		//   echo "Failed to connect to MySQL: " . mysqli_connect_error();
		// }
	}

	function noquery($sql){
		// $resp = array(
		// 	'Result' => FALSE, 
		// 	'Msg' => 'Failed'
		// 	'Response' => null
		// );
		// if ($thsi->connection->query($sql) === TRUE) {
		// 	$resp =array(
		// 		'Result' => TRUE, 
		// 		'Msg' => "New record created successfully"
		// 		'Response' => null
		// 	);
		// } else {
		// 	$resp =array(
		// 		'Result' => FALSE, 
		// 		'Msg' => $conn->error
		// 		'Response' => null
		// 	);
		    
		// }
		return $this->connection->query($sql);
	}

	function execute($sql){
		$result = $this->connection->query($sql);
		return $result;
	}
}
?>
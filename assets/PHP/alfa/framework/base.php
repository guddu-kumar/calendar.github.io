<?php
/**
* 
*/
class Base 
{
	protected $version;
	protected $controller;
	protected $method;
	protected $args;
	protected $response;
	protected $conPath;
	protected $routeCount;
	protected $req;
	protected $config;
	protected $excel;

	

	function __construct()
	{
		# code...
		$this->autoload($_REQUEST['route']);
		$this->req = $this->detectRequestBody();
		$this->excel = new PhpExcelReader;

	}

	function autoload($param=null){
		$actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
		$r = explode('?', $param);
		$args = [];
		// if(count($r)>0 && $r!=null){
		// 	$r= $r[1];
		// 	$cols = explode('&', $r);
		// 	foreach ($cols as $key => $value) {
		// 		$col = explode('=', $value);
		// 		$args[$col[0]]=$col[1];
		// 	}
		// }
		
		// print_r($args);
		// die('////');
		if($param!=null){
			$routes = explode('/', $param);	
			// print_r($routes);
		}
		
		$this->routeCount = count($routes);
		$routeCount = $this->routeCount;

		if($routeCount > 0){ $this->version 	= 'ver-'. $routes[0]; }
		if($routeCount > 1){ $this->controller 	= ucfirst($routes[1]); }
		if($routeCount > 2){ $this->method 		= $routes[2]; }
		if($routeCount > 3){ $this->args 		= array_splice($routes,3,$routeCount-3); }
		if($this->args == null){
			$this->args = $args;
		}

		$this->config = $this->read_json($this->version .'/config.json');	

	}

	function read_json($file_path){
		$str = file_get_contents($file_path);
        $obj = null;
        try{
            $obj = json_decode($str);
        }catch(Exception $e){
            $obj=  null;
        }
        return $obj;
    }

	function required($method, $arr){
		if ($_SERVER['REQUEST_METHOD'] === $method) {
			//If Found
		}else{
			$this->response['Msg'] 		= 'Incorrect request method!';
			$this->response['Status'] 	= 1;
			$this->echoResponse();
			die();	
		}
		if ($_SERVER['REQUEST_METHOD'] === 'GET') {
			$this->req = $this->args;	
		}
		
		$res  = [];
		$cols = [];
		
		$this->req = $this->detectRequestBody();
		foreach ($this->req as $key => $value) {
			$cols[] = $key;
		}
		foreach ($arr as $key => $value) {
			if (in_array($value, $cols)){
			  // column found
			}else{
			  $res[] = $value;
			}
		}

		if(count($res)>0){
			$this->response['Msg'] 		= implode(",",$res).' - Column(s) are missing!';
			$this->response['Status'] 	= 1;
			$this->echoResponse();
			die();		
		}
		
	}

	function detectRequestBody() {
		$input = null;
	    $json = file_get_contents('php://input');
	    if($json==''){
	    	return ($_POST==null?$_GET:$_POST);
	    }else{
	    	$input = json_decode($json);
	        if($input == null){
	            $inputVal = explode('&', $json);
	            $input = array();
	            foreach ($inputVal as $value) {
	                $val = explode('=', $value);
	                $v[$val[0]]=$val[1];
	                $input= $v;
	            }
	            $input = (object) $input;
	        }	
	    }
        
        return $input;
	}

	function base64_to_jpeg( $base64_string, $output_file ) {
        // open the output file for writing
        // print_r($base64_string); 
        $ifp = fopen( $output_file, 'wb' ); 

        // split the string on commas
        // $data[ 0 ] == "data:image/png;base64"
        // $data[ 1 ] == <actual base64 string>
        $data = explode( ',', $base64_string );

        // we could add validation here with ensuring count( $data ) > 1
        fwrite( $ifp, base64_decode( $data[ 1 ] ) );

        // clean up the file resource
        fclose( $ifp ); 

        return $output_file; 
    }

 //    function prepare($arr, $sepe = null){
 //        $vals   = array();
 //        $fields = array();
 //        $result = array();
 //        if($sepe == null){
 //            foreach ($arr as $key => $value) {
 //                $str = "'".$value."'";
 //                array_push($vals, $str);
 //                array_push($fields, $key);
 //            }
 //            $result = array('fields' => $fields, 
 //                            'values' => $vals);    
 //        }else{
 //            foreach ($arr as $key => $value) {
 //                $str = $key."='".$value."'";
 //                array_push($result, $str);
 //            }
 //        }
 //        return $result;
 //    }

 //    function authenticate(){
 //        foreach ($_SERVER as $name => $value) {
 //            if(substr($name, 0, 5) == 'HTTP_'){
 //                $this->headers[str_replace(' ', '-', ucwords(strtolower(str_replace('-', ' ', substr($name, 5)))))] = $value;
 //            }
 //        }

 //        print_r($this->headers);
 //        if(isset($this->headers['Client_id'])){
 //            $api_key = $this->headers['Client_id'];
 //            if (!$this->isValidApiKey($api_key)) {
 //                // api key is not present in users table
 //                $response["success"] = 0;
 //                $response["message"] = "Access Denied. Invalid Api key";
 //                $this->echoResponse($response, 401);
 //                die();
 //            } else {
 //                global $user_id;
 //                // get user primary key id
 //                $user_id = $this->getUserId($api_key);
 //            }
 //        }else{
 //            $response["success"] = 0;
 //            $response["message"] = "Api key is misssing";
 //            $this->echoResponse($response, 400);
 //        }
 //    }
	function echoResponse($arr=null, $op=null){
		if($arr==null){
			$arr=$this->response;
		}
		$arr['FrameWork']="Alfa 2.0";
		// header('Content-type: application/json');
  //       header('Access-Control-Allow-Origin: *');
  //       header("Access-Control-Allow-Credentials:true");
  //       header("Access-Control-Allow-Methods: GET,HEAD,OPTIONS,POST,PUT");
  //       header("Access-Control-Allow-Headers:Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
		$json = json_encode($arr);
		echo $json;
	}

}
?>
<?php
/**
* 
*/
// echo 'FrameWork';
/**
* 
*/

class Alfa extends Base
{
	protected $db;
	function __construct($param=null,$op=0)
	{
		parent::__construct();
		# code...
		if($op==1){
			$this->db = new Database();
		}
		$this->autoload($param);
		// if($param!=null){
		// 	$routes = explode('/', $param);	
		// 	// print_r($routes);
		// }
		
		// $routeCount = count($routes);

		// if($routeCount > 0){ $this->version ='ver-'. $routes[0]; }
		// if($routeCount > 1){ $this->controller = ucfirst($routes[1]); }
		// if($routeCount > 2){ $this->method = $routes[2]; }
		// if($routeCount > 3){ $this->args= array_splice($routes,3,$routeCount-3); }

		$routeCount = $this->routeCount;

		$verCheck = $this->checkDirectory($this->version);
		
		if($verCheck['Status']==1){
			$this->conPath = $this->version . '/' . strtolower($this->controller).'.php';
			if(file_exists($this->conPath)){
				require_once($this->conPath);
				if(class_exists($this->controller)){
					$obj = new $this->controller($this->db);
					// print_r($obj);
					if(method_exists($obj,$this->method)){
						$m = $this->method;
						if ($_SERVER['REQUEST_METHOD'] === 'GET') {
							$this->response['Response'] 	= $obj->$m(null,$this->args);

						}else{
							$req = $this->detectRequestBody();
							$this->response['Response'] 	= $obj->$m($this->args,$req); 							
						}

						if(isset($this->response['Response']['Msg'])){
							$this->response['Msg'] = $this->response['Response']['Msg'];
							unset($this->response['Response']['Msg']);
						}else{
							$this->response['Msg'] = null;
						}

						if(isset($this->response['Response']['Status'])){
							$this->response['Status'] = $this->response['Response']['Status'];
							unset($this->response['Response']['Status']);
						}else{
							$this->response['Status'] = 0;
						}
						
						if(isset($this->response['Response']['Result'])){
							$this->response['Result'] = $this->response['Response']['Result'];
							unset($this->response['Response']['Result']);
						}else{
							$this->response['Result'] = 0;
						}						
						
						// array_push($this->response, $this->response['Response']);
						$this->response[]= $this->response['Response'];
						$this->response['resp']= $this->response['Response'];
						unset($this->response['Response']);

						$this->echoResponse();
						die();	
						
					}else{
						$this->response['Msg'] 	= 'Method Not Found!';
						$this->response['Status'] 	= 1;
						$this->echoResponse();
						die();	
					}
				}else{
					$this->response['Msg'] 	= 'Class Not Found!';
					$this->response['Status'] 	= 1;
					$this->echoResponse();
					die();	
				}

			}else{
				$this->response['Msg'] 	= 'Controller Not Found';
				$this->response['Status'] 	= 1;
				$this->echoResponse();
				die();
			}
		}else{
			$this->response['Msg'] 	= 'Version Not Found';
			$this->response['Status'] 	= 1;
			$this->echoResponse();
			die();
		}

	}

	
	function checkDirectory($name){
		$resp = [];
		if(file_exists($name)){
			if(is_dir($name)){
				$resp = array(
					'Message'=>'Found',
					'Status'=>1
				);
			}else{
				$resp = array(
					'Message'=>'Found but it is not a directory',
					'Status'=>2
				);
			}
		}else{
			$resp = array(
				'Message'=>'File/Directory not found',
				'Status'=>0
			);
		}
		return $resp;
	}

	
}
?>
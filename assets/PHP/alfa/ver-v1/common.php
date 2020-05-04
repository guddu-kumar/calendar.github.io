<?php
/**
*
*/
error_reporting(1);
class Common extends Base
{
	protected $db;
	function __construct($db)
	{
        $this->db = $db;
		parent::__construct();
		# code...
	}

	function log(){
        $date = date('m/d/Y h:i:s a', time());
        $actual_link = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $txt['TimeStamp']   = $date;
        $txt['Body']        = $this->req;
        $txt['Request']     = $_REQUEST;
        $txt['Url']         = $actual_link;

        $myfile = file_put_contents('logs.txt', ','.json_encode($txt).PHP_EOL , FILE_APPEND | LOCK_EX);
        $log = file_get_contents("logs.txt");

        $log = str_replace('"{', '{', $log);
        $log = str_replace('}"', '}', $log);

        $response['error']      = 0;
        $response['success']    = 0;
        $response['body']       = $txt;
        $response['request']    = $_REQUEST;
        $response['url']        = $actual_link;
        $response['log']        = json_decode('['.$log.']');
        $response['Msg']        = 'File successfully uploaded!';

        return $response;
    }

    function upload_files(){
        $this->required('POST',array('App','Files','ID'));
        $input = $this->req;
        $response = null;

        if(isset($input->ID) && isset($input->App)){
            $config = $this->config;
            $appName = $input->App;
            $uploadPath = $config->$appName->UploadPath;
            $folder =$uploadPath. '/P'.$input->ID;

            $response['urls'] =[];
            foreach ($input->Files as $key => $value) {
                if(!isset($value->Name)) continue;
                /* File Type */
                $odata =explode(",", $value->Data);
                $data = $odata[1];
                $odata = explode("/", $odata[0]); //$odata[0].split('/');
                $type = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];

                if(isset($value->Name)){
                    $file = $value->Name.'.'.$type;
                }else{
                    $date = date('m/d/Y h:i:s a', time());
                    $file = md5($date) . '.' .$type;// $input->FileType;
                }
                // $file = 'ProfilePic.'.$input->FileType;
                if (!file_exists($folder)) {
                    mkdir($folder, 0777, true);
                }


                $res = $this->base64_to_jpeg($value->Data, $folder.'/'.$file);
                if($res){
                    $response['urls'][] = array(
                        'Name' => $value->Name,
                        'Url' => $config->$appName->LinkURL.'/P'.$input->ID.'/'.$file,
                        'refUrl' => 'P'.$input->ID.'/'.$file
                    );
                }

            }
            $response['error']=0;
            $response['success']=0;
            $response['Msg']='File successfully uploaded!';
        }
        if($response==null){
            $response['error']=1;
            $response['success']=0;
            $response['urls']=[];
            $response['Msg']='Unable to upload file!';
        }
        // $response['config']=$this->config;

        return $response;
    }

    function uploadFiles(){
        $this->required('POST',array('App','Files','ID'));
        $input = $this->req;
        $response = null;
        if(isset($input->ID) && isset($input->App)){
            $config = $this->config;
            $appName = $input->App;
            $uploadPath = $config->$appName->UploadPath;
            $folder =$uploadPath. '/P'.$input->ID;
            $response['urls'] =[];
            $i=0;
            foreach ($input->Files as $key => $value) {
                $odata =explode(",", $value->Data);
                $data = $odata[1];
                $type = explode(";", $value->Data)[0]; //$odata[0].split('/');
                $type = explode("/", $type)[1]; //$odata[1].split(';')[0];
                $date = date('m/d/Y h:i:s a', time()).$i;
                $type = ($value->Type?$value->Type:$type);
                $file = ($value->Name?$value->Name:md5($date). '.' .$type);// $input->FileType;
                if (!file_exists($folder)) {
                    mkdir($folder, 0777, true);
                }
                $res = $this->base64_to_jpeg($value->Data, $folder.'/'.$file);
                if($res){
                    $response['urls'][] = array(
                        'Url' => $config->$appName->LinkURL.'/P'.$input->ID.'/'.$file,
                        'refUrl' => 'P'.$input->ID.'/'.$file,
                        'Id'=>(isset($value->Id)?$value->Id:0)
                    );
                }
                $i++;
            }
            $response['error']=0;
            $response['success']=true;
            $response['Msg']='File successfully uploaded!';
        }
        if($response==null){
            $response['error']=1;
            $response['success']=false;
            $response['urls']=[];
            $response['Msg']='Unable to upload file!';
        }
        return $response;
    }

    function upload_files_client(){
        $this->required('POST',array('App','Files','ID','Dealer'));
        $input = $this->getInput();
        $response = null;

        if(isset($input->ID) && isset($input->App)){
            $config = $this->config;
            $appName = $input->App;
            $uploadPath = $config->$appName->UploadPath;
            $folder =$uploadPath. '/D'. $input->Dealer . '/C' . $input->ID;

            $response['urls'] =[];
            foreach ($input->Files as $key => $value) {
                if(!isset($value->Name)) continue;
                /* File Type */
                $odata =explode(",", $value->Data);
                $data = $odata[1];
                $odata = explode("/", $odata[0]); //$odata[0].split('/');
                $type = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];

                if(isset($value->Name)){
                    $file = $value->Name.'.'.$type;
                }else{
                    $date = date('m/d/Y h:i:s a', time());
                    $file = md5($date) . '.' .$type;// $input->FileType;
                }
                // $file = 'ProfilePic.'.$input->FileType;
                if (!file_exists($folder)) {
                    mkdir($folder, 0777, true);
                }

                $res = $this->base64_to_jpeg($value->Data, $folder.'/'.$file);
                if($res){
                    $response['urls'][] = array(
                        'Name' => $value->Name,
                        'Url' => $config->$appName->LinkURL.'/D'. $input->Dealer . '/C' . $input->ID.'/'.$file,
                        'refUrl' => '/D'. $input->Dealer . '/C' . $input->ID.'/'.$file,
                        'Type'=> (!isset($value->Type)?0:$value->Type)
                    );
                }

            }
            $response['error']=0;
            $response['success']=0;
            $response['message']='File successfully uploaded!';
        }
        if($response==null){
            $response['error']=1;
            $response['success']=0;
            $response['urls']=[];
            $response['message']='Unable to upload file!';
        }
        // $response['config']=$this->config;

        return $response;
    }

    function upload(){
        $this->required('POST',array('App','DealerID','MasterId','oData'));
        $input = $this->detectRequestBody();

        $response = null;

        if(isset($input->DealerID) && isset($input->App)){
            $config     = $this->config;
            $appName    = $input->App;
            $uploadPath = $config->$appName->UploadPath;
            $folder     = $uploadPath. '/D'.$input->DealerID.'/C'.$input->MasterId;

            /*File Type */
            $odata      = explode(",", $input->oData);
            $data       = $odata[1];
            $odata      = explode("/", $odata[0]); //$odata[0].split('/');
            $type       = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];

            if(isset($input->FileName)){
                $file = $input->FileName;
            }else{
                $date = date('m/d/Y h:i:s a', time());
                $file = md5($date) . '.' .$type;// $input->FileType;
            }
            // $file = 'ProfilePic.'.$input->FileType;
            if (!file_exists($folder)) {
                mkdir($folder, 0777, true);
            }
            $response['Result']=true;
            $response['Status']=0;
            $res = $this->base64_to_jpeg($input->oData, $folder.'/'.$file);
            if($res){
                $response['url'] = $config->$appName->LinkURL.'/D'.$input->DealerID.'/C'.$input->MasterId.'/'.$file;
                $response['fileName'] = $file;
                $response['refUrl'] ='/D'.$input->DealerID.'/C'.$input->MasterId.'/'.$file;

            }else{
                $response['url'] = '';
                $response['fileName'] ='';
                $response['refUrl'] = '';
            }

            $response['Msg']='File successfully uploaded!';
        }
        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']='Unable to upload file!';
        }
        // $response['config']=$this->config;

        return $response;
    }

    private function sheetData($sheet) {
        $x = 1;
        $columnName = $sheet['cells'][1];
        $row = [];
        while($x <= $sheet['numRows']) {
            $y = 1;
            $r = null;
            while($y <= $sheet['numCols']) {
                $r[$columnName[$y]] = isset($sheet['cells'][$x][$y]) ? $sheet['cells'][$x][$y] : '';
                $y++;
            }
            array_push($row, $r);
            $x++;
        }
        return $row;
    }

    function uploadxls(){
        // $this->required('POST',array('App','DealerID','MasterId'));
        // $input =(object) $this->detectRequestBody();
        $response = null;
        $excel = $this->excel;
        $config     = $this->config;
        if(isset($_FILES['oData'])){
            $files       = $_FILES['oData'];
            $data        = [];
            if(is_array($files['tmp_name'])){
                foreach ($files['tmp_name'] as $key => $file) {
                $excel->read($file);
                $nr_sheets = count($excel->sheets);     // gets the number of sheets
                    $excel_data = null;                     // to store the the html tables with data of each sheet
                    // traverses the number of sheets and sets html table with each sheet data in $excel_data
                    $sheets = [];
                    for($i=0; $i<$nr_sheets; $i++) {
                        $excel_data = $this->sheetData($excel->sheets[$i]);
                        array_push($sheets,$excel_data);
                    }
                    array_push($data,$sheets);
                }
            }else{
                $excel->read($files['tmp_name']);
                $nr_sheets = count($excel->sheets);     // gets the number of sheets
                $excel_data = null;                     // to store the the html tables with data of each sheet
                // traverses the number of sheets and sets html table with each sheet data in $excel_data
                $sheets = [];
                for($i=0; $i<$nr_sheets; $i++) {
                    $excel_data = $this->sheetData($excel->sheets[$i]);
                    unset($excel_data[0]);
                    array_push($sheets,$excel_data);
                }

                array_push($data,$sheets);
            }

            $response['Data']   =   $data;
            $response['Msg']    =   'File converted successfully!';
            // return $response;
        }
        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']='Unable to upload file!';
        }
        return $response;
    }

    function kycupload(){
        $this->required('POST',array('App','DealerID','MasterId','oData','Type'));
        $input = $this->detectRequestBody();

        $response = null;

        if(isset($input->DealerID) && isset($input->App)){
            $config     = $this->config;
            $appName    = $input->App;
            $uploadPath = '';
            $link = '';
            if($input->Type == 0 || $input->Type == '0'){
                $uploadPath = $config->$appName->UploadPath . '/' . $config->$appName->Id;
                $link = $config->$appName->Id;
            }else if($input->Type == 1 || $input->Type == '1'){
                $uploadPath = $config->$appName->UploadPath . '/' . $config->$appName->Addr;
                $link = $config->$appName->Addr;
            }else if($input->Type == 2 || $input->Type == '2'){
                $uploadPath = $config->$appName->UploadPath . '/' . $config->$appName->Other;
                $link = $config->$appName->Other;
            }

            $folder     = $uploadPath;//. '/D'.$input->DealerID.'/C'.$input->MasterId;

            /*File Type */
            $odata      = explode(",", $input->oData);
            $data       = $odata[1];
            $odata      = explode("/", $odata[0]); //$odata[0].split('/');
            $type       = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];

            if(isset($input->FileName)){
                $file = $input->FileName;
            }else{
                $date = date('m/d/Y h:i:s a', time());
                $file = md5($date) . '.' .$type;// $input->FileType;
            }
            // $file = 'ProfilePic.'.$input->FileType;
            if (!file_exists($folder)) {
                mkdir($folder, 0777, true);
            }

            $response['Result']=true;
            $response['Status']=0;
            $res = $this->base64_to_jpeg($input->oData, $folder.'/'.$file);
            if($res){
                $response['url'] = $config->$appName->LinkURL.'/'.$link.'/'.$file;
                $response['fileName'] = $file;
                $response['refUrl'] = $link.'/'.$file;
            }else{
                $response['url'] = '';
                $response['fileName'] ='';
                $response['refUrl'] = '';
            }

            $response['Msg']='File successfully uploaded!';
        }
        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']='Unable to upload file!';
        }
        // $response['config']=$this->config;

        return $response;
    }

    function agrupload(){
        $this->required('POST',array('App','DealerID','MasterId','oData','Type'));
        $input = $this->detectRequestBody();

        $response = null;

        if(isset($input->DealerID) && isset($input->App)){
            $config     = $this->config;
            $appName    = $input->App;
            $uploadPath = '';
            $link = '';
            if($input->Type == 0 || $input->Type == '0'){ //Commission
                $uploadPath = $config->$appName->UploadPath . '/agreement';
                $link = 'COM-M'. $input->MasterId;
            }else if($input->Type == 1 || $input->Type == '1'){ //Nomination
                $uploadPath = $config->$appName->UploadPath . '/agreement' ;
                $link = 'AGR-M'. $input->MasterId;
            }else if($input->Type == 2 || $input->Type == '2'){ // Pamm
                $uploadPath = $config->$appName->UploadPath . '/agreement';
                $link = 'PAM-M'. $input->MasterId;
            }

            $folder     = $uploadPath;//. '/D'.$input->DealerID.'/C'.$input->MasterId;

            /*File Type */
            $odata      = explode(",", $input->oData);
            $data       = $odata[1];
            $odata      = explode("/", $odata[0]); //$odata[0].split('/');
            $type       = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];

            $file = $link . '.' . $type;

            // if(isset($input->FileName)){
            //     $file = $input->FileName;
            // }else{
            //     $date = date('m/d/Y h:i:s a', time());
            //     $file = md5($date) . '.' .$type;// $input->FileType;
            // }
            // $file = 'ProfilePic.'.$input->FileType;
            // if (!file_exists($folder)) {
            //     mkdir($folder, 0777, true);
            // }

            $response['Result']=true;
            $response['Status']=0;
            $res = $this->base64_to_jpeg($input->oData, $folder.'/'.$file);
            if($res){
                $response['url'] = $config->$appName->LinkURL.'/agreement/'.$file;
                $response['fileName'] = $file;
                $response['refUrl'] = 'docs/agreement/'.$file;
            }else{
                $response['url'] = '';
                $response['fileName'] ='';
                $response['refUrl'] = '';
            }

            $response['Msg']='File successfully uploaded!';
        }
        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']='Unable to upload file!';
        }
        // $response['config']=$this->config;

        return $response;
    }

    function feeds(){
        // $this->required('POST','url');
        $input = $this->getInput();
        $response['error']=1;
        $response['success']=0;
        $response['data']='';
        if(isset($input->xml)){
            if(isset($input->url)){
                try{
                    $url = $input->url;// "https://feeds.feedburner.com/CoinDesk";
                    $xml_string =file_get_contents($url);
                    $response['data'] = $xml_string;
                    $response['error']= 0;
                }catch(Exception $e){}
                //
            }else{
                try{
                    $xml_string =file_get_contents("https://feeds.feedburner.com/CoinDesk");
                    $response['data'] = $xml_string;
                    $response['error']= 0;
                }catch(Exception $e){}
            }
        }
        if(isset($input->url)){
            try{
                $url = $input->url;// "https://feeds.feedburner.com/CoinDesk";
                $xml_string =file_get_contents($url);
                $xml = simplexml_load_string($xml_string);
                $json = json_encode($xml);
                $array = json_decode($json,TRUE);
                $response['data'] = $array;
                $response['error']= 0;
            }catch(Exception $e){}
            //
        }else{
            try{
                $xml_string =file_get_contents("https://feeds.feedburner.com/CoinDesk");
                $xml = simplexml_load_string($xml_string);
                $json = json_encode($xml);
                $array = json_decode($json,TRUE);
                $response['data'] = $array;
                $response['error']= 0;
            }catch(Exception $e){}
        }
        return $response;
    }

    function rss_read(){
        require_once('html2text.php');
        // $h2t =& new html2text($html);
        // $text = $h2t->get_text();
        // $h2t->print_text();
        //allow_url_fopen = 1;
        ob_start();
        $this->required('POST',array('url'));
        $input = $this->getInput();
        $response['error']=1;
        $response['success']=0;
        $response['data']=$input;
        try{
            $url = $input->url;// "https://feeds.feedburner.com/CoinDesk";
            $xml_string =file_get_contents($url);
            // print_r($xml_string);

            $xml = simplexml_load_string($xml_string);
            $json = json_encode($xml);
            ob_end_flush();
            // die;
            $array = json_decode($json,TRUE);
            for($i=0;$i< count($array['channel']['item']);$i++){
                $html = $array['channel']['item'][$i]['description'];
                $h2t = new Html2Text($html);
                $desc =preg_replace('/\[.*?\]/', '', $h2t->get_text());
                $array['channel']['item'][$i]['description'] = $desc;
            }
            $response['data'] = $array;
            $response['error']= 0;
        }catch(Exception $e){
            $response['error']=1;
            $response['success']=0;
            $response['data']=$e;
        }
        return $response;
    }

    function read(){
        $this->required('POST',array('url'));
        $input = $this->getInput();
        $response['error']=1;
        $response['success']=0;
        $response['data']=$input;
        try{
            $url = $input->url;// "https://feeds.feedburner.com/CoinDesk";
            $json = file_get_contents($url);
            $array = json_decode($json,TRUE);
            $response['data'] = $array;
            $response['error']= 0;
        }catch(Exception $e){
            $response['error']=1;
            $response['success']=0;
            $response['data']=$e;
        }
        return $response;
    }

   function UploadProfilePic(){
        $this->required('POST',array('App','LoggedMasterID','oData'));
        $input = $this->detectRequestBody();

        $response = null;

        if( isset($input->App)){
            $config     = $this->config;
            $appName    = $input->App;
            $uploadPath = '';
            $link = '';

            $uploadPath = $config->$appName->UploadPath ;//upload path
            $link = 'Profile'. $input->LoggedMasterID;//new image Name

            $folder     = $uploadPath;//. '/D'.$input->DealerID.'/C'.$input->MasterId;

            /*File Type */

            $odata=$input->oData;
            //$odata1      = explode(",", $input->$oData);
            //$data       = $odata1[1];
            //$odata2      = explode("/", $odata1[0]); //$odata[0].split('/');
            //$type       = explode(";", $odata2[1])[0]; //$odata[1].split(';')[0];


            /*File Type */
            $odata      = explode(",", $input->oData);
            $data       = $odata[1];
            $odata      = explode("/", $odata[0]); //$odata[0].split('/');
            $type       = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];


            $file = $link . '.' . $type;

            $response['Result']=true;
            $response['Status']=0;
            $res = $this->base64_to_jpeg($input->oData, $folder.'/'.$file);
            if($res){
                $response['url'] = $config->$appName->LinkURL.'/profile-picture/'.$file;
                $response['fileName'] = $file;
                $response['type'] = $type;
                $response['input'] = $input;
                $response['data'] = $data;
                $response['refUrl'] = 'docs/profile-picture/'.$file;

                //$response['url'] = "D:/aj-trad/tradersRoomV3/docs/profile-picture";
                //$response['fileName'] = $file;
                //$response['refUrl'] = 'docs/profile-picture/'.$file;
            }else{
                $response['Result']=false;
                $response['Status']=1;
                $response['url'] = '';
                $response['fileName'] ='';
                $response['refUrl'] = '';
            }
            $response['Msg']='File successfully uploaded!';
        }

        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']=' Unable to upload file! ';
        }
        // $response['config']=$this->config;

        return $response;
    }


    function UploadDipositPaymentReceipt(){
        $this->required('POST',array('App','oData'));
        $input = $this->detectRequestBody();

        $response = null;

        if( isset($input->App)){
            $config     = $this->config;
            $appName    = $input->App;
            $uploadPath = '';
           // $link = '';

            $uploadPath = $config->$appName->UploadPath ;//upload path

            $folder     = $uploadPath;//. '/D'.$input->DealerID.'/C'.$input->MasterId;

            /*File Type */

            $odata=$input->oData;


            /*File Type */
            $odata      = explode(",", $input->oData);
            $data       = $odata[1];
            $odata      = explode("/", $odata[0]); //$odata[0].split('/');
            $type       = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];

            $date = date('m/d/Y h:i:s a', time());
            $file = md5($date) . '.' .$type;// $input->FileType;
           // $file = $link . '.' . $type;

            $response['Result']=true;
            $response['Status']=0;
            $res = $this->base64_to_jpeg($input->oData, $folder.'/'.$file);
            if($res){
                 $response['url'] = $config->$appName->LinkURL.'/'.$file;
                $response['fileName'] = $file;
            }else{
                 $response['Result']=false;
            $response['Status']=1;
                $response['url'] = '';
                $response['fileName'] ='';
                $response['refUrl'] = '';
            }
            $response['Msg']='File successfully uploaded!';
        }

        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']=' Unable to upload file! ';
        }
        // $response['config']=$this->config;

        return $response;
    }


   function ajtest(){
        $this->required('POST',array('App','MasterID','oData'));
        $input = $this->detectRequestBody();

        $response = null;

        if( isset($input->App)){
            $config     = $this->config;
            $appName    = $input->App;
            $uploadPath = '';
            $link = '';

            $uploadPath = $config->$appName->UploadPath ;//upload path
            $link = 'Profile'. $input->MasterID;//new image Name

            $folder     = $uploadPath;//. '/D'.$input->DealerID.'/C'.$input->MasterId;

            /*File Type */

            $odata=$input->oData;
            //$odata1      = explode(",", $input->$oData);
            //$data       = $odata1[1];
            //$odata2      = explode("/", $odata1[0]); //$odata[0].split('/');
            //$type       = explode(";", $odata2[1])[0]; //$odata[1].split(';')[0];


            /*File Type */
            $odata      = explode(",", $input->oData);
            $data       = $odata[1];
            $odata      = explode("/", $odata[0]); //$odata[0].split('/');
            $type       = explode(";", $odata[1])[0]; //$odata[1].split(';')[0];


            // $file = $link . '.' . $type;
            $file = $link . '.png';

            $response['Result']=true;
            $response['Status']=0;
            $res = $this->base64_to_jpeg($input->oData, $folder.'/'.$file);
            if($res){
                 $response['url'] = $config->$appName->LinkURL.'/'.$file;
                $response['fileName'] = $file;
                $response['type'] = $type;
                $response['input'] = $input;
                $response['data'] = $data;
                // $response['refUrl'] = 'assets/ProPic/'.$file;

                //$response['url'] = "D:/aj-trad/tradersRoomV3/docs/profile-picture";
                //$response['fileName'] = $file;
                //$response['refUrl'] = 'docs/profile-picture/'.$file;
            }else{
                $response['Result']=false;
                $response['Status']=1;
                $response['url'] = '';
                $response['fileName'] ='';
                $response['refUrl'] = '';
            }
            $response['Msg']='File successfully uploaded!';
        }

        if($response==null){
            $response['Result']=false;
            $response['Status']=1;
            $response['Url']='';
            $response['Msg']=' Unable to upload file! ';
        }
        // $response['config']=$this->config;

        return $response;
    }
}
?>

<?php

/**
 * 
 */
class App
{
	private $_url = null;
	private $_controller = null;


	function __construct()
	{
		# code...
	}


/*
* access to the app main entry, its like the Main function or Main class 
*/
	function init(){
		$this->checkURL();

		$this->checkController();
	}

/*
* check if the user input url on the url bar of browser
*/

	function checkURL(){
		if(!empty($_GET['url'])){//check if the defined url param get an input from user.
			$this->getURL($_GET['url']);//if there is input then calling the function get URL
		}else{
			$this->gotoHomePage();//if no url input then goto homepage.
			exit();//exit the app
			
		}
	}


/*
* set the URL and set assigned it to controller/methods/param
*/

	function getURL($url){
		$url = rtrim($url,'/');
		$url = filter_var($url,FILTER_SANITIZE_URL);
		$this->_url = explode('/', $url);
	}

/*
* check if there is controller file included in the controller folder
*/

	function checkController(){

		$fileName = $this->_url[0];
		$path = "controller/".$fileName.".php";

		if(file_exists($path)){
			$this->setController($fileName,$path);
		}else{
			
			$this->gotoErrorPage();
			exit();
		}
	}

/*
* include first the file and then initialize a controller
*/

	function setController($filename,$path){

		require_once($path);
		$this->_controller = new $filename();
		
		$this->_controller->index();
	}



/*
* direct to home page
*/

	function gotoHomePage(){
		
		$fileName = "Home";
		$path = "controller/home.php";
		echo  
		$this->setController($fileName,$path);
		
		
	}


/*
* direct to error page
*/

	function gotoErrorPage(){
		
		$fileName = "Err";
		$path = "controller/err.php";
		$this->setController($fileName,$path);
	}


}
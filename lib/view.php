<?php

/**
 * 
 */
class View
{
	
	function __construct()
	{
		
	}

	function render($fileController){
		
		include_once("view/header.php");

		include_once("view/".$fileController."/index.php");

		include_once("view/footer.php");
	}
}
<?php

/**
 * 
 */
class Reward extends Controller
{
	
	function __construct()
	{
		parent::__construct();
	}

	function index(){
		$this->_view->render('reward');
	}
}
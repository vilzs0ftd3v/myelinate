<?php
include_once("../lib/session.php");
include_once("../lib/database.php");


$db = new Database();



if(isset($_POST['login'])){
	$user = $_POST['username'];
	$pass = $_POST['password'];
	// $sql = "Select * from login_tbl where username=:username and password=:password;";
	$sql = "Select * from user_tbl where username=:username and password=:password;";
	$param = array(':username' => $user, ':password' => $pass);
	$val = $db->login($sql,$param);

	if (!empty($val)) {
		Session::init();
		Session::set('logIn',true);//
		Session::set('user',$val['username']);
		Session::set('user_id',$val['user_id']);
		echo $val['username'];
		
	}else{
		echo "no";
	}

}

if(isset($_POST['logout'])){
	Session::init();
	Session::destroy();
	echo "okay";
}




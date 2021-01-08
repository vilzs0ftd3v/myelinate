<?php

include_once("../lib/database.php");


$db = new Database();




if(isset($_POST['register'])){
	
	$user = $_POST['username'];
	$pass = $_POST['password'];

	// $firstname = $_POST['firstname'];
	// $lastname = $_POST['lastname'];
	// $email = $_POST['email'];
	// $contactNo = $_POST['contactNo'];

	// $sql = "insert into login_tbl(username,password) values(:username,:password)";
	
		$sql = "select max(user_id) as 'id' from user_tbl where username=:username and password=:password;";
		$param = array(':username' => $user, ':password' => $pass);
		$val = $db->login($sql,$param);
		$id = $val['id'];
		if($id){
			echo "incorrect username or password!";
		}else{
			$sql = "insert into user_tbl(username,password) values(:username,:password)";
			$param = array(':username' => $user, ':password' => $pass);
			$val =$db->runQuery($sql,$param);
			echo "success";
			if (!empty($val)) {
				Session::init();
				Session::set('logIn',true);//
				Session::set('user',$val['username']);
				echo $val['username'];
				
			}
		}

	

	// $sql = "insert into user_tbl(username,password) values(:username,:password)";
	// $param = array(':username' => $user, ':password' => $pass);
	// $db->runQuery($sql,$param);
	
	// // $sql = "select max(login_id) as 'id' from login_tbl;";
	// $sql = "select max(user_id) as 'id' from user_tbl;";
	// $val = $db->login($sql,$param);
	// $id = $val['id'];

	// echo $id;

	// $sql = "insert into user_tbl(login_id,firstname,lastname,email_address,contact_no) values(:id,:firstname,:lastname,:email,:contactNo)";
	// $param = array(':id' => $id, ':firstname' => $firstname,':lastname' => $lastname,':email' => $email,':contactNo' => $contactNo);
	// $db->runQuery($sql,$param);
	
}

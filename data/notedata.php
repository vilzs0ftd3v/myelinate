<?php 
require_once("../lib/database.php");
$db = new Database();

if(isset($_POST['action'])){
    $action = $_POST['action'];
}
if (isset($_POST['note_id'])) {
    $note_id = $_POST['note_id'];
}
if (isset($_POST['user_id'])) {
    $users_id = $_POST['user_id'];
}

if (isset($_POST['userID'])) {
    $userIDs = $_POST['userID'];
}

if (isset($_POST['note_title'])) {
    $note_title = $_POST['note_title'];
}

if (isset($_POST['note_body'])) {
    $note_body = $_POST['note_body'];
}

    
if($action=="insert"){

    $sql = "select * from note_tbl where note_title=:note_title";
	$param = array(':note_title'=>$note_title);
	$result = $db->login($sql,$param);
	if(!empty($result)){
		echo "note already exist!";
		exit;
	}else{
		$sql = "insert into note_tbl(user_id,note_title,note_created,note_body) values(:user_id,:note_title,now(),:note_body)";
		$param = array(':user_id' => $users_id,':note_title' => $note_title,':note_body' => $note_body);
		$data  = $db->runQuery($sql,$param);
		echo $data;
	}

}

if($action =="update"){
	
		$sql = "update note_tbl set note_title=:note_title,note_body=:note_body where note_id=:note_id";
		$param = array(':note_title' => $note_title,':note_body'=>$note_body,':note_id'=>$note_id);
		$data  = $db->runQuery($sql,$param);
		echo $data;
	
}

if($action =="delete"){
	
	$sql = "delete from note_tbl where note_id=:note_id";
	$param = array(':note_id'=>$note_id);
	$data  = $db->runQuery($sql,$param);
	echo $data;

}

if($action == "displayNotes"){
	$sql = "select * from note_tbl where note_title like :val AND user_id=:users_id";
	$param = array(':users_id'=>$userIDs,':val'=>'%'.$note_title.'%');
    $stmt = $db->getQuestion($sql,$param);
    echo json_encode($stmt);
}





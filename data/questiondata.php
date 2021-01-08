<?php

include_once("../lib/database.php");

$db = new Database();

if(isset($_POST['action'])){
	$action = $_POST['action'];
}


if(isset($_POST['username'])){
	$username = $_POST['username'];
}
if(isset($_POST['userID'])){
	$id = $_POST['userID'];
}

if(isset($_POST['archive'])){
	$archive = $_POST['archive'];
}
if(isset($_POST['archiveID'])){
	$archiveID = $_POST['archiveID'];
}

if(isset($_POST['question'])){
	$question = $_POST['question'];
}

if(isset($_POST['answer'])){
	$answer = $_POST['answer'];
}
if(isset($_POST['choicea'])){
	$choicea = $_POST['choicea'];
}
if(isset($_POST['choiceb'])){
	$choiceb = $_POST['choiceb'];
}
if(isset($_POST['choicec'])){
	$choicec = $_POST['choicec'];
}
if(isset($_POST['minute'])){
	$minute = $_POST['minute'];
}

if(isset($_POST['search'])){
	$search = $_POST['search'];
}

if(isset($_POST['itemCount'])){
	$itemCount = $_POST['itemCount'];
}
if(isset($_POST['scoreCount'])){
	$scoreCount = $_POST['scoreCount'];
}
if(isset($_POST['mistakeCount'])){
	$mistakeCount = $_POST['mistakeCount'];
}
if(isset($_POST['time_start'])){
	$time_start = $_POST['time_start'];
}
if(isset($_POST['time_end'])){
	$time_end = $_POST['time_end'];
}


/*if($action == "populateQuestion"){
	$sql="select count(r.archive_id) as 'count', a.archive_name,a.date_added,a.archive_id,a.user_id,a.username from archive_tbl a LEFT join review_tbl r on a.archive_id = r.archive_id GROUP by a.archive_id";
	$data = $db->getValue($sql); 
    echo json_encode($data);
}
*/

if($action == "setQuestionaire"){
	$sql="select * from review_tbl where review_category =:archive order by rand()";
	$param = array(':archive'=>$archive);
	$data = $db->getQuestion($sql,$param); 
    echo json_encode($data);
}

if($action =="insertArchive"){
	$result = false;
	$sql = "select * from archive_tbl where archive_name=:archive";
	$param = array(':archive'=>$archive);
	$result = $db->login($sql,$param);
	if(!empty($result)){
		echo "archive name already exist!";
		exit;
	}else{
		$sql = "insert into archive_tbl(user_id,date_added,archive_name,username)".
		"values(:id,now(),:archive,:username)";
		$param = array(':id'=>$id,':archive'=>$archive,':username'=>$username);
		$data  = $db->runQuery($sql,$param);
		echo $data;
	}
	
}


if($action =="insertQuestion"){
	$sql = "insert into review_tbl(user_id,archive_id,review_category,review_question,review_answer,".
		"review_choicea,review_choiceb,review_choicec,review_time)".
		"values(:user_id,:archive_id,:review_category,:review_question,:review_answer,".
		":review_choicea,:review_choiceb,:review_choicec,:review_time)";
		$param = array(':user_id'=>$id,':archive_id'=>$archiveID,':review_category'=>$archive,
		   ':review_question'=>$question,':review_answer'=>$answer,':review_choicea'=>$choicea,
		   ':review_choiceb'=>$choiceb,':review_choicec'=>$choicec,':review_time'=>$minute);

		$data  = $db->runQuery($sql,$param);

		echo $data;
}

if($action =="searchArchive"){
	$sql = "select count(r.archive_id) as 'count', a.archive_name,a.date_added,a.archive_id,a.user_id,a.username from archive_tbl a LEFT join review_tbl r on a.archive_id = r.archive_id WHERE a.archive_name like :search GROUP by a.archive_id";
	$param = array(":search"=>"%".$search."%");
	$data = $db->getQuestion($sql,$param);
	echo json_encode($data);
}

if($action =="saveUserStat"){
	$sql="insert into userstat_tbl(user_id,itemCount,scoreCount,mistakeCount,category,time_start,time_end)".
		  "values(:userID,:itemCount,:scoreCount,:mistakeCount,:archive,:time_start,:time_end)";
	$param = array(':userID'=>$id,':itemCount'=>$itemCount,':scoreCount'=>$scoreCount,':mistakeCount'=>$mistakeCount,':archive'=>$archive,':time_start'=>$time_start,':time_end'=>$time_end);
	$data  = $db->runQuery($sql,$param);
	echo $data;
}
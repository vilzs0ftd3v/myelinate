<?php
require_once("../lib/database.php");
$db = new Database();

if (isset($_POST['category'])) {
    $category = $_POST['category'];
}
if (isset($_POST['question'])) {
    $question = $_POST['question'];
}
if (isset($_POST['answer'])) {
    $answer = $_POST['answer'];
}
if (isset($_POST['userID'])) {
    $userID = $_POST['userID'];
}
if (isset($_POST['action'])) {
    $action = $_POST['action'];
}

if ($action == "insert") {
    $sql = "insert into activity_tbl(user_id,activity_category,activity_question,activity_answer,activity_date)". 
    "values(:user_id,:activity_category,:activity_question,:activity_answer,now())";
    $param = array(':user_id' => $userID,':activity_category' => $category,':activity_question' => $question,':activity_answer' => $answer);
    $stmt = $db->runQuery($sql,$param);
    echo $stmt;
}
if($action == "display"){
    $sql = "select * from activity_tbl where user_id = :userID AND DATE(activity_date)=DATE(now()) limit 5;";
    $param = array(':userID' => $userID);
    $stmt = $db->getQuestion($sql,$param);
    echo json_encode($stmt);
}
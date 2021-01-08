<?php

require_once("../lib/database.php");
$db = new Database();

if(isset($_POST['user_id'])){
    $user_id = $_POST['user_id'];
}

if(isset($_POST['action'])){
    $action = $_POST['action'];
}

if ($action == "display") {
    $sql = "select category,itemCount,mistakeCount,scoreCount,TIMESTAMPDIFF(SECOND,time_start,time_end)as `seconds` from userstat_tbl where user_id =:user_id";
    $param = array(':user_id' => $user_id );
    $stmt = $db->getQuestion($sql,$param);
    echo json_encode($stmt);
}
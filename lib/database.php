<?php

/**
 * 
 */
class Database extends PDO
{
	private $_table = "";
	
	function __construct()
	{
		//parent::__construct("mysql:host=localhost;dbname=myelination;","root","");	
		//parent::__construct("mysql:host=freedb.tech;dbname=freedbtech_myelination","freedbtech_username","password");
		parent::__construct("mysql:host=db4free.net;dbname=myelination_db","nebuchadnezar","inhVICG6fi5uFk8");
	}

	public function login($sql,$param=false){
		$sth = $this->prepare($sql);
		$sth->execute($param);
		$data = $sth->fetch();
		$count = $sth->rowCount();

		if($count>0){
			return $data;
		}else{
			return false;
		}
	}

	public function runQuery($sql,$param){
		
			$sth = $this->prepare($sql);
			$sth->execute($param);
			return "success";
		
	}


	public function displayComment($id){
		$sth = $this->prepare('select * from comment_tbl where post_id=:post_id;');        
		$param = array(':post_id' => $id);	
        $sth->execute($param);

        while ($row = $sth->fetch()) {
     		$this->_table.="<div><strong>unknown:</strong> ".$row['comment_post']." --<small><i>".$row['comment_date']."</i></small></div>";   	
        }

	}

	public function displayPost($sql){
		
		$sth = $this->prepare($sql);
        
        $sth->execute();

        $this->_table = "<hr><hr><hr><hr><hr><hr>";
        while ($row = $sth->fetch()) {
            $this->_table.="<div><p><h3><strong>".$row['post_title']."</h3></strong>"."<small>-created: ".$row['post_date']."</small></p>";
            $this->_table.="<p>".$row['post_content']."</p></div><hr><input type='text' placeholder='write a comment' class='form-control' id='comment_".$row['post_id']."_id' style='margin-bottom:5px;'><input type='button' value='save' class='btn btn-info btn-sm' id='comment_btn".$row['post_id']."_id' style='margin-bottom:5px;'><input type='button' style='margin-bottom:5px; margin-left:5px;' class='btn btn-sm btn-warning' value='refresh' id ='refreshComment_btn'><input type='hidden' value='".$row['post_id']."' id ='postReference_id'>";
            $this->displayComment($row['post_id']);
            $this->_table.="<hr>";
        }

        return $this->_table;
        
	}


	

	public function getValue($sql,$array = array(), $fetchMode = PDO::FETCH_ASSOC){
		$sth = $this->prepare($sql);

        foreach ($array as $key => $value) {
            $sth->bindValue("$key", $value);
        }
        
        $sth->execute();
        return $sth->fetchAll($fetchMode);
	}


	public function getQuestion($sql,$params,$array = array(), $fetchMode = PDO::FETCH_ASSOC){
		$sth = $this->prepare($sql);

        foreach ($array as $key => $value) {
            $sth->bindValue("$key", $value);
        }
        
        $sth->execute($params);
        return $sth->fetchAll($fetchMode);
	}

	


}
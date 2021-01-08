<!-- check if the user already login -->
<?php include_once("view/found.php"); ?> <!-- load the condition -->

<input type = "hidden" id = "tab_id" value = "question_id">


<?php if (Session::get('logIn') == true):?>

<?php include_once("view/sidebar.php"); ?> <!-- load the sidebar -->

<div class="container-fluid">
    <div class="row">
        <div class = "col-12">
            
            <div id = "dashboardTable_id">
            <button style="margin-bottom:10px;" type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#addArchive_Modal" id = "addArchive_id">
				<img src="public/images/plus.svg" alt="add"> new archive
			</button>
            <input type="text" name="search_btn" id="searchQuestion_id" class="form-control input-sm" placeholder="search query">
            <br>
            <div id = "question_tbl"></div>
            </div>
        </div>
    </div>
</div>

<?php require_once("archive_modal.php"); ?>
<?php require_once("question_modal.php"); ?>
<?php require_once("play_modal.php"); ?>

<?php endif; ?>	
<script src="view/question/js/default.js"></script>

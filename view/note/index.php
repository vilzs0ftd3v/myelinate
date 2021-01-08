

<?php include_once("view/found.php"); ?> <!-- load the condition -->
<?php if (Session::get('logIn') == true):?>
<?php include_once("view/sidebar.php"); ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div id = "dashboardTable_id">
      <input type = "hidden" id = "tab_id" value = "archive_id">
      <button style="margin-bottom:10px;" type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#addNote_Modal" id = "addNote_id">
      <img src="public/images/plus.svg" alt="add"> Add Note
			</button><br>
            <input type="text" name="search_btn" id="searchNoteTitle_id" class="form-control" placeholder="search query">
            <br>
      <div id="displayFrm_id"></div>

        

      </div>
    </div>
  </div>
</div>

<?php include_once("view/note/note_modal.php");?>
<?php include_once("view/note/update_modal.php");?>

<?php endif; ?>	

<script src="view/note/js/default.js"></script>
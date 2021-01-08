

<?php include_once("view/found.php"); ?> <!-- load the condition -->
<?php if (Session::get('logIn') == true):?>
<?php include_once("view/sidebar.php"); ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div id = "dashboardTable_id">
      <button style="margin-bottom:10px;" id = "random_btn" data-backdrop="static" data-keyboard="false" show="true" class="btn btn-sm btn-info" role="dialog">
      <img src="public/images/random.svg" alt="random"> Random
      </button>
      
      <div id="activityTbl_id"></div>

      </div>
    </div>
  </div>
</div>
<?php include_once("view/activity/activity_modal.php"); ?> 
<?php endif; ?>	

<script src="view/activity/js/default.js"></script>
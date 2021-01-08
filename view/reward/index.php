

<?php include_once("view/found.php"); ?> <!-- load the condition -->
<?php if (Session::get('logIn') == true):?>
<?php include_once("view/sidebar.php"); ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div id = "dashboardTable_id">
      <input type = "hidden" id = "tab_id" value = "reward_id">
        <div id="rewardTbl_id"></div>

      </div>
    </div>
  </div>
</div>


<?php endif; ?>	

<script src="view/reward/js/default.js"></script>
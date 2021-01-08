<?php include_once("view/found.php"); ?> <!-- load the condition -->
<?php if (Session::get('logIn') == true):?>
<?php include_once("view/sidebar.php"); ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div id = "dashboardTable_id">
      
      <div class="row">
            <div class="col-sm-6">
                <div class="card bg-light" style="border:none;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-6" style="text-align:left;float:left;margin:0px;padding:0px;">
                            <h5 class="card-title"><img  src="public/images/questionDash.svg" alt=""></h5>
                                </div>
                                <div class="col-6" style="text-align:right;">
                            <p class="card-text" style="font-size:30px; color:#fd7e14;float:right;margin-left:0px;">207</p>
                        </div>
                    </div>
                    <p style="text-align:right;" class="card-text">Questions and different category of questions are waiting.</p>
                </div>
                </div>
                <br>
            </div>
            <div class="col-sm-6">
                <div class="card bg-light" style="border:none;">
                <div class="card-body">
                    <div class="row">
                            <div class="col-6" style="text-align:left;float:left;margin:0px;padding:0px;">
                                <h5 class="card-title"><img src="public/images/noteDash.svg" alt=""></h5>
                                    </div>
                                    <div class="col-6" style="text-align:right;">
                                <p class="card-text" style="font-size:30px; color:#fd7e14;float:right;margin-left:0px;">88</p>
                            </div>
                    </div>
                    <p style="text-align:right;" class="card-text">Note taking is important especially if you are really preoccupied and focused.</p>
                </div>
                </div>
                <br>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="card bg-light" style="border:none;">
                <div class="card-body">
                    <div class="row">
                                <div class="col-6" style="text-align:left;float:left;margin:0px;padding:0px;">
                                    <h5 class="card-title"><img src="public/images/activityDash.svg" alt=""></h5>
                                        </div>
                                        <div class="col-6" style="text-align:right;">
                                    <p class="card-text" style="font-size:30px; color:#fd7e14;float:right;margin-left:0px;">70</p>
                                </div>
                        </div>
                        <p style="text-align:right;" class="card-text">Activity practices our self in dealing with hard stuff that leads us to mastery.</p>
                </div>
                </div>
                <br>
            </div>
            <div class="col-sm-6">
                <div class="card bg-light" style="border:none;">
                <div class="card-body">
                <div class="row">
                                <div class="col-6" style="text-align:left;float:left;margin:0px;padding:0px;">
                                    <h5 class="card-title"><img src="public/images/rewardDash.svg" alt=""></h5>
                                        </div>
                                        <div class="col-6" style="text-align:right;">
                                    <p class="card-text" style="font-size:30px; color:#fd7e14;float:right;margin-left:0px;">101</p>
                                </div>
                        </div>
                        <p style="text-align:right;" class="card-text">Reward is vital motivation to continue even it's hard to get our self better.</p>

                </div>
                </div>
                <br>
            </div>
        </div>

      </div>
    </div>
  </div>
</div>
<?php endif; ?>	
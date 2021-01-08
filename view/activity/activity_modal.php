<!-- add note modal -->

<div data-backdrop="static" data-keyboard="false" show="true" class="modal fade" id="random_Modal" tabindex="-1" role="dialog" aria-labelledby="addNote_Modal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header" style = "color:black;">
		<h5>Random Question</h5>
      </div>


      <div class="modal-body">
      <input type="button" value="generate" id = "generate_btn" class="btn btn-sm btn-primary" style="margin-bottom:7px;"><br>
      <div id="randomDisplay_id" style="margin-bottom:7px; text-align:center;"></div>
      <input type="number" id = "userAnswer_id" class="form-control" style="margin-bottom:7px;" placeholder="answer">
      <input type="button" value="check" id = "check_btn" class="btn btn-sm btn-info" style="margin-bottom:7px;">
      <p id = "mathResult_id" style="text-align:center;"> </p>
      <div class="modal-footer">

	  <button type="button" class="btn btn-default" data-dismiss="modal" id = "closeRandom_id">Close</button>
      </div>


    </div>
  </div>
</div>


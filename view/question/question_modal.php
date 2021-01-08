<!-- Add Modal -->
<div data-backdrop="static" data-keyboard="false" show="true" class="modal fade" id="addQuestion_Modal" tabindex="-1" role="dialog" aria-labelledby="addQuestion_Modal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="addModalLongTitle">Add Question</h5>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  
        </button> -->
        <img src="public/images/closeModal.svg" alt="close" style="cursor:pointer;" id = "addQuestionClose_Modal">
        
        
      </div>


      <div class="modal-body">
       <input type = "hidden" id = "archiveID_id" class = "form-control" placeholder = "archive name">
       <input type = "hidden" id = "archiveName_id" class = "form-control" placeholder = "archive name">
      
	   <br>
	  	<textarea class = "form-control" placeholder = "question" id = "questions_id" style="margin-bottom:8px;"></textarea>
		  <textarea class = "form-control" placeholder = "answer" id = "answer_id" style="margin-bottom:8px;"></textarea>
		  <textarea class = "form-control" placeholder = "choice A" id = "choicea_id" style="margin-bottom:8px;"></textarea>
		  <textarea class = "form-control" placeholder = "choice B" id = "choiceb_id" style="margin-bottom:8px;"></textarea>
		  <textarea class = "form-control" placeholder = "choice C" id = "choicec_id" style="margin-bottom:8px;"></textarea>
		  <input type = "number" placeholder = "minute/s" id = "minute_id" class = "form-control">
		
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" id = "question_close">Close</button>
        <button type="button" class="btn btn-warning" id = "savedQuestion_id">Save</button>
      </div>


    </div>
  </div>
</div>
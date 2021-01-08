<!-- add note modal -->

<div data-backdrop="static" data-keyboard="false" show="true" class="modal fade" id="updateNote_Modal" tabindex="-1" role="dialog" aria-labelledby="updateNote_Modal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header" style = "color:black;">
		<h5>Update</h5>
      </div>


      <div class="modal-body">
	  	<input type = "text" id = "updateNoteTitle_id" placeholder="Title" class="form-control"  style="margin-bottom:7px;">
          <textarea name="noteBody" id="updateNoteBody_id" cols="30" rows="5" placeholder="remarks" class="form-control"></textarea>
        <input type="hidden" id = "noteUpdate_id">
      </div>
      <div class="modal-footer">
	  <button type="button" class="btn btn-default" id = "saveUpdateNote_id">Save</button>
	  <button type="button" class="btn btn-default" data-dismiss="modal" id = "closeUpdateNote_id">Close</button>
      </div>


    </div>
  </div>
</div>


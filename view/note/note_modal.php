<!-- add note modal -->

<div data-backdrop="static" data-keyboard="false" show="true" class="modal fade" id="addNote_Modal" tabindex="-1" role="dialog" aria-labelledby="addNote_Modal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header" style = "color:black;">
		<h5>Add a new note</h5>
      </div>


      <div class="modal-body">
	  	<input type = "text" id = "noteTitle_id" placeholder="Title" class="form-control"  style="margin-bottom:7px;">
          <textarea name="noteBody" id="noteBody_id" cols="30" rows="5" placeholder="remarks" class="form-control"></textarea>
      </div>
      <div class="modal-footer">
	  <button type="button" class="btn btn-default" id = "saveNewNote_id">Save</button>
	  <button type="button" class="btn btn-default" data-dismiss="modal" id = "closeNewNote_id">Close</button>
      </div>


    </div>
  </div>
</div>


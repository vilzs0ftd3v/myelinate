
<?php if (Session::get('logIn') == false):?>
	<br><br><br>
<div class="container">
	<div class="row">
		
		<div class="col col-md-4"></div>
		<div class="col col-10 col-md-4 shadow-sm p-3 mb-5 bg-white rounded"  style="padding:30px;">
		<h3 style="margin-bottom:10px;">Register</h3>
			<input type="text" placeholder="username" id = "userRegister_id" class="form-control" style="margin-bottom: 10px;" require>
			<input type="password" placeholder="password" id = "passRegister_id" class="form-control" style="margin-bottom: 10px;" require>
			
			<!-- <input type="text" placeholder="first name" id = "firstName_id" class="form-control" style="margin-bottom: 10px;">

			<input type="text" placeholder="last name" id = "lastName_id" class="form-control" style="margin-bottom: 10px;">

			<input type="email" placeholder="email address" id = "email_id" class="form-control" style="margin-bottom: 10px;">

			<input type="text" placeholder="contact no" id = "contactNo_id" class="form-control" style="margin-bottom: 10px;"> -->
			<button class="btn btn-md btn-warning btn-block" type="submit" id = "register_btn">Save</button>
			<small>Click <a href="login" id = "register_modal_id">here</a> to login.</small> 
			
		</div>
		<div class="col col-md-4"></div>

	</div>
</div>

<?php endif; ?>	
<?php if (Session::get('logIn') == true):?>
	<div class="col-md-4">
			
		</div>
		<div class="col-md-4">
			<p style="position: center;color:red;">Sorry, you already login so you don't need to access this page.</p>
		</div>
		<div class="col-md-4">
			
		</div>
<?php endif; ?>	


<script src="view/register/js/default.js"></script>
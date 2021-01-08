$(document).ready(function(){
	$(document).on('click','#login_btn',function(){
		username = $('#inputUsernameLogin').val();
		password = $('#inputPasswordLogin').val();

		console.log(username);
		console.log(password);
		
		$.ajax({
			url:'data/logdata.php',
			method:'POST',
			data:{login:'okay',username:username,password:password},
			success:function(data){
				
				if(data=='no'){
					//console.log(data);
					//$('#result_id').text('invalid username or password');
					//window.location.href="http://localhost/project/sharing/login";
					alert('incorrect username or password!');

				}else{
					//console.log(data);
					
					window.location.href="https://myelinate.herokuapp.com/dashboard";
					//window.location.href="http://localhost/project/myelination1.0/dashboard";
				}
			},
			error:function(xhr,status,error){
				console.log(xhr);
				console.log(static);
				console.log(error);
			}

		});
	});
});
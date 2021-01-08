$(document).ready(function(){
	$(document).on('click','#register_btn',function(){
		username = "";
		password = "";
		username = $('#userRegister_id').val();
		password = $('#passRegister_id').val();
		if ((username !== "") && (password !== "")) {
			
		
			$.ajax({
				url:'data/registerdata.php',	
				method:'POST',
				//data:{register:'Okay',username:username,password:password,firstname:firstname,
				data:{register:'Okay',username:username,password:password},
				//lastname:lastname,email:email,contactNo:contactNo},
				success:function(data){
					console.log(data);
					if(data === "success"){
						//console.log("account saved successfully!");
						window.location.href="https://myelinate.herokuapp.com/dashboard";
						//window.location.href="http://localhost/project/myelination1.0/dashboard";

					}else{
						//console.log(data);
						alert("invalid username or password.");
					}
				},
				error:function(xhr,status,error){
					console.log(xhr);
					console.log(status);
					console.log(error);
				}
			});
			
		} else {
			
			
			alert("please fill all the boxes.");
		}
		


		
		
		
	});	
});


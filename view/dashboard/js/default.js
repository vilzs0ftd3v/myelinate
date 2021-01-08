$(document).ready(function(){
	
	
	$(document).on('click','#logout_btn',function(){
		console.log("log out please");
		/*$.ajax({
			url:'data/logdata.php',
			method:'POST',
			data:{logout:'okay'},
			success:function(data){
				if(data=='okay'){window.location.href="http://localhost/project/myelination1.0/login";
			
				}else{
					console.log("unable to sign out");
				}
				
				
			},
			error:function(xhr,status,error){
				console.log(xhr);
				console.log(status);
				console.log(error);
			}
		});
		*/
		
	});
});
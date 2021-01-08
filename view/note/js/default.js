$(document).ready(function(){

    function callBack(x,y,z){
      
        updateNoteTitle_id
        updateNoteBody_id
        $('#noteUpdate_id').val(x);
        $('#updateNoteTitle_id').val(y);
        $('#updateNoteBody_id').val(z);
        $('#updateNote_Modal').modal('show');
    }
    function deleteQuery(id){
        
        $.ajax({
            url:'data/notedata.php',
            method:'POST',
            dataType:'text',
            data:{action:"delete",note_id:id},
            success:function(data) {
                console.log(data);
                displayNote("");
            },
            error:function(xhr,status,error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
        
    }
    function callBackDelete(x){
        console.log(x);
        deleteQuery(x);
        
    }
    //function to format the value from db to html
    function displayFormat(ObjResult){
        html="";
        x=0;
        for(var i = 0; i < ObjResult.length; i++) {

            if(x<ObjResult.length){
                //console.log(ObjResult[x].note_title);
                console.log("fin: "+x);
            html+="<div class='row'>"+
            "<div class='col-sm-6'>"+
                "<div class='card bg-light' style='border:none;'>"+
                "<div class='card-body'>"+
                    "<h5 class='card-title'><img src='public/images/bookmark.svg' alt=''></h5>"+
                    "<h6 class='card-title'>"+ObjResult[x].note_title+"</h6>"+
                    "<p class='card-text' style='font-size:xx-small;'>created: "+ObjResult[x].note_created+"</p>"+
                    "<hr style = 'height:0.5px; background:  rgb(170, 169, 169);'>"+
                    "<p class='card-text' style='font-size:small;'>"+ObjResult[x].note_body+"</p>"+
                    "<hr style = 'height:0.5px; background:  rgb(170, 169, 169);'>"+                   
                    "<img id = 'delete_"+ObjResult[x].note_id+"id' src='public/images/delete.svg' alt='' style = 'cursor:pointer;'>"+
                    "<img id = 'update_"+ObjResult[x].note_id+"id' src='public/images/update.svg' alt='' style = 'cursor:pointer;'>"+
                    "<input type='hidden' id ='note"+ObjResult[x].note_id+"_id' value ='"+ObjResult[x].note_id+"'>"+
                   
                "</div>"+
                "</div>"+
                "<br>"+
            "</div>";
                let ids = ObjResult[x].note_id;
                let titles = ObjResult[x].note_title;
                let remarkss = ObjResult[x].note_body;
                $(document).on('click','#update_'+ObjResult[x].note_id+'id',function(){
                    callBack(ids,titles,remarkss);
                });
                $(document).on('click','#delete_'+ObjResult[x].note_id+'id',function(){
                    callBackDelete(ids);
                });  
          
            x+=1;

            if(x<ObjResult.length){
                console.log("fin: "+x);
                html+="<div class='col-sm-6'>"+
                "<div class='card bg-light' style='border:none;'>"+
                    "<div class='card-body'>"+
                        "<h5 class='card-title'><img src='public/images/bookmark.svg' alt=''></h5>"+
                            "<h6 class='card-title'>"+ObjResult[x].note_title+"</h6>"+
                            "<p class='card-text' style='font-size:xx-small;'>created: "+ObjResult[x].note_created+"</p>"+
                            "<hr style = 'height:0.5px; background:  rgb(170, 169, 169);'>"+
                            "<p class='card-text' style='font-size:small;'>"+ObjResult[x].note_body+"</p>"+
                            "<hr style = 'height:0.5px; background:  rgb(170, 169, 169);'>"+
                            "<img id = 'delete_"+ObjResult[x].note_id+"id' src='public/images/delete.svg' alt='' style = 'cursor:pointer;'>"+
                            "<img id ='update_"+ObjResult[x].note_id+"id' src='public/images/update.svg' alt='' style = 'cursor:pointer;'>"+     
                           
                        "</div>"+
                    "</div>"+
                    "<br>"+
                    "</div>"+
                "</div>";              
                
                let id = ObjResult[x].note_id;
                let title = ObjResult[x].note_title;
                let remarks = ObjResult[x].note_body;
                $(document).on('click','#update_'+ObjResult[x].note_id+'id',function(){
                    callBack(id,title,remarks);
                });    
                $(document).on('click','#delete_'+ObjResult[x].note_id+'id',function(){
                    callBackDelete(id);
                });

            x+=1;
            }else{
                html+="<div class='col-sm-6'></div></div>";    
                console.log("else 2"+x);
                $('#displayFrm_id').html(html);
                return false;
            }
        }else{
            html+="<div class='col-sm-6'></div></div>";
            console.log("else 1"+x);
            $('#displayFrm_id').html(html);
            return false;
        }

        
                    
        };
        
    }

   
    //function to fetch data from database using XMLhttpRequest
    function displayNote(searchInput){
        userID = $('#user_id').val();
        $.ajax({
            url:'data/notedata.php',
            method:'POST',
            dataType:'json', //-------------I spend almost 3 hours looking for this bug...datatype to dataType
            data:{action:'displayNotes',note_title:searchInput,userID:userID},
            success:function(data){
                displayFormat(data);
            },
            error:function(xhr,status,error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
        
        

    }
    //close modal
    function closeNoteModal(){
        $('#addNote_Modal').modal('hide');
    }

    function closeUpdateNoteModal(){
        $('#updateNote_Modal').modal('hide');
    }
    //clear Inputs
    function clearInput(){
        $('#noteTitle_id').val("");
        $('#noteBody_id').val("");
    }
    function updateClearInput(){
        $('#updateNoteTitle_id').val("");
        $('#updateNoteBody_id').val("");
    }
    displayNote(""); // auto display of table
  //
    $('#addNote_Modal').modal({
        backdrop: 'static',   // This disable for click outside event
        keyboard: true        // This for keyboard event
    });

    $('#updateNote_Modal').modal({
        backdrop: 'static',   // This disable for click outside event
        keyboard: true        // This for keyboard event
    });

    //open modal
    $(document).on('click','#addNote_id',function(){//show or open archive modal
        $('#addNote_Modal').modal('show');

    });

    
    
    //display method
    
    //close modal
    $(document).on('click','#closeNewNote_id',function(){
        closeNoteModal();
    });

    $(document).on('click','#closeUpdateNote_id',function(){
        closeUpdateNoteModal();
    });
    
    // Event for saving new note
    $(document).on('click','#saveNewNote_id',function() {
        title = $('#noteTitle_id').val();
        body = $('#noteBody_id').val();
        id = $('#user_id').val();  
        //xmlhttprequest
        $.ajax({
            url:'data/notedata.php',
            method:'POST',
            datatype:'text',
            data:{action:"insert",user_id:id,note_title:title,note_body:body},
            success:function(data) {
                if(data==="success"){
                    console.log("saved successfully!");
                    //console.log(data);
                    displayNote("");//refresh data from db to html
                    clearInput();//clear input from text boxes
                    closeNoteModal();//close the modal use
                }else{
                    console.log(data);
                }
            },
            error:function(xhr,status,error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
        
        
    });


    // Event for update new note
    $(document).on('click','#saveUpdateNote_id',function() {
        title = $('#updateNoteTitle_id').val();
        body = $('#updateNoteBody_id').val();
        noteID = $('#noteUpdate_id').val();
    
        console.log(title);
        console.log(body);
        console.log(noteID);
        
        //xmlhttprequest
        $.ajax({
            url:'data/notedata.php',
            method:'POST',
            datatype:'text',
            data:{action:"update",note_id:noteID,note_title:title,note_body:body},
            success:function(data) {
                if(data==="success"){
                    console.log("updated successfully!");
                    //console.log(data);
                    updateClearInput();
                    displayNote("");
                    closeUpdateNoteModal();
                }else{
                    console.log(data);
                }
            
            },
            error:function(xhr,status,error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
        

    });

$(document).on('change','#searchNoteTitle_id',function(){
    val = $('#searchNoteTitle_id').val();
    displayNote(val);
});
 

});

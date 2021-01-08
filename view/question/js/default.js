$(document).ready(function(){

    var archiveQuestions = { 
        question:[],//list of questions from database
        answer:[], // answer
        choicea:[],//choices...
        choiceb:[],
        choicec:[],
        choiced:[],
        item:0, // specify to currect item
        correct:0, // right answers
        incorrect:0,//wrong answers
        category:"",
        start:"",
        end:""
    };
  
    //--------------------MOdal click outside event--------------
   
    $('#addArchive_Modal').modal({
        backdrop: 'static',   // This disable for click outside event
        keyboard: true        // This for keyboard event
    });

    $('#playQuestion_modal').modal({
        backdrop: 'static',   // This disable for click outside event
        keyboard: true        // This for keyboard event
    });

    $('#addQuestion_Modal').modal({
        backdrop: 'static',   // This disable for click outside event
        keyboard: true        // This for keyboard event
    });
    $(document).on('click','#addQuestionClose_Modal',function(){
         $('#addQuestion_Modal').modal('hide');
    });
//-------------------Format of archive table in display
    function tableFormat(data){
        $html = "";
        $html = "<table class='table table-hover table-sm' style='border:1px solid #d3d3d3;'>"+
        "<thead>"+
            "<tr>"+
                "<th><small>Archive</small></th>"+
                "<th><small>Count</small></th>"+
                "<th><small>Date Created</small></th>"+
                "<th><small>Action</small></th>"+
            "</tr>"+
        "</thead>"+
        "<tbody>";

        Object.keys(data).forEach(function(key){
        $html+="<tr>"+
                "<td><small>"+data[key].archive_name+":"+data[key].username+"</small></td>"+
                "<td><small style='font-size:small'>"+data[key].count+"</small></td>"+
                "<td><small style='font-size:x-small;'>"+data[key].date_added+"</small></td>"+
                "<td>"+
                // "<input style='margin-right:5px;margin-bottom:5px;' type='button' class='btn btn-sm btn-info' value='+'  id = 'addQuestion_btn'/>"+
                "<img src='public/images/plus-blue.svg' alt='add' id = 'addQuestion_btn' style='cursor:pointer;'>&nbsp;"+
                // "<input style='margin-right:5px;margin-bottom:5px;' type='button' class='btn btn-sm btn-danger' value='try'  id = 'tryQuestion_btn'/>"+
                "<img src='public/images/try.svg' alt='add' id = 'tryQuestion_btn' style='cursor:pointer;'>&nbsp;"+
                "<input type = 'hidden' id = 'rowValue_id' value='"+data[key].archive_id+"' name = 'rowValueId'>"+
                "<input type = 'hidden' id = 'rowValue_id' value='"+data[key].archive_name+"' name = 'rowValueName'>"+
                "</td>"+
                "</tr>";
        });
        $html +="</tbody></table>";
        $("#question_tbl").html($html);
    }
//--------------method to fetch archive data from database
    function populateQuestionTable(search){
    
        $.ajax({
			url:'data/questiondata.php',
            method:'POST',
            dataType:'json',
			data:{action:"searchArchive",search:search},
			success:function(data){
               tableFormat(data);
               //console.log(data);

			},
			error:function(xhr,status,error){
				console.log(xhr);
				console.log(static);
				console.log(error);
			}

		});
    }

    populateQuestionTable("");//actual call of populate table once landing on the page
    

    //-------------------question -------------------------

    $(document).on('click','#addQuestion_btn',function(){//an event to open the question modal
        $('#addQuestion_Modal').modal('show');
        let tr = $(this).closest('tr');
        let id = tr.find("input[name='rowValueId']").val();
        let name = tr.find("input[name='rowValueName']").val();
        $("#archiveID_id").val(id);
        $("#archiveName_id").val(name);
        clearQuestionBoxes();
        console.log("hel");
    });

    $(document).on('click','#savedQuestion_id',function(){//event to save questions to DB from modal
        id = $('#user_id').val();
        archiveID = $('#archiveID_id').val();
        archiveName = $('#archiveName_id').val();

        question = $('#questions_id').val();
        answer = $('#answer_id').val();
        choicea = $('#choicea_id').val();
        choiceb = $('#choiceb_id').val();
        choicec = $('#choicec_id').val();
        minute = $('#minute_id').val();
       console.log(id);
       console.log(archiveID);
       console.log(archiveName);
        if((question !== "")&&(answer !== "")&&(choicea !== "")&&(choiceb !== "")&&(choicec !== "")&&(minute !== "")){
            
            $.ajax({
                url:'data/questiondata.php',
                method:"POST",
                dataType:"text",
                data:{action:"insertQuestion",userID:id,archive:archiveName,archiveID:archiveID,
                     question:question,answer:answer,choicea:choicea,choiceb:choiceb,choicec:choicec,
                    minute:minute},
                success:function(data){
                    console.log(data);
                    if(data =="success"){
                        $('#addQuestion_Modal').modal('hide');
                        populateQuestionTable("");
                    }
                },
                error:function(xhr,status,error){
                    console.log(xhr);
                    console.log(status);
                    console.log(error);
                }

            });
            
            
        }else{
            console.log("kindly fill in all the boxes");
        }
    });
function clearQuestionBoxes(){//functions to clear elements for question modal
    $('#questions_id').val("");
    $('#answer_id').val("");
    $('#choicea_id').val("");
    $('#choiceb_id').val("");
    $('#choicec_id').val("");
    $('#minute_id').val("");
}

$(document).on('click','#question_close',function(){//close or hide the question modal
    $('#addQuestion_Modal').modal('hide');
});
//-------------------archive -------------------------

    $(document).on('click','#addArchive_id',function(){//show or open archive modal
        $('#archiveName_id').val("");
        $('#addArchive_Modal').modal('show');
    });

    $(document).on('click','#saveNewArchive_id',function(){//storing new archive into db from modal
        id = $('#user_id').val();
        user = $('#username').val();
        archive = $('#archiveName_id').val();
       
        if(archive != ""){
            console.log("okay");
             $.ajax({
                 url:'data/questiondata.php',
                 method:"POST",
                 dataType:"text",
                 data:{action:"insertArchive",userID:id,username:user,archive:archive},
                 success:function(data){
                     console.log(data);
                     if(data =="success"){
                         $('#addArchive_Modal').modal('hide');
                         populateQuestionTable("");
                         $('#archiveName_id').val("");
                     }
                 },
                 error:function(xhr,status,error){
                     console.log(xhr);
                     console.log(status);
                     console.log(error);
                 }

             });
        }else{
            console.log("please supply value!");
        }

    });

    $(document).on('click','#closeNewArchive_id',function(){//close or hide the archive modal
        $('#addArchive_Modal').modal('hide');
    });


//----------------------Play Question ---------------------
$(document).on('click','#play_close',function(){//close the play modal
    $('#playQuestion_modal').modal('hide');
});
$(document).on('click','#tryQuestion_btn',function(){//event function to click the red try button and obtain question data from DB
    $("#statusUserPlay_id").html("");//status or header display of information hides
    $('#playQuestion_modal').modal('show');//open or show play modal
        let tr = $(this).closest('tr');//getting the value in a table regardless if its directly click or not
        let id = tr.find("input[name='rowValueId']").val();//point to the row value needed
        let name = tr.find("input[name='rowValueName']").val();
 
            $("#questionsList_id").html(""); // set list or table element to clean
            $('#run_id').prop('disabled',false);//setting the start or run button to clickable
            //item = 0;
            archiveQuestions.category=name;
            archiveQuestions.item = 0;//setting the variables to 0
            archiveQuestions.correct = 0;
            archiveQuestions.incorrect = 0;
            archiveQuestions.question = [];
			archiveQuestions.answer = [];
			archiveQuestions.choicea = [];
			archiveQuestions.choiceb = [];
			archiveQuestions.choicec = [];
            archiveQuestions.choiced = [];
        
        getFromDB(name); // first is to get data from DB
  
});
//getFromDB function, filling the empty variables with question data from DB
function getFromDB(category){
    console.log(category);
    $.ajax({
        url:'data/questiondata.php',
        method:'POST',
        dataType:'json',
        data:{action:"setQuestionaire",archive:category},
        success:function(data){
            x=0;
            Object.keys(data).forEach(function(key){
                archiveQuestions.question[x] = data[key].review_question;
                archiveQuestions.answer[x] = data[key].review_answer;
                num = Math.floor(Math.random() * 3); 
					
							if(num==0){
								archiveQuestions.choicea[x] = data[key].review_choicea;
								archiveQuestions.choiceb[x] = data[key].review_choiceb;
								archiveQuestions.choicec[x] = data[key].review_choicec;
								archiveQuestions.choiced[x] = data[key].review_answer;
							
							}
							if(num==1){
								archiveQuestions.choicea[x] = data[key].review_choiceb;
								archiveQuestions.choiceb[x] = data[key].review_choicea;
								archiveQuestions.choicec[x] = data[key].review_answer;
								archiveQuestions.choiced[x] = data[key].review_choicec;
								
								
							}
							if(num==2){
								archiveQuestions.choicea[x] = data[key].review_choicea;
								archiveQuestions.choiceb[x] = data[key].review_answer;
								archiveQuestions.choicec[x] = data[key].review_choiceb;
								archiveQuestions.choiced[x] = data[key].review_choicec;
								
							}
							if(num==3){
								archiveQuestions.choicea[x] = data[key].review_answer;
								archiveQuestions.choiceb[x] = data[key].review_choicea;
								archiveQuestions.choicec[x] = data[key].review_choiceb;
								archiveQuestions.choiced[x] = data[key].review_choicec;
							
                            }
                            x++;
            });
            
                
        },
        error:function(xhr,status,error){
            console.log(xhr);
            console.log(static);
            console.log(error);
        }

    });
}

$(document).on('click','#run_id',function(){//event to start displaying the questions from variable
    const currentTime = new Date();
    archiveQuestions.start = currentTime.getFullYear()+"-"+(currentTime.getMonth()+1)+"-"+currentTime.getDate()+" "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds();
    displayQuestionPerItem(archiveQuestions.item);// second click on the start button
    $('#run_id').prop('disabled',true);//then disable the button
});
//displayQuestionPerItem function
function displayQuestionPerItem(item){//function responsible for displaying question data per item 
    html = "";
    $('#result_id').html("");
    //archiveQuestions.item+=1;
    console.log("item "+archiveQuestions.item);

    console.log("length: "+archiveQuestions.question.length);
    if(archiveQuestions.question.length == 0){
        html = "sorry, but no question on this archive.";
        $("#questionsList_id").html(html);
    }
    else{
        if(archiveQuestions.question.length == item){
            html = "sorry, but no question on this archive.";
            $("#questionsList_id").html(html);
            $("#statusUserPlay_id").html((item)+" of "+archiveQuestions.question.length+" | "+"correct: "+archiveQuestions.correct+":"+"incorrect: "+archiveQuestions.incorrect);   
            //console.log("start: "+archiveQuestions.start);
            //console.log("end: "+Date.now());
            const currentTime = new Date();
            archiveQuestions.end = currentTime.getFullYear()+"-"+(currentTime.getMonth()+1)+"-"+currentTime.getDate()+" "+currentTime.getHours()+":"+currentTime.getMinutes()+":"+currentTime.getSeconds();
            saveUserStat(item,archiveQuestions.correct,archiveQuestions.incorrect,archiveQuestions.category,archiveQuestions.start,archiveQuestions.end);
        }else{
            html = "<h7>"+(item+1)+". "+archiveQuestions.question[item]+"</h7></br>"+
            "<input  type = 'radio' name='choice' value='"+archiveQuestions.choicea[item]+"'> a."+archiveQuestions.choicea[item]+"</br>"+
            "<input  type = 'radio' name='choice' value='"+archiveQuestions.choiceb[item]+"'> b."+archiveQuestions.choiceb[item]+"</br>"+
            "<input  type = 'radio' name='choice' value='"+archiveQuestions.choicec[item]+"'> c."+archiveQuestions.choicec[item]+"</br>"+
            "<input  type = 'radio' name='choice' value='"+archiveQuestions.choiced[item]+"'> d."+archiveQuestions.choiced[item]+"</br>"+
            "<input style='margin-right:5px;' type ='button' id='check_btn' value = 'check' class='btn btn-sm btn-info'>"+
            "<input type ='button' id='next_btn' value = 'next' class='btn btn-sm btn-danger'>";
            archiveQuestions.item = (archiveQuestions.item+1);
            $("#questionsList_id").html(html);
            $("#statusUserPlay_id").html((item+1)+" of "+archiveQuestions.question.length+" | "+"correct: "+archiveQuestions.correct+":"+"incorrect: "+archiveQuestions.incorrect);   
        } 
    }
    
}


$(document).on('click','#next_btn',function(){//event to display the next in line question data
    displayQuestionPerItem(archiveQuestions.item);//third on the next btn for next item
    console.log("next item is "+archiveQuestions.item);
    $('#check_btn').prop('disabled',false);
});

$(document).on('click','#check_btn',function(){//check the selected answer if correct from right one
    userAnswer = $("input[name='choice']:checked").val();
    console.log(userAnswer);

    if(userAnswer == archiveQuestions.answer[(archiveQuestions.item-1)]){// - 1 cuz at display func it adds
        $('#result_id').css({'color':'green'});
        $('#result_id').html("correct");
        console.log(archiveQuestions.answer[(archiveQuestions.item-1)]);
        $('#check_btn').prop('disabled',true);
        archiveQuestions.correct+=1;
        $("#statusUserPlay_id").html((archiveQuestions.item)+" of "+archiveQuestions.question.length+" | "+"correct: "+archiveQuestions.correct+":"+"incorrect: "+archiveQuestions.incorrect);   
    }else{
        $('#result_id').css({'color':'red'});
        $('#result_id').html("incorrect");
        console.log(archiveQuestions.answer[(archiveQuestions.item-1)]);
        $('#check_btn').prop('disabled',false);
        archiveQuestions.incorrect+=1;
        $("#statusUserPlay_id").html((archiveQuestions.item)+" of "+archiveQuestions.question.length+" | "+"correct: "+archiveQuestions.correct+":"+"incorrect: "+archiveQuestions.incorrect);   
    }
    
});




//----------------------search --------------

$(document).on('change','#searchQuestion_id',function(){//event to search archive data from DB
    searchVal = $('#searchQuestion_id').val();
    populateQuestionTable(searchVal);
});


//----------------------user Stat on attempting to answer the questions--------------
function saveUserStat(totalItems,totalRightAnswers,totalWrongAnswers,category,start,end){
    userID = $('#user_id').val();
    
     $.ajax({
         url:'data/questiondata.php',
         method:'POST',
         data:{action:'saveUserStat',itemCount:totalItems,scoreCount:totalRightAnswers,mistakeCount:totalWrongAnswers,archive:category,
         userID:userID,time_start:start,time_end:end},
         success:function(data){
             console.log(data);
         },
         error:function(xhr,status,error){
             console.log(xhr);
             console.log(status);
             console.log(error);
         }
     });
    
}






});

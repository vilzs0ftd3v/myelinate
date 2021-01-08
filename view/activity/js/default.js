$(document).ready(function(){
    numberObj = {
        operator:[],
        num:[],
        answer:0,
        equation:'',
        category:'',
        remainder:0,
        userAnswer:0
    };
    //---------------------modal-----------------------------------------
    $('#random_Modal').modal({
        backdrop: 'static',   // This disable for click outside event
        keyboard: true        // This for keyboard event
    });

   $(document).on('click','#random_btn',function(){
    $('#random_Modal').modal("show");    
    setQuestion();   
   });
   $(document).on('click','#closeRandom_id',function(){
    $('#random_Modal').modal("hide");
    displayActivity();
   });  
   //----------------------Modal end
   function setQuestion(){
        $("#check_btn").prop("disabled", false);
        $("#generate_btn").prop("disabled", true);
        generateRandomNumbers();
        setRandomMultipleEquation();
        $('#mathResult_id').html("");
        $('#randomDisplay_id').html("");
        $('#userAnswer_id').val("");
        $('#randomDisplay_id').html(numberObj.equation);
   }
   //event to generate question
   $(document).on('click','#generate_btn',function(){
    $("#check_btn").prop("disabled", false);
    setQuestion();
   });  
   //event to check answer
   $(document).on('click','#check_btn',function(){
    isCorrect();  
   });
   //generate random numbers to use
   function generateRandomNumbers(){
    numberObj['num1'] = Math.floor(Math.random() * 20);
    numberObj['num2'] = Math.floor(Math.random() * 20);
    numberObj['num3'] = Math.floor(Math.random() * 20);
    numberObj['num4'] = Math.floor(Math.random() * 20);
    numberObj['num5'] = Math.floor(Math.random() * 20);
   }
   //set the question
   function setRandomMultipleEquation(){
    numberObj.category="Order of Operation";
    
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            //(num1+num2)-
            console.log('1');
            numberObj.equation = "(("+numberObj['num1']+"+"+numberObj['num2']+")-("+numberObj['num3']+"-"+numberObj['num4']+"))+"+numberObj['num5'];
            numberObj.answer = Math.round((((numberObj['num1'] + numberObj['num2']) - (numberObj['num3'] - numberObj['num4'])) + numberObj['num5'])*100)/100;
            console.log(numberObj.equation);    
            console.log(numberObj.answer);
            break;
        case 1:
            console.log('2');
            numberObj.equation = numberObj['num1'] +"+"+ "("+numberObj['num2'] +"×"+ numberObj['num3'] +"+"+ numberObj['num4']+")";
            numberObj.answer = Math.round((numberObj['num1'] + (numberObj['num2'] * numberObj['num3'] + numberObj['num4']))*100)/100;   
            //numberObj.remainder = (numberObj['num1']-numberObj['num2'])%(numberObj['num3']);
            console.log(numberObj.equation);
            console.log(numberObj.answer);
            //console.log("remainder: "+numberObj.remainder);
            break;
        case 2:
            console.log('3');
            numberObj.equation = numberObj['num1']+"×"+numberObj['num2']+"+("+numberObj['num3']+"-"+numberObj['num4']+")+"+numberObj['num5'];
            numberObj.answer = Math.round((numberObj['num1']*numberObj['num2']+(numberObj['num3']-numberObj['num4'])+numberObj['num5'])*100)/100;
            console.log(numberObj.equation);
            console.log(numberObj.answer);
            break;   
        case 3:
            
            if((numberObj['num1']<numberObj['num2']) && (numberObj['num1']!=0) && (numberObj['num2']!=0)){
                console.log('4A');
                numberObj.answer = Math.round((numberObj['num2']/numberObj['num1']+(numberObj['num3']*numberObj['num4'])+numberObj['num5'])*100)/100;
                numberObj.equation = numberObj['num2']+"÷"+numberObj['num1']+"+("+numberObj['num3']*numberObj['num4']+")+"+numberObj['num5'];
              
                console.log(numberObj.equation);
                console.log(numberObj.answer);
                console.log("remainder: "+numberObj.remainder); 
            }
            
            if((numberObj['num2']<numberObj['num1']) && (numberObj['num2']!=0) && (numberObj['num1']!=0)){
                console.log('4b');
                numberObj.answer = Math.round((numberObj['num1']/numberObj['num2']+numberObj['num3']-numberObj['num5'])*100)/100;
                numberObj.equation = numberObj['num1']+"÷"+numberObj['num2']+"+"+numberObj['num3']+"-"+numberObj['num5'];
             
                console.log(numberObj.equation);
                console.log(numberObj.answer);
                console.log("remainder: "+numberObj.remainder);
            }
            
            break;
    
        default:
            break;
    }
   }
   //function to check answer
   function isCorrect(){
    
    numberObj.userAnswer = $('#userAnswer_id').val();
    console.log(numberObj.userAnswer);
    userID = $("#user_id").val();
     if(numberObj.userAnswer == numberObj.answer){
         $('#mathResult_id').html("correct!");
         $('#mathResult_id').css({"color":"green"});
         $("#check_btn").prop("disabled", true);
         saveActivity(numberObj.category,numberObj.equation,numberObj.answer,userID);//save the logs
         
     }else{
         $('#mathResult_id').html("incorrect!");
         $('#mathResult_id').css({"color":"red"});
     }
     console.log("your answer: "+numberObj.userAnswer);
     console.log("correct answer: "+numberObj.answer);
     $("#generate_btn").prop("disabled", false);
     
   }


   function saveActivity(category,question,answer,userID){

       $.ajax({
        url:'data/activitydata.php',
        method:'POST',
        dataType:'text',
        data:{action:'insert',category:category,question:question,answer:answer,userID,userID},
        success:function(data){
            if(data=="success"){
                console.log("saved successfully!");
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
   }

   function displayActivity(){
       userID = $('#user_id').val();
        $.ajax({
            url:'data/activitydata.php',
            method:'POST',
            dataType:'json',
            data:{action:'display',userID:userID},
            success:function(data){
                //console.log(data);
                tableFormat(data);

            },
            error:function(xhr,status,error){
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
   }

   function tableFormat(data){
    $html = "";
    $html = "<table class='table table-hover table-sm' style='border:1px solid #d3d3d3;'>"+
                            "<thead>"+
                                "<tr>"+
                                    "<th><small>Category</small></th>"+
                                    "<th><small>Question</small></th>"+
                                    "<th><small>Answer</small></th>"+
                                    "<th><small>Date</small></th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody>";

    Object.keys(data).forEach(function(key){
    $html+="<tr>"+
            "<td><small>"+data[key].activity_category+"</small></td>"+
            "<td><small style='font-size:small'>"+data[key].activity_question+"</small></td>"+
            "<td><small style='font-size:x-small;'>"+data[key].activity_answer+"</small></td>"+
            "<td><small style='font-size:x-small;'>"+data[key].activity_date+"</small></td>"+
            "</tr>";
    });
    $html +="</tbody></table>";
    $("#activityTbl_id").html($html);
   }

   displayActivity();

});
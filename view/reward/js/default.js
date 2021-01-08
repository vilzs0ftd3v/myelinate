$(document).ready(function(){
    user_id = $('#user_id').val();
    displayReward(user_id);
    function displayReward(user_id) {
        $.ajax({
            url:'data/rewarddata.php',
            method:'POST',
            dataType:'json',
            data:{action:'display',user_id:user_id},
            success:function(data){
                tableFormat(data);
                console.log(data);
               
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
                                    "<th><small>Items</small></th>"+
                                    "<th><small>Correct</small></th>"+
                                    "<th><small>Incorrect</small></th>"+
                                    "<th><small>Time</small></th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody>";

    Object.keys(data).forEach(function(key){
    $html+="<tr>"+
            "<td><small>"+data[key].category+"</small></td>"+
            "<td><small style='font-size:small'>"+data[key].itemCount+"</small></td>"+
            "<td><small style='font-size:x-small;'>"+data[key].scoreCount+"</small></td>"+
            "<td><small style='font-size:x-small;'>"+data[key].mistakeCount+"</small></td>"+
            "<td><small style='font-size:x-small;'>"+data[key].seconds+" seconds</small></td>"+
            "</tr>";
    });
    $html +="</tbody></table>";
    $("#rewardTbl_id").html($html);
    }
});
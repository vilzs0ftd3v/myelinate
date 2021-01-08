
  $(document).ready(function() {
    $("#logoContainer-open").show();
    $("#logoContainer-close").hide();
    tab = $('#tab_id').val();
    if(tab ==="dashboard"){
      removeAllClass();
    }else{
      removeAllClass();
      $('#'+tab).addClass("present");
    }
    

      $(document).on('click','#toolBar',function(){
        console.log("clicked");
          
          status = $('#toolBarStatus_id').val();
          width = $('.sidebar').width();
          console.log(width);

          if(width == "225"){
            sideBarClose();
            $('#toolBarStatus_id').val("close");
          }else{
            sideBarOpen();
            $('#toolBarStatus_id').val("open");
          }
          
      
      });

      function sideBarClose() {
          $("#logoContainer-open").hide();
          $("#logoContainer-close").show();
          $("#question_menu").hide();
          $("#archive_menu").hide();
          $("#reward_menu").hide();
          $("#activity_menu").hide();
          $("#out_menu").hide();
          $("#logoContainer").css({'border-color':'#fd7e14'});
          // $("#toolBarContainer").css({'margin-left':'45px'});
          $("#toolBarContainer").css({'margin-left':'0px'});
          // $(".sidebar").css({'width':'50px'});
          $(".sidebar").css({'width':'0px'});
          $(".sidebar").hide();
          // $("#dashboardTable_id").css({'margin-left':'70px'});
          $("#dashboardTable_id").css({'margin-left':'20px'});
          
          
      }

      function sideBarOpen() {
          $("#logoContainer-open").show();
          $("#logoContainer-close").hide();
          $("#question_menu").show();
          $("#archive_menu").show();
          $("#reward_menu").show();
          $("#activity_menu").show();
          $("#out_menu").show();
          $("#logoContainer").css({'border-color':'whitesmoke'});
          $("#toolBarContainer").css({'margin-left':'195px'});     
          $(".sidebar").show();
          $(".sidebar").css({'width':'225'});
          $("#dashboardTable_id").css({'margin-left':'240px'});
          
      }

      function removeAllClass(){
        $("#question_id").removeClass("present");
        $("#archive_id").removeClass("present");
        $("#activity_id").removeClass("present");
        $("#reward_id").removeClass("present");
      }

});

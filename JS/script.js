
$(document).ready(function(){
  let flag = 1;
  flag += flag;
    $(".accrdn_btn").on("click", function(){
        if(flag == 1){
          $(this).siblings().toggle();
          $(this).parent().siblings().children(".texts").hide();
          flag = 0;
        }else{
          $(this).siblings().toggle()
          $(this).parent().siblings().children(".texts").hide();
          flag = 1;
        }
      })   
});
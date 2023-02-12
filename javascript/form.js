$(function () {
   
  
   

   
    $("#envoyer").click(function (){
        valid = true;
        if($("#prenom").val()== ""){
            $("#prenom").css("border-color","#FF0000");
             valid = false;  
        }
         if ($("#prenom").val().match(/^[a-z]+$/i)){
            $("#prenom").css("border-color","#00FF00");
            valid = false;
        }
          if($("#nom").val()== ""){
            $("#nom").css("border-color","#FF0000");
             valid = false;  
        }
        if ($("#nom").val().match(/^[a-z]+$/i)){
            $("#nom").css("border-color","#00FF00");
            valid = false;
        }
        
        if($("#pseudo").val()== ""){
            $("#pseudo").css("border-color","#FF0000");
             valid = false;  
        }
        if($("#password").val()== ""){
            $("#password").css("border-color","#FF0000");
             valid = false;  
        }
          if($("#confirm").val()== ""){
            $("#confirm").css("border-color","#FF0000");
             valid = false;  
        }
         if ($("#tel").val()== ""){
            $("#tel").css("border-color","#FF0000");
             valid = false;  
             
        }
        if($("#prenom").val== "" || $("#nom").val()== "" || $("#pseudo").val()== "" || $("#password").val()== "" || $("#confirm").val()== "" || $("#tel").val()== "" ){ 
            $(".error").show();
            valid = false; 
            
         }
         if($("#prenom").val()== $("#prenom").val().match(/^[a-z]+$/i)  &&  $("#nom").val()==$("#nom").val().match(/^[a-z]+$/i) && $("#pseudo").val()== $("#pseudo").val().match(/^[a-z0-9-_]{8,16}$/i) && $("#password").val()== $("#password").val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,14}$/) && $("#confirm").val()==$("#password").val()&& $("#mail").val()==$("#mail").val().match(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)&& $("#tel").val()== $("#tel").val().match(/^[0-9]{10,}$/i) ){ 
            $(".error").hide();
            $(".eror").show();
            valid = false; 
         }
         else{
            $(".eror").hide();
            $(".error").show();
            valid = false; 
         }


         
        return valid;
        
        
    });
});

$(function verifie(){

    $("#prenom").keyup(function(){
        if ($("#prenom").val().match(/^[a-z]+$/i)){
            $("#prenom").css("border-color","#00FF00");
            $(".error1").hide()
        
        }else{
            $("#prenom").css("border-color","#FF0000");
            $(".error1").show()

        } 
    });

    $("#nom").keyup(function(){
        if ($("#nom").val().match(/^[a-z]+$/i)){
            $("#nom").css("border-color","#00FF00");
            $(".error2").hide();
        }else{
            $("#nom").css("border-color","#FF0000");
            $(".error2").show();
        }
    });
    $("#pseudo").keyup(function(){
        if ($("#pseudo").val().match(/^[a-z0-9-_]{8,16}$/i)  ){
            $("#pseudo").css("border-color","#00FF00");
            $(".error3").hide();
        }else{
            $("#pseudo").css("border-color","#FF0000");
            $(".error3").show();
        }
      
    });
    $("#password").keyup(function(){
        if ($("#password").val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,14}$/)){
            $("#password").css("border-color","#00FF00");
            $(".error4").hide();
        }else{
            $("#password").css("border-color","#FF0000");
            $(".error4").show();
        }
      
    });
    $("#confirm").keyup(function(){
     if($("#confirm").val()==$("#password").val()){

        $("#confirm").css("border-color","#00FF00");
        $(".error5").hide();
    }else{
        $("#confirm").css("border-color","#FF0000");
        $(".error5").show();
    }


    });

    $("#mail").keyup(function(){
        if ($("#mail").val().match(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)){
            $("#mail").css("border-color","#00FF00");
            $(".error6").hide();
        }else{
            $("#mail").css("border-color","#FF0000");
            $(".error6").show();
        }
      
    });


    $("#tel").keyup(function(){
        if ($("#tel").val().match(/^[0-9]{10,}$/i)){
            $("#tel").css("border-color","#00FF00");
            $(".error7").hide();
        }else{
            $("#tel").css("border-color","#FF0000");
            $(".error7").show();
        }
      
    });






});

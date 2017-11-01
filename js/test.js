function usernameValidate(username)
{
     if(username!="")
     {
          if(username.length>=5 && username.length<=15)
          {
               return true;
          }
          else {
               $('#errorBox').html('Username should have more than 5 and less than 15 chararcters');return false;
          }
     }
     else {
          $('#errorBox').html('Empty Username Field');return false;
     }
}

function passwordValidate(password) {
     var pattern= /^[A-Za-z0-9]\w{2,14}$/;
     if(password!="")
     {
          if(password.match(pattern))
          {
               return true;
          }
          else {
               $('#errorBox').html('Password must contain at least one numeral');return false;
          }
     }
     else {
          $('#errorBox').html('Empty Password Field');return false;
     }
}

$(document).ready(function(){
     $("#login").click(function(){
               var username=$("#username").val();
               var password=$("#password").val();
               if(usernameValidate(username)  && passwordValidate(password))
               {
                    $('#errorBox').html('');
                    $.ajax({
                         type: "POST",
                         url: "server.php",
                         data: {
                              username: username,
                              password: password
                         },
                         success: function(result){
                              alert(result);
                         }
                    });
               }
               else {
                    //$('#errorBox').html("Invalid Fields");
               }
          });
     });

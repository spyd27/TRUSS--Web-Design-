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
function emailValidate(email)
{
     var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
     if(email!="")
     {
          if(emailFilter.test(email))
          {
               return true;
          }
          else {
               $('#errorBox').html('Invalid Email');return false;
          }
     }
     else {
          $('#errorBox').html('Empty Email Field');return false;
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
     $("#username").hide();
     $("#email").hide();
     $("#password").hide();
     $("#btnSignup").click(function () {
          $('#errorBox').html('');
          if($('#username').is(':hidden') || $('#email').is(':hidden') || $('#password').is(':hidden')) {
               $("#username").slideDown();
               $("#email").slideDown();
               $("#password").slideDown();
               $("#btnLogin").before($("#btnSignup"));
               $("#btnLogin").before($("#or"));
          }

          else {
               var username=$('#username').val();
               var email=$('#email').val();
               var password=$('#password').val();
               var dataString = 'username='+ name + '&email='+ email + '&password='+ password;
               if(usernameValidate(username) && emailValidate(email) && passwordValidate(password))
               {
                    $('#errorBox').html('');
                    $.ajax({
                         type: "POST",
                         url: "signup.php",
                         data: {
                              username: username,
                              email: email,
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
          }
     });
     $("#btnLogin").click(function () {
          $('#errorBox').html('');
          if($('#username').is(':hidden') && $('#password').is(':hidden'))
          {
               $("#username").slideDown();
               $("#password").slideDown();
               $("#email").slideUp();
               $("#btnSignup").before($("#btnLogin"));
               $("#btnSignup").before($("#or"));
          }
          else if ($('#email').is(':visible')) {
               $("#username").slideDown();
               $("#password").slideDown();
               $("#email").slideUp();
               $("#btnSignup").before($("#btnLogin"));
               $("#btnSignup").before($("#or"));
          }
          else {
               /*$("#username").hide();
               $("#email").hide();
               $("#password").hide();*/
               var username=$('#username').val();
               var password=$('#password').val();
               if(usernameValidate(username) && passwordValidate(password))
               {
                    $('#errorBox').html('');
                    $.ajax({
                         type: "POST",
                         url: "login.php",
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
          }
     });
});
$(function(){
    var email=$('#email')
    var password=$('#password')
    
    $('#log').on('click',function() {
         
        var user1 = {
            email : email.val(),
            password : password.val()
        };
        $.ajax(
            {
                type:'POST',
                url:'/login',
                data: user1,
                success:
                function(response){
                    window.location.replace("../users.html");
                },
                error: 
                function(error){
                    window.alert('error Loguser ')
                }
            }
        )
    })
})
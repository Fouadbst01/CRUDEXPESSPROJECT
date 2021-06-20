$(function(){
    var $users = $('#users');
    var $passwd = $('#password');
    $.ajax(
        {
            type:'GET',
            url:'/users',
            success:function(users){
                
                $.each(users,function(i,user){
                    var Tags='<tr><td>'+
                    user.username+'</td><td>'+
                    user.email+'</td><td>'+
                    user.role+'</td></tr>'
                    $users.append(Tags)
                })
                
            },
            error: function(){
                alert('error loading users')
            }
        }
    )

    /*$('#idbutton').on('click',function() {
        var user1 = {
            username : $name.valu()
        };
        $.ajax(
            {
                type:'POST',
                url:'/users',
                data: user1,
                success:function(){
                    alert("user succefully ")
                },
                error: function(){
                    alert('error uploding users')
                }
            }
        )
    })*/
})
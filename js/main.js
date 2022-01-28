$(document).ready(function () {

    $("#navmenu").load("nav.html");
    $("#footer").load("footer.html");

});

if(sessionStorage.getItem("username")) {
    //user logged in
    $('.hidden-when-logged-in').hide();
}
else {
    //user logged out
    $('.hidden-when-logged-out').hide();
}

$(document).on('click',"#logout",function (){
    $.ajax ({
        method: "GET",
        url: "http://localhost:8080/logout",
        xhrFields:{
            withCredentials: true,
        },
        success: function (data) {
            console.log("logout")
            sessionStorage.removeItem('username')
            window.location.href= '../pages/login.html';
        },
        error: function () {
            alert('Error while logout');
        }
        //e.preventDefault();
        //var token = $("meta[name='_csrf']").attr("content");
    })
});



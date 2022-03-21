$(document).ready(function () {

    $("#navmenu").load("nav.html");
    $("#footer").load("footer.html");

});


// Execute logout
$(document).on('click', "#logout", function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:8080/logout",
        xhrFields: {
            withCredentials: true,
        },
        success: function (data) {
            console.log("logout")
            sessionStorage.removeItem('username')
            window.location.href = '../pages/index.html';
        },
        error: function () {
            alert('Error while logout');
        }
        //e.preventDefault();
        //var token = $("meta[name='_csrf']").attr("content");
    })
});




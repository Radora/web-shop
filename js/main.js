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


function updateNavbarDependingOnUserRole() {
    if (sessionStorage.getItem("username")) {
        //user logged in
        $('.hidden-when-logged-in').hide();
    } else {
        //user logged out
        $('.hidden-when-logged-out').hide();
    }

    $('.hidden-when-not-Admin').hide();

    if (sessionStorage.getItem("username")) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/users/getUsername/' + sessionStorage.getItem("username"),
            xhrFields: {
                withCredentials: true
            },
            mode: 'no-cors'
        }).done(function (data) {
            if (data.roles == "ROLE_ADMIN") {
                $('.hidden-when-not-Admin').show();
            }
        })
    }
}




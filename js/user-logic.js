$(document).ready(function () {

    $('#new_user_reg_btn').click(RegisterNewUser);

});


function RegisterNewUser() {
    const firstname = $('#new_user_firstname').val();
    const surname = $('#new_user_surname').val();
    const username = $('#new_user_username').val();
    const email = $('#new_user_email').val();
    const password = $('#new_user_pass').val();
    const address = $('#new_user_address').val();

    var newUserObject = new Object();

    newUserObject.firstname = firstname;
    newUserObject.surname = surname;
    newUserObject.username = username;
    newUserObject.email = email;
    newUserObject.password = password;
    newUserObject.address = address;
    newUserObject.roles = "ROLE_USER";
    newUserObject.active = 1;

    var jsonFileTest = JSON.stringify(newUserObject);

    var request = $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/register',
        data: jsonFileTest,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    request.done(function( msg ) {
       console.log('Success');
        window.location.href = '../pages/index.html';
    });

    request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
    });

}

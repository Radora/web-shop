import fetchService from "./services/fetchService.js";

$(document).ready(function () {

    $('#new_user_reg_btn').click(RegisterNewUser);

    $('#btn_ajax_test').click(testAjax);

});

function testAjax(){

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/users',
        mode: 'no-cors'
    }).done(function( data ) {
        if ( console && console.log ) {
            console.log( "Sample of data:", data.slice( 0, 100 ) );
        }
    });

}



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


    console.log(jsonFileTest);



    // var request = $.ajax({
    //     method: 'POST',
    //     url: 'http://localhost:8080/register',
    //     data: jsonFileTest,
    //     headers: {
    //         Authorization: 'application/json',
    //     },
    //     error: function (data) {
    //         // sessionStorage.setItem('token', data.token);
    //         sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    //         // $(location).prop('href');
    //         window.location.href = 'private.html';
    //     },
    //
    // });
    //
    // request.done(function( msg ) {
    //    console.log('Success');
    // });
    //
    // request.fail(function( jqXHR, textStatus ) {
    //     alert( "Request failed: " + textStatus );
    // });

}

function ModifyExistingUser() {
};
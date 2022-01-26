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
    });

    request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
    });

}

function ModifyExistingUser() {
};
$(document).ready(function () {


    $('#new_user_reg_btn').click(RegisterNewUser);

});


function RegisterNewUser() {
    const firstname = $('#new_user_firstname').val();
    const surname = $('#new_user_surname').val();
    const username = $('#new_user_username').val();
    const email = $('#new_user_email').val();
    const pass = $('#new_user_pass').val();
    const address = $('#new_user_address').val();

    var newUserObject = new Object();

    newUserObject.firstname = firstname;
    newUserObject.surname = surname;
    newUserObject.username = username;
    newUserObject.email = email;
    newUserObject.pass = pass;
    newUserObject.address = address;
    newUserObject.role = "ROLE_USER";

    var jsonTest = JSON.stringify(newUserObject);

    console.log(jsonTest);


    // $.ajax({
    //     method: 'POST',
    //     url: 'http://localhost:8080/login',
    //     data: JSON.stringify({
    //         email: email,
    //         password,
    //     }),
    //     headers: {
    //         Authorization: 'application/json',
    //     },
    //     error: function (data) {
    //         // sessionStorage.setItem('token', data.token);
    //         sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    //         // $(location).prop('href');
    //         window.location.href = 'private.html';
    //     },
    // });
}

function ModifyExistingUser() {};
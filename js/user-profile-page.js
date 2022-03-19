$(document).ready(function () {

    if (sessionStorage.getItem("username")) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/users/getUsername/' + sessionStorage.getItem("username"),
            xhrFields: {
                withCredentials: true
            },
            mode: 'no-cors'
        }).done(function (data) {

            // function to fill fields
            updateUserProfileFields(data);
            console.log(data);
        })
    }

});

function updateUserProfileFields(data) {

    $('.user_name').append(data.firstname + ' ' + data.surname);
    $('.user_id').append('User ID: ' + data.id);
    $('#user_profile_firstname').val(data.firstname);
    $('#user_profile_surname').val(data.surname);
    $('#user_profile_username').val(data.username);
    $('#user_profile_email').val(data.email);
    $('#user_profile_address').val(data.address);

}


// let userID = data[i].id
// let userFirstname = data[i].firstname;
// let userSurname = data[i].surname;
// let username = data[i].username;
// let userEmail = data[i].email;
// let userAddress = data[i].address;
// let userRoles = data[i].roles;
// let userActive = data[i].active;


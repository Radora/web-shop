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
        })
    }

});

function updateUserProfileFields(data) {

    $('.user_name').append(data.firstname + ' ' + data.surname);
    $('.user_id').append(data.id);
    $('#user_profile_firstname').val(data.firstname);
    $('#user_profile_surname').val(data.surname);
    $('#user_profile_username').val(data.username);
    $('#user_profile_email').val(data.email);
    $('#user_profile_address').val(data.address);
}


// Saving user edits
$('#save_user_changes').click(function () {

    //Check if all fields contain value
    if ($('#user_profile_firstname').val() && $('#user_profile_surname').val() &&
        $('#user_profile_username').val() && $('#user_profile_email').val() &&
        $('#user_profile_address').val()) {

        let userFirstname = $('#user_profile_firstname').val();
        let userSurname = $('#user_profile_surname').val();
        let username = $('#user_profile_username').val();
        let userEmail = $('#user_profile_email').val();
        let userAddress = $('#user_profile_address').val();
        let userId = $('#user_id').val();


        var newUserObject = new Object();

        newUserObject.firstname = userFirstname;
        newUserObject.surname = userSurname;
        newUserObject.username = username;
        newUserObject.email = userEmail;
        //newUserObject.password = userPassword;
        newUserObject.address = userAddress;

        let newUserData = JSON.stringify(newUserObject);

        console.log(newUserData);


        // $.ajax({
        //     method: 'PUT',
        //     url: 'http://localhost:8080/users/' + userId,
        //     data: newUserData,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     xhrFields: {
        //         withCredentials: true
        //     },
        //     mode: 'no-cors'
        // }).done(function () {
        //     location.reload();
        // });

    } else {
        alert("Problem updating user data");
    }
});


// Opens change password modal
$('#change_pass').click(function () {
    $(".bg-modal").addClass('d-flex');
});

// Closes change password modal
$('.close_modal').click(function () {
    $(".bg-modal").removeClass('d-flex');
});

// Closes change password modal
$('#save_new_password').click(function () {

    let userFirstname = $('#user_new_password').val();

    if (userFirstname.length > 3){
        alert("New password is set!")
        $(".bg-modal").removeClass('d-flex');
    }else{
        alert("Please enter valid password!")
    }


});



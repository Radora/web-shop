$(document).ready(function () {

    // Retrieving products from DB and displaying 1them on the page
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/users',
        mode: 'no-cors'
    }).done(function (data) {

        for (let i = 0; i < data.length; i++) {

            let userID = data[i].id
            let userFirstname = data[i].firstname;
            let userSurname = data[i].surname;
            let username = data[i].username;
            let userEmail = data[i].email;
            let userAddress = data[i].address;
            let userRoles = data[i].roles;
            let userActive = data[i].active;

            let htmlToAppend = '<tr><td class="user-id" scope="row">' + userID + '</td>';
            htmlToAppend += '<td class="user-firstname">' + userFirstname + '</td>';
            htmlToAppend += '<td class="user-surname">' + userSurname + '</td>';
            htmlToAppend += '<td class="username">' + username + '</td>';
            htmlToAppend += '<td class="user-email">' + userEmail + '</td>';
            htmlToAppend += '<td class="user-address">' + userAddress + '</td>';
            htmlToAppend += '<td class="user-roles">' + userRoles + '</td>';
            htmlToAppend += '<td class="user-active">' + userActive + '</td>';
            htmlToAppend += '<td><button type="button" class="btn-delete-user btn btn-outline-danger">Delete</button></td>'
            htmlToAppend += '<td><button type="button" class="btn-edit-user btn btn-outline-info">Edit</button></td></tr>'

            $('#edit_users_table > tbody:first').append(htmlToAppend)

        }
    });


    // When admin click on delete in the products-table ->delete the product
    $("#edit_users_table").on('click', '.btn-delete-user', DeleteUser);

    function DeleteUser() {

        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/users/' + parseInt(id),
            mode: 'no-cors'
        }).done(function () {
            location.reload();
        });

    }

    $("#edit_users_table").on('click', '.btn-edit-user', EditUser);

    function EditUser() {
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/users/' + id,
            mode: 'no-cors'
        }).done(function (data) {

            $('#user_edit_firstname').val(data.firstname);
            $('#user_edit_surname').val(data.surname);
            $('#user_edit_username').val(data.username);
            $('#user_edit_email').val(data.email);
            $('#user_edit_address').val(data.address);
            $('#user_edit_roles').val(data.roles);

            if (data.active){
                $('#user_active_checkbox').prop('checked', true);
            }else{
                $('#user_active_checkbox').prop('checked', false);
            }


        });

    }

})
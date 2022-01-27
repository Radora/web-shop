$(document).ready(function () {
//von privatehtml
    $('#login').click(function (e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        $.ajax({
            method: 'POST',
            xhrFields: {
                withCredentials: true
            },
            url: 'http://localhost:8080/login',
            data: JSON.stringify({
                username: username,
                password: password,
            }),
            headers: {
                Authorization: 'application/json',
            },
            error: function (data) {
                // sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
                // $(location).prop('href');
                window.location.href = '../index.html';
            },
        });
    });


});
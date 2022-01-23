$(document).ready(function () {


    $('#add_new_product_btn').click(AddNewProduct);

    $('.btn-delete-product').click(DeleteProduct);

    $("#edit_products_table").on('click', '.btn-delete-product', DeleteProduct);


    function AddNewProduct() {
        const title = $('#new_product_title').val();
        const desc = $('#new_product_desc').val();
        const price = $('#new_product_price').val();
        const onStock = $('#new_product_stock').val();


        var newProductObject = new Object();

        newProductObject.title = title;
        newProductObject.desc = desc;
        newProductObject.price = price;
        newProductObject.onStock = onStock;


        var jsonTest = JSON.stringify(newProductObject);

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

    function DeleteProduct() {

        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        var asJson = JSON.stringify(id);

        console.log(asJson);

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



    function EditProduct() {

        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        var asJson = JSON.stringify(id);

        console.log(asJson);

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




})

$(document).ready(function () {


    $('#add_new_product_btn').click(AddNewProduct);

});


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

function ModifyExistingProduct() {};
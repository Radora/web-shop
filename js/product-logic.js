$(document).ready(function () {


    $('#add_new_product_btn').click(AddNewProduct);

    function AddNewProduct() {
        const name = $('#new_product_title').val();
        const description = $('#new_product_desc').val();
        const price = $('#new_product_price').val();
        const onStock = $('#new_product_stock').val();
        const productCategoryName = $('#new_product_cat').val();
        var productCategoryID;


        if (productCategoryName === 'Laptops') {
            productCategoryID = 2;
        } else if (productCategoryName === 'Smartphones') {
            productCategoryID = 1;
        } else if (productCategoryName === 'Desktops') {
            productCategoryID = 3;
        }

        var newProductObject = new Object();

        newProductObject.name = name;
        newProductObject.description = description;
        newProductObject.price = parseInt(price);
        newProductObject.product_stock = parseInt(onStock);
        newProductObject.category = productCategoryName;

        var productJSON = JSON.stringify(newProductObject);

        console.log(productJSON);

        //var jsonTest = ' {"category" : { "id" : 1, "name" : "Smartphones"}, "name" : "Iphone 16", "description" : "Description", "price" : 500 , "product_stock" : 10}';

        var request = $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/products/new',
            xhrFields:{
                withCredentials:true
            },
            data: productJSON,
            headers: {
                //Authorization: 'application/json'
                'Content-Type': 'application/json',
            }
        });

        request.done(function (msg) {
            location.reload();
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


    }

})

$(document).ready(function () {


    $('#add_new_product_btn').click(AddNewProduct);

    function AddNewProduct() {
        const title = $('#new_product_title').val();
        const desc = $('#new_product_desc').val();
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

        newProductObject.title = title;
        newProductObject.desc = desc;
        newProductObject.price = price;
        newProductObject.onStock = onStock;
        //newProductObject.categoryid = 1;
        newProductObject.category = productCategoryName;

        var productJSON = JSON.stringify(newProductObject);

        var jsonTest = ' {"category" : { "id" : 1, "name" : "Smartphones"}, "name" : "Iphone 16", "description" : "Description", "price" : 500 , "product_stock" : 10}';

        console.log(newProductObject);


        // INSERT INTO `product`(`id`, `description`, `name`, `price`, `product_stock`, `categoryid`)
        // VALUES ('1','Description1','Iphone X','499.0','18','1'),


        var request = $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/products/new',
            data: newProductObject,
            headers: {
                //Authorization: 'application/json'
                'Content-Type': 'application/json',
            }
        });

        console.log(newProductObject);

        request.done(function (msg) {
            console.log('Success');
        });

        request.fail(function (jqXHR, textStatus) {
            alert("Request failed: " + textStatus);
        });


    }

})

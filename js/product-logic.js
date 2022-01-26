$(document).ready(function () {


    $('#add_new_product_btn').click(AddNewProduct);

   // $('.btn-delete-product').click(DeleteProduct);




    function AddNewProduct() {
        const title = $('#new_product_title').val();
        const desc = $('#new_product_desc').val();
        const price = $('#new_product_price').val();
        const onStock = $('#new_product_stock').val();

        const productCategoryName = $('#new_product_cat').val();
        var productCategoryID;
        var productCatData = {};
        var productCategoryArray = [];

        if (productCategoryName === 'Laptops'){
            productCatData.id = 2;
            productCatData.name = productCategoryName;
            productCategoryArray.push(productCatData);
        }else if (productCategoryName === 'Smartphones'){
            productCatData.id = 1;
            productCatData.name = productCategoryName;
            productCategoryArray.push(productCatData);
            productCategoryID = 1;
        }else if (productCategoryName === 'Desktops'){
            productCatData.id = 3;
            productCatData.name = productCategoryName;
            productCategoryArray.push(productCatData);
        }


        var newProductObject = new Object();

        newProductObject.title = title;
        newProductObject.desc = desc;
        newProductObject.price = price;
        newProductObject.onStock = onStock;
        newProductObject.category = productCategoryArray;


        var productJSON = JSON.stringify(newProductObject);



        var jsonTest = ' {"category" : { "id" : 1, "name" : "Smartphones"}, "name" : "Iphone 16", "description" : "Description", "price" : 500 , "product_stock" : 10}';

        console.log(jsonTest);


        // INSERT INTO `product`(`id`, `description`, `name`, `price`, `product_stock`, `categoryid`)
        // VALUES ('1','Description1','Iphone X','499.0','18','1'),


        var request = $.ajax({
            method: 'POST',
            url: 'http://localhost:8080/products/new',
            data: jsonTest,
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

    function DeleteProduct() {

        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        var asJson = JSON.stringify(id);

        console.log(asJson);

    }



    function EditProduct() {

        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        var asJson = JSON.stringify(id);

        console.log(asJson);


    }




})

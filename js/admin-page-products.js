$(document).ready(function () {

    // Retrieving products from DB and displaying 1them on the page
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/products',
        xhrFields:{
            withCredentials:true
        },
        mode: 'no-cors'
    }).done(function( data ) {

        for (let i = 0; i < data.length; i++){

            let productId = data[i].id
            let productTitle = data[i].name;
            let productPrice = data[i].price;
            let productCategoryName = data[i].category;
            let productStock = data[i].product_stock;

            let htmlToAppend = '<tr><td class="product-id" scope="row">' + productId + '</td>';
            htmlToAppend += '<td class="product-title">' + productTitle + '</td>';
            htmlToAppend += '<td class="product-price">' + productPrice + '</td>';
            htmlToAppend += '<td class="product-stock">' + productStock + '</td>';
            htmlToAppend += '<td class="product-category">' + productCategoryName + '</td>';
            htmlToAppend += '<td><button type="button" class="btn-delete-product btn btn-outline-danger">Delete</button></td>'
            htmlToAppend += '<td><button type="button" class="btn-edit-product btn btn-outline-info">Edit</button></td></tr>'
            $('#edit_products_table > tbody:first').append(htmlToAppend)

        }
    });

    // When admin click on delete in the products-table ->delete the product
    $("#edit_products_table").on('click', '.btn-delete-product', DeleteProduct);

    function DeleteProduct() {
        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/products/' + id,
            xhrFields:{
                withCredentials:true
            },
            mode: 'no-cors'
        }).done(function(  ) {
            location.reload();
        });
    }

    $("#edit_products_table").on('click', '.btn-edit-product', EditProduct);

    function EditProduct() {
        // Getting value from the first cell -> the product ID
         var currentRow = $(this).closest("tr");
         var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/products/' + id,
            xhrFields:{
                withCredentials:true
            },
            mode: 'no-cors'
        }).done(function (data) {

            $('#new_product_title').val(data.name);
            $('#new_product_price').val(data.price);
            $('#new_product_cat').val(data.category);
            $('#new_product_stock').val(data.product_stock);
            $('#new_product_desc').val(data.description);
            $('#product_edit_id').val(data.id);

        });
        var asJson = JSON.stringify(id);

        console.log(asJson);
    }
    // Saving product edits
    $('#save_products_edits').click(function (e) {


        //Check if all fields contain value
        if ($('#new_product_title').val() || $('#new_product_price').val() ||
            $('#new_product_cat').val() || $('#new_product_stock').val() ||
            $('#new_product_desc').val()) {

            let productTitle = $('#new_product_title').val();
            let productPrice = $('#new_product_price').val();
            let productCategory = $('#new_product_cat').val();
            let productStock = $('#new_product_stock').val();
            let productId = $('#product_edit_id').val();
            let productDescription = $('#new_product_desc').val();
            var newProductObject = new Object();

            newProductObject.name = productTitle;
            newProductObject.description = productDescription;
            newProductObject.price = parseInt(productPrice);
            newProductObject.product_stock = parseInt(productStock);
            newProductObject.category = productCategory;

            let newProductData = JSON.stringify(newProductObject);

            console.log(newProductData)
            console.log(productId)

            $.ajax({
                method: 'PUT',
                url: 'http://localhost:8080/products/' + productId,
                data: newProductData,
                headers: {
                    'Content-Type': 'application/json',
                },
                xhrFields:{
                    withCredentials:true
                },
                mode: 'no-cors'
            }).done(function () {
                location.reload();
            });
        } else {
            alert('Please set correct values first!');
        }
    });
})
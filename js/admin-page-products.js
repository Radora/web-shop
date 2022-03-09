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

    function EditProduct() {

        // Getting value from the first cell -> the product ID
        var currentRow = $(this).closest("tr");
        var id = currentRow.find("td:eq(0)").text(); // get current row 1st TD value

        var asJson = JSON.stringify(id);

        console.log(asJson);
    }
})
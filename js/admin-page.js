$(document).ready(function () {


    // Retrieving products from DB and displaying them on the page
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/products',
        mode: 'no-cors'
    }).done(function( data ) {

        for (let i = 0; i < data.length; i++){

            let productId = data[i].id
            let productTitle = data[i].name;
            let productPrice = data[i].price;
            let productCategoryName = data[i].category.name;


            let htmlToAppend = '<tr></tr><td class="product-id" scope="row">' + productId + '</td>';
            htmlToAppend += '<td class="product-title">' + productTitle + '</td>';
            htmlToAppend += '<td class="product-price">' + productPrice + '</td>';
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
        var asJson = JSON.stringify(id);

        http://localhost:8080/products/1

        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/products/' + id,
            mode: 'no-cors'
        }).done(function(  ) {
            console.log("deleted");
        });

    }

})
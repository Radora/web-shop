$(document).ready(function () {


    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/products',
        mode: 'no-cors'
    }).done(function( data ) {
        if ( console && console.log ) {
            console.log( "Sample of data:", data.slice( 0, 100 ) );
        }


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

})
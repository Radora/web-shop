$(document).ready(function () {

    // Retrieving products from DB and displaying 1them on the page
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/products',
        xhrFields: {
            withCredentials: true
        },
        mode: 'no-cors'
    }).done(function (data) {

        for (let i = 0; i < data.length; i++) {

            let productId = data[i].id
            let productTitle = data[i].name;
            let productPrice = data[i].price;
            let productCategoryName = data[i].category;
            let productStock = data[i].product_stock;

            console.log(productCategoryName);

            if (productCategoryName === 'Desktops') {

                let htmlToAppend = '<tr><td class="product-id align-middle">' + productId + '</td>';
                htmlToAppend += '<td class="item_title align-middle"><a class="text-decoration-none text-white item_title_link" href="#">' + productTitle + '</a></td>';
                htmlToAppend += '<td class="item_price align-middle">' + productPrice + '€</td>';
                htmlToAppend += '<td class="product-stock align-middle">' + productStock + '</td>';
                htmlToAppend += '<td class="product-category align-middle">' + productCategoryName + '</td>';
                htmlToAppend += '<td class="text-center"><button type="button" class="addToCart btn btn-success">Add</button></td></tr>'
                $('#products_table > tbody:first').append(htmlToAppend)
            }

        }
    });

})
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

            if (productCategoryName == 'Notebooks') {

                let htmlToAppend = '<tr><td class="product-id" scope="row">' + productId + '</td>';
                htmlToAppend += '<td class="product-title">' + productTitle + '</td>';
                htmlToAppend += '<td class="product-price">' + productPrice + '</td>';
                htmlToAppend += '<td class="product-stock">' + productStock + '</td>';
                htmlToAppend += '<td class="product-category">' + productCategoryName + '</td>';
                htmlToAppend += '<td><button type="button" class="btn-delete-product btn btn-outline-danger">Delete</button></td>'
                htmlToAppend += '<td><button type="button" class="btn-edit-product btn btn-outline-info">Edit</button></td></tr>'
                $('#notebooks_table > tbody:first').append(htmlToAppend)
            }

        }
    });

    /*

      <tr>
                                  <th scope="row">1</th>
                            <td class="item_title">Apple MacBook Pro 13" MYD92D/A</td>
                            <td>Der Apple M1 Chip definiert das 13" MacBook Pro neu. Mit einer 8-Core CPU, die komplexe
                                Workflows beim Arbeiten mit Fotos, Programmieren, Videoschnitt und mehr noch schneller
                                macht. Einer unglaublichen 8-Core GPU, die grafikintensive Aufgaben superschnell erledigt
                                und nahtloses Gaming ermöglicht. Einer fortschrittlichen 16-Core Neural Engine für mehr
                                Leistung beim maschinellen Lernen in deinen Lieblingsapps. Superschnellem gemeinsamen
                                Arbeitsspeicher für eine flüssige Performance. Und bis zu 20 Stunden Batterielaufzeit², der
                                längsten, die es je bei einem Mac gab.
                            </td>
                            <td>
                                <a href="https://media.nbb-cdn.de/images/products/680000/687210/Mac_Pro_13_Spacegrau_2.png?size=2800"
                                   data-fancybox="gallery"
                                   data-caption="MacBook Pro 13">
                                    <img src="https://media.nbb-cdn.de/images/products/680000/687210/Mac_Pro_13_Spacegrau_2.png?size=2800"
                                         alt="MacBook Pro 13"
                                         style="max-width: 150px; max-height: 100px">
                                </a>
                            </td>
                            <td class="item_price text-center">1449€</td>
                            <td class="text-center">15</td>
                            <td>
                                <button type="button" class="btn-add-to-cart btn bg-success text-white addToCart">Add
                                </button>
                            </td>
                        </tr>


     */


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
                xhrFields: {
                    withCredentials: true
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
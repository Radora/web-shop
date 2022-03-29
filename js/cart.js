$(document).ready(function () {

    displayCartItemsFromLocalStorage();

    $("#cart_table").on('click', '.remove_item_from_cart', removeItemFromCart);

})


function displayCartItemsFromLocalStorage() {

    let keys = Object.keys(localStorage);
    let i = keys.length;

    let counter = 1;

    while (i--) {
        if (keys[i] === "totalCost" || keys[i] === "cartItemsCount") {

        } else {

            let item = JSON.parse(localStorage.getItem(keys[i]));

            let itemTitle = keys[i];
            let itemPrice = item.price;
            let itemCount = item.count;

            let htmlToAppend = '<tr class="text-center align-middle"><th scope="row">' + counter + '</th>';
            htmlToAppend += '<td class="item_title align-middle"><a href="#" class="text-decoration-none text-white item_title_link">' + itemTitle + '</a></td>';
            htmlToAppend += '<td class="item_cart_img"><a href="../img/placeholder.jpg" data-fancybox="gallery" data-caption="' + itemTitle + '"><img src="../img/placeholder.jpg" alt="Iphone X Black" style="max-width: 150px; max-height: 100px"></a></td>';
            htmlToAppend += '<td class="item_price text-center align-middle">' + itemPrice + '</td>'
            htmlToAppend += '<td class="item_count text-center align-middle">' + itemCount + '</td>'
            htmlToAppend += '<td class="text-center align-middle"><button type="button" class="btn bg-danger text-white remove_item_from_cart">Remove</button></td></tr>'

            counter++;

            $('#cart_table > tbody:first').append(htmlToAppend)
        }
    }

    if (counter > 1) {
        let totalCosts = localStorage.getItem("totalCost");
        $('#cart_table > tbody:first').append('<tr><td colspan="6" class="total_costs text-end fs-5">Total: ' + totalCosts + ' €</td></tr>');
    }

}

function removeItemFromCart() {

    // get the current row
    let currentRow = $(this).closest("tr");
    let itemTitle = currentRow.find(".item_title").html();

    let cartTotal = parseInt(localStorage.getItem('totalCost'));
    let cartItemsCount = parseInt(localStorage.getItem('cartItemsCount'));

    let itemToRemove = JSON.parse(localStorage.getItem(itemTitle));
    console.log(itemTitle);

    let itemToRemovePrice = itemToRemove.price;
    let itemToRemoveCount = itemToRemove.count;

    if (cartItemsCount > itemToRemoveCount) {
        // Update cart total
        localStorage.setItem('totalCost', cartTotal - itemToRemovePrice);
        // Subtract 1 from cart items
        let cartItemsCount = localStorage.getItem('cartItemsCount');
        localStorage.setItem('cartItemsCount', cartItemsCount - 1);

        // Remove Item from basket
        localStorage.removeItem(itemTitle);

    } else {  // Last item in basket, clear storage

        localStorage.removeItem(itemTitle);
        localStorage.removeItem("totalCost");
        localStorage.removeItem("cartItemsCount");
    }

    location.reload();
}


function removeSingleItemFromCart() {

    // get the current row
    let currentRow = $(this).closest("tr");
    let itemTitle = currentRow.find(".item_title").html();

    let cartTotal = localStorage.getItem('totalCost');
    cartTotal = parseInt(cartTotal);

    let itemToRemove = JSON.parse(localStorage.getItem(itemTitle));
    let itemToRemovePrice = itemToRemove.price;
    let itemToRemoveCount = itemToRemove.count;


    if (itemToRemoveCount > 1) {

        localStorage.setItem('totalCost', cartTotal - itemToRemovePrice)

        // Subtract 1 from cart items
        let cartItemsCount = localStorage.getItem('cartItemsCount');
        cartItemsCount = parseInt(cartItemsCount);
        localStorage.setItem('cartItemsCount', cartItemsCount - 1);

        itemToReplaceWith = {'price': itemToRemovePrice, 'count': itemToRemoveCount - 1}
        localStorage.setItem(itemTitle, JSON.stringify(itemToReplaceWith));


    } else { // Only one item to be removed

        // Update total price
        localStorage.setItem('totalCost', cartTotal - itemToRemovePrice)

        // Subtract 1 from cart items
        let cartItemsCount = localStorage.getItem('cartItemsCount');
        cartItemsCount = parseInt(cartItemsCount);
        localStorage.setItem('cartItemsCount', cartItemsCount - 1);


        // If last item remove variables from localstorage?
        // if (cartItemsNumber === 1){
        //     // removing last item from the cart
        //     localStorage.setItem('cartItemsCount', cartItemsCount - 1);
        // }


        localStorage.removeItem(itemTitle);

    }

    location.reload();
    //console.log(itemToRemove.count);


}



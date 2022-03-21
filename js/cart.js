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
            htmlToAppend += '<td class="item_title align-middle">' + itemTitle + '</td>';
            htmlToAppend += '<td class="item_cart_img"><a href="https://mymobilesnews.com/wp-content/uploads/2022/03/iPhone-X.jpg" data-fancybox="gallery" data-caption="' + itemTitle + '"><img src="https://mymobilesnews.com/wp-content/uploads/2022/03/iPhone-X.jpg" alt="Iphone X Black" style="max-width: 150px; max-height: 100px"></a></td>';
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

    let cartTotal = localStorage.getItem('totalCost');
    cartTotal = parseInt(cartTotal);

    let itemToRemove = JSON.parse(localStorage.getItem(itemTitle));
    let itemToRemovePrice = itemToRemove.price;
    let itemToRemoveCount = itemToRemove.count;

    if (itemToRemoveCount > 1) {
        console.log("more than one item")


    } else { // Only one item to be removed

        // Update total price

        localStorage.setItem('totalCost', cartTotal - itemToRemovePrice)

        // Update cart items - 1
        let cartItemsCount = localStorage.getItem('cartItemsCount');
        cartItemsCount = parseInt(cartItemsCount);
        localStorage.setItem('cartItemsCount', cartItemsCount - 1);

        // if (cartItemsNumber === 1){
        //     // removing last item from the cart
        //     localStorage.setItem('cartItemsCount', cartItemsCount - 1);
        // }

        localStorage.removeItem(itemTitle);

    }


    location.reload();

    console.log(itemToRemove.count);


}



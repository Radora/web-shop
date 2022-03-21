
$(document).ready(function () {

    $("#products_table").on('click', '.addToCart', function () {

        // get the current row data
        let currentRow = $(this).closest("tr");
        let itemPrice = currentRow.find(".item_price").html();
        let itemTitle = currentRow.find(".item_title").html();


        itemPrice = itemPrice.replace('€', '');

        addToTotalCost(parseInt(itemPrice));

        addProductToLocalStorage(itemTitle, itemPrice);

        updateCartItemsCount();

    });


    function addToTotalCost(itemPrice) {

        let cartTotal = localStorage.getItem('totalCost');
        if (cartTotal != null) {
            cartTotal = parseInt(cartTotal);
            localStorage.setItem('totalCost', cartTotal + itemPrice)
        } else {
            localStorage.setItem('totalCost', itemPrice);
        }
    }

    function updateCartItemsCount() {

        let cartItemsNumber = localStorage.getItem('cartItemsCount');
        cartItemsNumber = parseInt(cartItemsNumber);

        if (cartItemsNumber) {
            // there are items in storage
            localStorage.setItem('cartItemsCount', cartItemsNumber + 1);
            document.querySelector('.itemsCount').textContent = cartItemsNumber + 1;
        } else {
            localStorage.setItem('cartItemsCount', 1);
            document.querySelector('.itemsCount').textContent = 1;
        }

    }


    function addProductToLocalStorage(itemTitle, itemPrice) {

        let itemToAdd = localStorage.getItem(itemTitle);

        if (itemToAdd != null) {

            itemToAdd = JSON.parse(itemToAdd);
            itemToAdd.count++;

            localStorage.setItem(itemTitle, JSON.stringify(itemToAdd));

        } else {
            itemToAdd = {'price': itemPrice, 'count': 1}
            localStorage.setItem(itemTitle, JSON.stringify(itemToAdd));
        }

    }


})

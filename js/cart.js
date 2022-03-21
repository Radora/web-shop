$(document).ready(function () {

    //let cartButton = document.querySelectorAll(".addToCart");


    $("#products_table").on('click', '.addToCart', function () {

        // get the current row
        var currentRow = $(this).closest("tr");
        var itemPrice = currentRow.find(".item_price").html();

        itemPrice = itemPrice.replace('€', '');
        addToTotalCost(parseInt(itemPrice));
        updateCartItemsCount();

        //alert(itemPrice);
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


})

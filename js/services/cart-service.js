class cartService {
    constructor() {
    }


    async displayCartItemsFromLocalStorage() {

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

    async addToTotalCost(itemPrice) {

        let cartTotal = localStorage.getItem('totalCost');
        if (cartTotal != null) {
            cartTotal = parseInt(cartTotal);
            localStorage.setItem('totalCost', cartTotal + itemPrice)
        } else {
            localStorage.setItem('totalCost', itemPrice);
        }
    }

    async updateCartItemsCount() {

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


    async addProductToLocalStorage(itemTitle, itemPrice) {

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



}
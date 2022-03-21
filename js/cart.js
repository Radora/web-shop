$(document).ready(function () {

    displayCartItemsFromLocalStorage();


})


function displayCartItemsFromLocalStorage() {

    let keys = Object.keys(localStorage)
    let i = keys.length

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
            htmlToAppend += '<td class="text-center align-middle">' + itemPrice + '</td>'
            htmlToAppend += '<td class="text-center align-middle">' + itemCount + '</td>'
            htmlToAppend += '<td class="text-center align-middle"><button type="button" class="btn bg-danger text-white remove_item_from_cart">Remove</button></td></tr>'

            counter++;

            $('#cart_table > tbody:first').append(htmlToAppend)
        }
    }


}



function generateHtmlForItem(item, quantity) {
    const totalPrice = (item.price * quantity).toFixed(2);
    return `
        <div class="cart-item">
            <h2>${item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: ${quantity}</p>
            <p>Total Price: ${totalPrice}</p> <!-- Display total price -->
        </div>
    `;
}


function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const displayCart = document.querySelector('.displayCartItems');

    if (cart && cart.length > 0) {
        const itemCounts = cart.reduce((counts, item) => {
            counts[item.title] = (counts[item.title] || 0) + 1;
            return counts;
        }, {});

        const uniqueItems = Array.from(new Set(cart.map(item => item.title)));
        uniqueItems.forEach(title => {
            const item = cart.find(item => item.title === title);
            const quantity = itemCounts[title];
            const itemHtml = generateHtmlForItem(item, quantity);
            displayCart.insertAdjacentHTML('beforeend', itemHtml);
        });
    } else {
        displayCart.innerHTML = "<p>Your cart is empty.</p>";
    }
}


function main() {
    displayCartItems();
}

main();

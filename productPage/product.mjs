    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    

    const title = urlParams.get('title');
    const image = urlParams.get('image'); // <- why is it not showing?
    const description = urlParams.get('description');
    const released = urlParams.get('released');
    const ageRating = urlParams.get('ageRating');
    const genre = urlParams.get('genre');
    const onSale = urlParams.get('onSale'); // <- how do i set automatically true or false?
    const favorite = urlParams.get('favorite'); // <- how do i set automatically true or false? Didn't add this to the document.Element since it has 0 effect.
    const price = urlParams.get('price');
    const discountedPrice = urlParams.get('discountedPrice');
    

        document.getElementById('title').textContent = title;
        document.getElementById('description').textContent = description;
        document.getElementById('released').textContent = released;
        document.getElementById('ageRating').textContent = ageRating;
        document.getElementById('genre').textContent = genre;
        document.getElementById('price').textContent = price;
        document.getElementById('discountedPrice').textContent = discountedPrice;

        document.addEventListener('DOMContentLoaded', function () {
        const buyButton = document.getElementById('buyButton');

    buyButton.addEventListener('click', function () {
    addToCart();
    });

function addToCart() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const title = urlParams.get('title');
    const price = urlParams.get('price');
    const genre = urlParams.get('genre');
    const released = urlParams.get('released');
    const description = urlParams.get('description');
    const game = { title, price, genre, released, description };

let cart = localStorage.getItem('cart');
if (!cart) {
    cart = [];
} else {
    cart = JSON.parse(cart);
}


cart.push(game);
localStorage.setItem('cart', JSON.stringify(cart));

alert('Product added to cart!');
}
});
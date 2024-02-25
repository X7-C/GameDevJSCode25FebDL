fetch('https://api.noroff.dev/api/v1/gamehub')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const gameList = document.querySelector('.gameList');
        const games = [];

        data.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.classList.add('game');

            const titleElement = document.createElement('h3');
            titleElement.textContent = game.title;

            titleElement.addEventListener('click', () => {
                window.location.href = `productPage/product.html?title=${encodeURIComponent(game.title)
                }&price=${encodeURIComponent(game.price)
                }&genre=${encodeURIComponent(game.genre)
                }&released=${encodeURIComponent(game.released)
                }&description=${encodeURIComponent(game.description)}`;
            });

            const priceElement = document.createElement('p');
            priceElement.textContent = game.price;

            const genreElement = document.createElement('p');
            genreElement.textContent = game.genre.toLowerCase(); 

            const releasedElement = document.createElement('p');
            releasedElement.textContent = game.released;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = game.description;

            const gameBuyButton = document.createElement('button');
            gameBuyButton.textContent = 'Buy';
            gameBuyButton.classList.add('game-buy-button');
            gameBuyButton.addEventListener('click', () => {
                addToCart(game);
            });

            gameElement.append(titleElement, priceElement, genreElement, releasedElement, descriptionElement, gameBuyButton);
            gameList.appendChild(gameElement);
            games.push({
                element: gameElement,
                genre: game.genre.toLowerCase() 
            });
        });

        const clearCartButton = document.querySelector('.clear-cart');
        clearCartButton.addEventListener('click', () => {
            clearCart();
        });

        function clearCart() {
            localStorage.setItem('cart', JSON.stringify([]));
        }

        function addToCart(game) {
            const cart = JSON.parse(localStorage.getItem('cart'));
            cart.push(game);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart!');
        }

        function filterGamesByGenre(genre) {
            games.forEach(game => {
                if (genre === 'all' || game.genre === genre) {
                    game.element.style.display = 'block';
                } else {
                    game.element.style.display = 'none'; 
                }
            });
        }

        document.getElementById('genre-action').addEventListener('click', () => filterGamesByGenre('action'));
        document.getElementById('genre-adventure').addEventListener('click', () => filterGamesByGenre('adventure'));
        document.getElementById('genre-horror').addEventListener('click', () => filterGamesByGenre('horror'));
        document.getElementById('genre-sports').addEventListener('click', () => filterGamesByGenre('sports'));
        document.getElementById('genre-clear').addEventListener('click', () => filterGamesByGenre('all'));



    })
    .catch(error => console.log(error));

// // 1. Make it work
// // 2. Make it right
// // 3. Make it fast

// import { API_GAMES_URL } from "./scripts/constant.mjs";
// import { doFetch } from "./scripts/utils/doFetch.mjs";



// function generateGameHtml(game) {
//     const mainGames = document.createElement('div');
//     mainGames.classList.add('mainGames');

//     const gameContainer = document.createElement('div');
//     gameContainer.classList.add('game-container');

//     const heading = document.createElement('h3');
//     heading.textContent = game.title;

//     const gamePriceContainer = document.createElement('div');
//     gamePriceContainer.classList.add('div');

//     const gamePrice = document.createElement('div');
//     gamePrice.textContent = game.price;

//     const gameDiscountedPrice = document.createElement('div');
//     gameDiscountedPrice.textContent = game.gameDiscountedPrice;
    
//     gamePriceContainer.append(gamePrice, gameDiscountedPrice);
//     document.body.append(heading, gamePriceContainer);
//     mainGames.appendChild(gameContainer);
    
//     return mainGames;
// }




// function displayGames(games) {
//     const gamesDisplayContainer = document.getElementById('game-display');
//     console.log(games);
//     games.forEach((game) => {
//         const gameHtml = generateGameHtml(game);
//         gamesDisplayContainer.appendChild(gameHtml);
//     })
// }

// async function main() {
//     const responseData = await doFetch(API_GAMES_URL);
//     const games = responseData.data;
//     displayGames(games);
    
//     }
    
//     main();


// Example code. Did not work.
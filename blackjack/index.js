let player = {
    name: "Per",
    chips: 200,
    decrease: function() {
        player.chips -= 40;
    },
    increase: function() {
        player.chips += 1000;
    }
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum");
let cardsEl = document.querySelector("#cards");

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        player.increase();

    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard () {
    if (isAlive && sum < 21 && player.chips >= 40) {
        player.decrease();
        let cardnum = randomRoll();
        sum += cardnum;
        cards.push(cardnum);
        renderGame();
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        messageEl.textContent = "Game is over";
    }
    
}

function randomRoll() {
    let newnum = Math.floor((Math.random() * 10) + 1);
    if (newnum === 1) {
        return 11;
    } else if (newnum >= 11 && newnum <= 13) {
        return 10;
    } else {
        return newnum;
    }
}

function startGame() {
    cards = []
    sum = 0
    isAlive = true;
    player.chips = 200;
    let firstCard = randomRoll();
    let secondCard = randomRoll();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
let firstCard = 2;
let secondCard = 7;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("New card?");
} else if (sum === 21) {
    console.log("Wooo you won!");
} else {
    console.log("You lost!");
}

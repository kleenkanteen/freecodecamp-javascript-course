let count = 0;
let countEl = document.getElementById("count");

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    count -= 1;
    countEl.innerText = count;
}          

let saveEl = document.getElementById("save-el")

function save() {
    let display = count + " - ";
    saveEl.textContent += display; 
    count = 0;
    countEl.textContent = 0;
}

let namee = "Sabs";
let greeting = "Hi boss, my name is ";
welcomeEl.innerText = greeting + namee;

welcomeEl.innerText += " GAMER";

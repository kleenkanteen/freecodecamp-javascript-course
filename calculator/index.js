let num1 = 8;
let num2 = 4;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let result = document.getElementById("sum-el");

function add() {
    let math = num1 + num2;
    result.textContent =
        "Sum: " + math + " since " + num1 + " + " + num2 + " = " + math;
}

function subtract() {
    let math = num1 - num2;
    result.textContent =
        "Difference: " + math + " since " + num1 + " - " + num2 + " = " + math;
}

function divide() {
    let math = num1 / num2;
    result.textContent =
        "Division: " + math + " since " + num1 + " / " + num2 + " = " + math;
}

function multiply() {
    let math = num1 * num2;
    result.textContent =
        "Multiplication: " +
        math +
        " since " +
        num1 +
        " * " +
        num2 +
        " = " +
        math;
}

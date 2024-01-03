function add(a, b) {
    return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a, b) {
return a * b;
}

function divide(a, b) {
if (b !== 0) {
    return a / b;
} else {
    return "You thought, I wouldn't think of this?";
}
}

let firstNumber, operator, secondNumber;

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+": add(firstNumber, secondNumber);
        break;

        case "-": subtract(firstNumber, secondNumber);
        break;

        case "*": multiply(firstNumber, secondNumber);
        break;

        case "/": divide(firstNumber, secondNumber);
        break;
    }
}


// Event listeners
let display = document.querySelector("#inputField")
let displayVariable;
let numpad = document.querySelector(".numpad");
numpad.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "7": populateDisplay(7);
        break;

        // section 1
        case "+": populateDisplay("+");
        break;
    }
})

function populateDisplay(number) {
    display.textContent = number;
}
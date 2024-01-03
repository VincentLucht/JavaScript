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

let firstNumber = "";
let operator = "";
let secondNumber = "";

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
let buttons = document.querySelectorAll('.num');

// Loop through each button and add a click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
    // You can perform actions here when a button is clicked
    switch (button.id) {
        // section 5

        // section 4
        case "7":
            firstNumber += "7";
            
    }
    });
});


function populateDisplay(number) {
    display.textContent = number;
}


function clearDisplay() {
    // clears the display 
}

// if 7 is pressed, then:
    // show 7 on the display
    // add 7 to the variable firstNumber

    // if + is pressed, then:
        // show + on the display
        // assign + to the operator variable

        // if another number is pressed, then:
            // display the other number on the display
            // add the other number to the variable secondNumber

            // if user presses =, then:
                // call a the + function, assign each number to that function
                // show the result on the display

// else wait
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

let firstNumberOperation = true;
let secondNumberOperation = false;

function operate(firstNumber, operator, secondNumber) {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    switch (operator) {
        case "plus":
            return add(num1, num2);
            break;

        case "-":
            return subtract(num1, num2);
            break;

        case "*":
            return multiply(num1, num2);
            break;

        case "/":
            return divide(num1, num2);
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
    if (firstNumberOperation == true) {
        switch (button.id) {
            case "zero":
                firstNumber += "0";
                popDisplay(firstNumber);
                break;
    
            case "1":
                firstNumber += "1";
                popDisplay(firstNumber);
                break;
    
            case "2":
                firstNumber += "2";
                popDisplay(firstNumber);
                break;
    
            case "3":
                firstNumber += "3";
                popDisplay(firstNumber);
                break;
    
            case "4":
                firstNumber += "4";
                popDisplay(firstNumber);
                break;
    
            case "5":
                firstNumber += "5";
                popDisplay(firstNumber);
                break;
    
            case "6":
                firstNumber += "6";
                popDisplay(firstNumber);
                break;
    
            case "7":
                firstNumber += "7";
                popDisplay(firstNumber);
                break;
    
            case "8":
                firstNumber += "8";
                popDisplay(firstNumber);
                break;
    
            case "9":
                firstNumber += "9";
                popDisplay(firstNumber);
                break;
    
            // operators
            case "plus":
                popDisplay("+");
                firstNumberOperation = false;
                secondNumberOperation = true;
                operator = "plus";
                break;
    
            // clear/delete
            case "delete":
                deleteLastDigit();
                break;
            
            case "clear":
                clearDisplay();
        }
    } 
    
    else if (secondNumberOperation == true) {
        switch (button.id) {
            case "zero":
                secondNumber += "0";
                popDisplay(secondNumber);
                break;
    
            case "1":
                secondNumber += "1";
                popDisplay(secondNumber);
                break;
    
            case "2":
                secondNumber += "2";
                popDisplay(secondNumber);
                break;
    
            case "3":
                secondNumber += "3";
                popDisplay(secondNumber);
                break;
    
            case "4":
                secondNumber += "4";
                popDisplay(secondNumber);
                break;
    
            case "5":
                secondNumber += "5";
                popDisplay(secondNumber);
                break;
    
            case "6":
                secondNumber += "6";
                popDisplay(secondNumber);
                break;
    
            case "7":
                secondNumber += "7";
                popDisplay(secondNumber);
                break;
    
            case "8":
                secondNumber += "8";
                popDisplay(secondNumber);
                break;
    
            case "9":
                secondNumber += "9";
                popDisplay(secondNumber);
                break;
    
            // operators
            case "plus":
                popDisplay("+");
                secondNumberOperation = false;
                break;
            
            case "equals":
                result = operate(firstNumber, operator, secondNumber);
                popDisplay(result);
    
            // clear/delete
            case "delete":
                break;
            
            case "clear":
                clearDisplay();
        }
    }
    });
});


function popDisplay(number) {
    display.textContent = number;
}


function clearDisplay() {
    firstNumber = ""; 
    popDisplay(firstNumber);
    // check whether it is the first or second number
    // add functionality that sets firstNumberNumberOperation to true again
}

function deleteLastDigit() {
    firstNumber = firstNumber.slice(0, -1);
    popDisplay(firstNumber);
    // check whether is it the first or second number
}


// if 7 is pressed, then:
    // show 7 on the display
    // add 7 to the variable firstNumber

    // if + is pressed, then:
        // switch to the second variable 
        // show + on the display
        // assign + to the operator variable

        // if another number is pressed, then:
            // display the other number on the display
            // add the other number to the variable secondNumber

            // if user presses =, then:
                // call a the + function, assign each number to that function
                // show the result on the display

// else wait
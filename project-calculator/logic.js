// math functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Nope";
    };
};

// operations
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result;

let firstNumberOperation = true;
let secondNumberOperation = false;

function operate(firstNumber, operator, secondNumber) {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);

    switch (operator) {
        case "plus":
            return add(num1, num2);

        case "minus":
            return subtract(num1, num2);

        case "multiply":
            return multiply(num1, num2);

        case "division":
            return divide(num1, num2);
    };
};

// Event listeners
let display = document.querySelector("#inputField")
let displayVariable;
let buttons = document.querySelectorAll('.num');

// Loop through each button and add a click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
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
                if (preventInvalidOperation() == true) {
                    // do nothing
                } else if (firstNumber == "") {
                    console.log("Add a number first please.");
                } else {
                    popDisplay("+");
                    firstNumberOperation = false;
                    secondNumberOperation = true;
                    operator = "plus";
                };                
                break;
            
            case "minus":
                if (preventInvalidOperation() == true) {
                    // do nothing
                } else if (firstNumber == "") {
                    console.log("Add a number first please.");
                } else {
                    popDisplay("-");
                    firstNumberOperation = false;
                    secondNumberOperation = true;
                    operator = "minus";
                };            
                break;

            case "multiply":
                if (preventInvalidOperation() == true) {
                    // do nothing
                } 
                else if (firstNumber == "") {
                    console.log("Add a number first please.");
                } else {
                    popDisplay("*");
                    firstNumberOperation = false;
                    secondNumberOperation = true;
                    operator = "multiply";
                };          
                break;
            
            case "division":
                if (preventInvalidOperation() == true) {
                    // do nothing
                }
                else if (firstNumber == "") {
                    console.log("Add a number first please.");
                } else {
                    popDisplay("÷");
                    firstNumberOperation = false;
                     secondNumberOperation = true;
                    operator = "division";
                };
                break;
    
            // clear/delete
            case "delete":
                deleteLastDigit();
                break;
            
            case "clear":
                clearDisplay();
                break;
        };
        checkSnarkyMessage();
        alwaysZero();
        resizeText();
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
                if (secondNumber != "") { // disallows user to press operation 2x, which would result in NaN
                    calculateAndShowResult(false) 
                }
                operator = "plus" // add feature that shows which operation you are currently on
                secondNumberOperation = true;
                break;

            case "minus":
                if (secondNumber != "") {
                    calculateAndShowResult(false) 
                }
                operator = "minus"
                secondNumberOperation = true;
                break;
            
            case "multiply":
                if (secondNumber != "") {
                    calculateAndShowResult(false) 
                }
                operator = "multiply"
                secondNumberOperation = true;
                break;
            
            case "division":
                if (secondNumber != "") {
                    calculateAndShowResult(false)
                }
                operator = "division"
                secondNumberOperation = true;
                break;
            
            case "equals":
                if (secondNumber != "") {
                    calculateAndShowResult(condition=true);
                };
                break;
    
            // clear/delete
            case "delete":
                if (disallowOperatorDeletion() == true) {
                    // do nothing
                } else {
                    deleteLastDigit()
                }
                break;
            
            case "clear":
                clearDisplay();
                break;
        };
    };
    });
});


function popDisplay(number) {
    display.textContent = number;
    resizeText();
};

function alwaysZero() {
    if (display.textContent == "") {
        display.textContent = "0";
    };
};

function resizeText() {
    let displayLength = display.textContent.length;
    let normalFontSize = 42;
    let textSize;
    
    // resizes text so that it fits the text
    if (displayLength <= 12) {
        display.style.fontSize = normalFontSize + "px";
    }
    else if (displayLength > 12 && displayLength <= 13) {
        textSize = normalFontSize - displayLength * 0.3;
        display.style.fontSize = textSize + "px";
    }
    else if (displayLength >= 13 && displayLength <= 16) {
        textSize = normalFontSize - displayLength * 0.6;
        display.style.fontSize = textSize + "px";
    }
    else if (displayLength >= 16 && displayLength <= 20) {
        textSize = normalFontSize - displayLength * 0.8;
        display.style.fontSize = textSize + "px";
    }
    else if (displayLength >= 20 && displayLength <= 26) {
        textSize = normalFontSize - displayLength * 0.9;
        display.style.fontSize = textSize + "px";
    }
    // stops resizing it, if over 27
    else if (displayLength == 27) {
        console.log("Why are you still typing")
    };
};

function clearDisplay() {
    display.style.fontSize = 42 + "px";
    firstNumber = ""; 
    secondNumber = "";
    operator = "";
    result = "";
    popDisplay("0");

    firstNumberOperation = true;
};

function deleteLastDigit() {
    resizeText()
    if (firstNumberOperation == true) {
        firstNumber = String(firstNumber).slice(0, -1);
        popDisplay(firstNumber);
    } else if (secondNumberOperation == true) {
        if (display.textContent == result) {
            result = String(result).slice(0, -1);
            popDisplay(result);
        } else if (display.textContent == secondNumber) {
            secondNumber = String(secondNumber).slice(0, -1);
            popDisplay(secondNumber);
        }
    };
};

function checkSnarkyMessage() {
    if (display.textContent.includes("Nope")) {
        display.textContent = display.textContent.replace("Nope", "");
        firstNumber = display.textContent;
    };
};

function preventInvalidOperation() {
    if (display.textContent.includes("Nope")) {
        console.log("I told you nope!");
        return true;
    };
};

function calculateAndShowResult(condition) {
    result = operate(firstNumber, operator, secondNumber);
    popDisplay(result);

    firstNumber = result;
    secondNumber = "";
    firstNumberOperation = condition;
};

function disallowOperatorDeletion() {
    if (display.textContent == "+" || display.textContent == "-" || 
        display.textContent == "*" || display.textContent == "÷") {
            console.log("Can't delete mathematical operator");
            return true;
        };
};
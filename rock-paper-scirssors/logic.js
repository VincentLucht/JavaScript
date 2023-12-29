function getUserInput() {
    let options = ["rock", "paper", "scissors"];

    while (true) {
        let userChoiceLowercase = prompt("");
        let userChoice = userChoiceLowercase.toLowerCase();
    
        // convert the first letter to uppercase 
        let displayedOption = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

        // check if the user inputted correctly
        if (options.includes(userChoice)) {
            console.log(`You chose: ${displayedOption}`);
            return userChoice;
        } else {
            console.log("Choose a valid option");
        }
    }
}

function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];

    // generate random Choice
    let randomChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    console.log(`The computer chose: ${randomChoice}`);
    return randomChoice;
}

function playRound(userChoice, comChoice) {
    // convert first letter to uppercase
    let userChoiceUpper = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    let comChoiceUpper = comChoice.charAt(0).toUpperCase() + comChoice.slice(1);

    // replay round if draw
    if (userChoice == comChoice) {
        console.log(`${userChoiceUpper} vs ${comChoiceUpper}, it's a draw!`);
    } else {
            // rock beats scissors
        if ((userChoice == "rock" && comChoice == "scissors") ||
            // paper beats rock
            (userChoice == "paper" && comChoice == "rock") ||
            // scissors beats paper
            (userChoice == "scissors" && comChoice == "paper")) {
            console.log(`${userChoiceUpper} beats ${comChoiceUpper}, you get 1 point`);
            point += 1;
        } else {
            console.log(`${comChoiceUpper} beats ${userChoiceUpper}, the computer gets 1 point`);
            comPoint += 1;
        }
    }
}

function gameBestOfFive() {
    while (point < 3 && comPoint < 3) {
        // get both inputs
        userChoice = getUserInput();
        comChoice = getComputerChoice().toLowerCase();

        playRound(userChoice, comChoice)
    }
    // display the winner
    if (point == 3) {
        console.log("Congratulations, you won!");
    } else if (comPoint == 3) {
        console.log("The computer won, you lose!")
    }
}

// initialize points
point = 0;
comPoint = 0;

// play the game
gameBestOfFive()
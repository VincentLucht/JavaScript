function getUserInput() {
    let userChoice;
    let buttonDiv = document.querySelector("#buttonDiv");
    buttonDiv.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
                console.log("Rock");
                return userChoice = "Rock";
            case "paper":
                console.log("Paper");
                return userChoice = "Paper";
            case "scissors":
                console.log("Scissors")
                return userChoice = "Scissors";
        }
    })
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

// initialize points
point = 0;
comPoint = 0;

// play the game
getUserInput()

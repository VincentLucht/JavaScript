function getUserInput() {
    userChoice;
    let buttonDiv = document.querySelector("#buttonDiv");
    buttonDiv.addEventListener("click", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
                let rock = "Rock";
                break;

            case "paper":
                userChoice = "Paper";
                break;

            case "scissors":
                userChoice = "Scissors";
                break;
        }
        let comChoice = getComputerChoice();
        playRound(userChoice=userChoice, comChoice=comChoice);
    })
}

function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];

    // generate random Choice
    let randomChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    //console.log(`The computer chose: ${randomChoice}`);
    return randomChoice;
}

function playRound(userChoice, comChoice) {
    // replay round if draw
    if (userChoice == comChoice) {
        console.log(`${userChoice} vs ${comChoice}, it's a draw!`);
    } else {
            // rock beats scissors
        if ((userChoice == "Rock" && comChoice == "Scissors") ||
            // paper beats rock
            (userChoice == "Paper" && comChoice == "Rock") ||
            // scissors beats paper
            (userChoice == "Scissors" && comChoice == "Paper")) {
            console.log(`${userChoice} beats ${comChoice}, you get 1 point`);
            point += 1;
        } else {
            console.log(`${comChoice} beats ${userChoice}, the computer gets 1 point`);
            comPoint += 1;
        }
    }
    console.log(`User: ${point} || Computer: ${comChoice}`);
}

// initialize points
point = 0;
comPoint = 0;
let userChoice;
getUserInput()
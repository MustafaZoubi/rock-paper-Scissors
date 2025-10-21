
let humanScore = 0, computerScore = 0;
let humanChoice, computerChoice;


playGame();

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice() {

    let humanChoice = prompt("Choose Rock or Paper or Scissors").toLowerCase();

    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return humanChoice;
    }

}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        console.log("Same no one lost")
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("Computer Wins! Paper Beats Rock");
            computerScore++;
        } else {
            console.log("Human Wins! Rock Beats Scissors");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Human Wins! Paper Beats Rock");
            humanScore++;
        } else {
            console.log("Computer Wins! Scissors Beats paper");
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            console.log("Computer Wins! Rock Beats Scissors");
            computerScore++;
        } else {
            console.log("Human Wins! Scissors Beats paper");
            humanScore++;
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    (humanScore > computerScore) ? console.log("Human Won") : console.log("Computer Won")
}


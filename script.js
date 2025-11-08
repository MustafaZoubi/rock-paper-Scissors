let humanScore = 0, computerScore = 0;


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector(".result");
const humanDiv = document.querySelector(".human-score");
const computerDiv = document.querySelector(".computer-score");
const finalResult = document.createElement("span");
finalResult.classList.add("final-result");
const span = document.createElement("span");
const textContainer = document.querySelector(".text-container");
span.classList.add("result-text");
textContainer.appendChild(span);
let scoreContainer = document.querySelector(".score");
rockBtn.addEventListener("click", (e) => { playRound("rock", getComputerChoice()) });
paperBtn.addEventListener("click", (e) => { playRound("paper", getComputerChoice()) });
scissorsBtn.addEventListener("click", (e) => { playRound("scissors", getComputerChoice()) });



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


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let hidden = true;
    console.log("human: " + humanChoice);
    console.log("computer: " + computerChoice);

    if (humanChoice == computerChoice) {
        span.textContent = `Same no one lost`;
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            span.textContent = "Computer Wins! Paper Beats Rock";
            computerScore++;
        } else {
            span.textContent = "Human Wins! Rock Beats Scissors";
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            span.textContent = "Human Wins! Paper Beats Rock";
            humanScore++;
        } else {
            span.textContent = "Computer Wins! Scissors Beats paper";
            computerScore++;
        }
    } else {
        if (computerChoice == "rock") {
            span.textContent = "Computer Wins! Scissors Beats paper";
            computerScore++;
        } else {
            span.textContent = "Human Wins! Scissors Beats paper";
            humanScore++;
        }
    }
    if (hidden) {
        humanDiv.style.visibility = "visible";
        computerDiv.style.visibility = "visible";
        hidden = false;
    }
    CheckScores();

}

function CheckScores() {
    humanDiv.textContent = `Player: ${humanScore}`;
    computerDiv.textContent = `Computer: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        controlButtons(true);
        result.appendChild(finalResult);

        if (humanScore > computerScore) {
            finalResult.textContent = "You Win";
            finalResult.style.color = "#E4C087";

        } else {
            finalResult.textContent = "You Lost";
            finalResult.style.color = "#9c3b3b";


        }
        restGame()
    }
}

function restGame() {
    const restBtn = document.createElement("button");
    restBtn.classList.add("rest-button")
    restBtn.textContent = "Rest Game"
    restBtn.style.marginLeft = "20px";
    result.appendChild(restBtn);
    restBtn.addEventListener("click", () => {
        controlButtons(false);
        computerScore = 0;
        humanScore = 0;
        humanDiv.textContent = humanScore;
        computerDiv.textContent = computerScore;
        span.textContent = "";
        humanDiv.style.visibility = "hidden";
        computerDiv.style.visibility = "hidden";
        result.removeChild(finalResult);
        result.removeChild(restBtn);
    });
}

function controlButtons(control) {
    rockBtn.disabled = control;
    paperBtn.disabled = control;
    scissorsBtn.disabled = control;
}
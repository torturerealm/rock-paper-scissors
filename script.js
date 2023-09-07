function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    }
    else if (random === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        }
        else if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beat Paper";
        }
        else if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beat Paper";
        }
        else if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        }
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors? ", "").toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
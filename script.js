function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) return "rock";
    else if (random === 2) return "paper";
    else if (random === 3) return "scissors";
}

function getPlayerChoice(e) {
    if (e.target.className === "rock") return "rock";
    else if (e.target.className === "paper") return "paper";
    else if (e.target.className === "scissors") return "scissors";
}

function playRound(e) {
    let playerSelection = getPlayerChoice(e);
    let computerSelection = getComputerChoice();
    let result = "";

    // Player and computer is draw
    if (playerSelection === computerSelection) result = "draw";
    // player wins
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) result = "win";
    // player loses
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) result = "lost";
    
    game(result);
}

function resetScore() {
    computerScore = 0;
    playerScore = 0;
}

function resetRound() {
    round = 0;
}

// first to win 5 rounds wins
function game(result) {
    if (result === "win") {
        if (playerScore < 5) {
            playerScore++;
            changeRoundText();
            console.log(`You won! Computer = ${computerScore} and You = ${playerScore}`);
        } else if (playerScore >= 5) {
            resetScore();
        }        

    } else if (result === "lost") {
        if (computerScore < 5) {
            computerScore++;
            changeRoundText();
            console.log(`You lost! Computer = ${computerScore} and You =  ${playerScore}`);
        } else if (computerScore >= 5) {
            resetScore();
        }
        
    } else {
        console.log(`It's a draw! Computer = ${computerScore} and You = ${playerScore}`);
    }
}

function changeRoundText() {
    const h3 = document.querySelector("h3");
    round++;
    h3.textContent = `Round ${1 + round}`;
    if (round >= 5) {
        resetRound();
        h3.textContent = "Try again";
    }
}

// playround
// if player wins, playerscore++
// if player lost, computerscore++
// if draw, nothing happens, player needs to click again

// while (playerScore < 3 ), player wins game
// if computerScore > 3, player lost game/computer wins game


let computerScore = 0;
let playerScore = 0;
let round = 0;
const btn = document.querySelectorAll("#btn");
btn.forEach(btn => btn.addEventListener("click", playRound));
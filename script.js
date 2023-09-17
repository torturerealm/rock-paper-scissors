let computerScore = 0;
let playerScore = 0;
let round = 0;


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
    
    displayChoices(playerSelection, computerSelection, result);
    getScore(result);
}

    // getScore(result => {
        // if (result === win) {
            // playerScore++;
            // function to change score display
            // function to add element which displays winner of round
            // if (playerScore === 5) {
                // function to add element which display winner
                // function to change picture of loser
                // function to remove buttons
                // (NOT NEEDED if with refresh) function to reset score
                // function to add new button for "Try again" which refreshes screen
            // }
        // } else if (result === lost) {
            // playerScore++;
            // function to change score display
        // } else (DRAW) {
            // function to change score display
        // }
    // )};

// first to win 5 rounds wins
function getScore(result) {
    if (result === "win") {
        if (playerScore < 5 && computerScore < 5) {
            playerScore++;
            updateScoreDisplay("player");
            console.log(`You won! Computer = ${computerScore} and You = ${playerScore}`);
        } else if (playerScore === 5) {
            removeScoreDisplay();
            removeButtons();
            getWinner("player");
        }        

    } else if (result === "lost") {
        if (computerScore < 5) {
            computerScore++;
            updateScoreDisplay("computer");
            console.log(`You lost! Computer = ${computerScore} and You =  ${playerScore}`);
        } else if (computerScore === 5 && playerScore < 5) {
            removeScoreDisplay();
            removeButtons();
            getWinner("computer");
        }
        
    } else {
        console.log(`It's a draw! Computer = ${computerScore} and You = ${playerScore}`);
    }
}

function updateScoreDisplay(e) {
    const computerDisplay = document.querySelector(".computer-score");
    const playerDisplay = document.querySelector(".player-score");

    if (e === "player") {
        playerDisplay.textContent = `${playerScore}/5 :Player`;
    } else if (e === "computer") { 
        computerDisplay.textContent = `Computer: ${computerScore}/5`;
    }
}

function displayChoices(playerChoice, computerChoice, result) {
    const display = document.querySelector(".winner");

    display.classList.add("winning");
    display.textContent = `Player = ${playerChoice.toUpperCase()}, Computer = ${computerChoice.toUpperCase()}`;
}

function removeButtons() {
    const buttons = document.querySelector(".buttons");
    buttons.remove();
}

function removeMinorText() {
    const winner = document.querySelector(".winner");
    winner.classList.remove(".winning");
    rem.textContent = "";


}


function getWinner(e) {
    const winner = document.querySelector(".winner");
    winner.classList.add("outcome");
    
    if (e === "player") {
        winner.textContent = "YOU SAVED EVERYONE!";
    } else if (e === "computer") {
        winner.textContent = "YOU LOST! REFRESH THE PAGE."
    }
}

// player clicks one of buttons
// function to get what button clicked
// function to generate random number for computer choice
// function to decide if player wins/lose/draws with computer
// ***function to count the scores of computer and player
// function to change the score display

// function to announce the winner of the game
    // when player or computer reached five wins
// (optional) function to change the pictures depending the winner
// function to reset the score
// function to remove buttons 
// function to add another button "try again"

const btn = document.querySelectorAll("#btn");
btn.forEach(btn => btn.addEventListener("click", playRound));
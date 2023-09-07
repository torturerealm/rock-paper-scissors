function getComputerChoice() {
    // randomly generate a number from 1-3
    // if 1, rock
    // if 2, paper
    // if 3, scissors
}

function playRound(playerSelection, computerSelection) {
    // if playerSelection is equals to computerSelection
        //return "It's a draw!"

    // Player wins
    // if playerSelection is rock and computerSelection is scissors
        // return "You win! Rock beats Scissors"
    // if playerSelection is paper and computerSelection is rock
        // return "You win! Paper beats Rock"
    // if playerSelection is scissors and computerSelection is paper
        // return "You win! Scissors beat Paper"

    // Player lose
    // if playerSelection is rock and computerSelection is paper
        // return "You lose! Paper beats Rock"
    // if playerSelection is paper and computerSelection is scissors
        // return "You lose! Scissors beat Paper"
    // if playerSelection is scissors and computerSelection is rock
        // return "You lose! Rock beats Scissors"
}

// Let playerSelection store lowercase prompt from user
// Let computerSelection store input from getComputerChoice function
// Take in playerSelection and ComputerSelection as parameters for playRound
// playRound function alerts the user

let playerSelection = prompt("Rock, Paper, or Scissors? ", "");
let computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);


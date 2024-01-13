// Declare and assign all variables

const choice = ["rock", "paper", "scissors"];

let computerSelection = getComputerChoice;

// Create function that takes a random choice

function getComputerChoice() {
    const option = choice[Math.floor(Math.random() * choice.length)];
    return option;
}

function checkWinner() {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Win"
    }
    else {
        return "Lose"
    }
}



funcion playRound (playerSelection, computerSelection) {

}

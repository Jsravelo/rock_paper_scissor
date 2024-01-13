// Declare and assign all variables

const choice = ["rock", "paper", "scissors"];

let computerSelection = getComputerChoice();

let playerSelection = "rock"




// Create function that takes a random choice

function getComputerChoice() {
    const option = choice[Math.floor(Math.random() * choice.length)];
    return option;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Win";
    }
    else {
        return "Lose";
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!";
    }
    else if (result == "Win"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(playerSelection, computerSelection))

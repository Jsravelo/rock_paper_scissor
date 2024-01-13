// Declare and assign all variables

const choice = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;


// Create function that takes a random choice

function getComputerChoice() {
    const option = choice[Math.floor(Math.random() * choice.length)];
    return option;
}

// Create function that checks for winner

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

// Create function that plays a round

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

// Create a function that plays the game a tracks the score

function game() {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))

        if (checkWinner(playerSelection, computerSelection) == "Win") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Lose") {
            computerScore++;
        }
        else {
            computerScore = computerScore;
            playerScore = playerScore;
        }
    }

}

game()
console.log(playerScore)
console.log(computerScore)
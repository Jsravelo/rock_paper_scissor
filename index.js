const choices = ["rock", "paper", "scissors"];

// Create function that takes a random choice

function getComputerChoice() {    
    const option = choices[Math.floor(Math.random() * choices.length)];
    return option;
}



// Create function that takes player input

// function playerInput(){
//     let validInput = false
//     while (validInput == false) {
//         const choice = prompt("Select Rock, Paper or Scissors");
//         if (choice == null) {
//             continue;
//         }
//         const choiceInLower = choice.toLowerCase()
//         if (choices.includes(choiceInLower)) {
//             validInput = true;
//             return choiceInLower
//         }        
//     }
// }

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


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    // Do something with the result
});

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    // Do something with the result
});

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    // Do something with the result
});



// Create a function that plays the game a tracks the score

// function game() {
//     let computerScore = 0;
//     let playerScore = 0;
//     for (let i=0; i<5; i++) {
//         const playerSelection = playerInput();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection))

//         if (checkWinner(playerSelection, computerSelection) == "Win") {
//             playerScore++;
//         }
//         else if (checkWinner(playerSelection, computerSelection) == "Lose") {
//             computerScore++;
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("You win the game!!")
//     }
//     else if (computerScore > playerScore) {
//         console.log("You lose the game!!")
//     } 
//     else {
//         console.log("It's a tie!!")
//     }

//     console.log(`Computer score was ${computerScore}`)
//     console.log(`Player score was ${playerScore}`)
// }


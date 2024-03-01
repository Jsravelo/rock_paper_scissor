const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

// Create function that takes a random choice

function getComputerChoice() {    
    const option = choices[Math.floor(Math.random() * choices.length)];
    return option;
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const outcome = document.querySelector('.outcomeDiv');
const p = document.createElement('p');
const display = document.querySelector('.choice');
const choice = document.createElement('p'); 
const gameResult = document.querySelector('.endgame');
const reset = document.querySelector('.reset')

rock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (p.innerText == '') {
        outcome.removeChild(p);
    };

    choice.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
    display.appendChild(choice);

    game(playerScore, computerScore)
});

paper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (p.innerText == '') {
        outcome.removeChild(p);
    };

    choice.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
    display.appendChild(choice);

    game(playerScore, computerScore)
});

scissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (p.innerText == '') {
        outcome.removeChild(p);
    };
 
    choice.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
    display.appendChild(choice);

    game(playerScore, computerScore)
});

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
    } else {
        return "Lose";
    }
}

// Create function that plays a round

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);

    if (result == "Tie") {
        p.textContent = "It's a Tie!";
        outcome.appendChild(p);
    }
    else if (result == "Win") {
        playerScore++;
        p.textContent = `Your score is ${playerScore} and the computer score is ${computerScore}`;
        outcome.appendChild(p);
    }
    else {
        computerScore++;
        p.textContent = `Your score is ${playerScore} and the computer score is ${computerScore}`;
        outcome.appendChild(p);
    }
}


function game(playerScore, computerScore) {
    if (playerScore === 5) {
        gameResult.innerText = `Congratulations! You have won!`;
    } else if (computerScore === 5) {
        gameResult.innerText = `Boo! You lose!`;
    }

 

}



reset.addEventListener('click', () => {
    choice.innerText = '';
    p.innerText = '';
    gameResult.innerText = '';

})

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


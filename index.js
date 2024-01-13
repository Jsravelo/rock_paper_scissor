// Declare and assign all variables

const choice = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const option = choice[Math.floor(Math.random() * choice.length)];
    console.log(option)
}

getComputerChoice()

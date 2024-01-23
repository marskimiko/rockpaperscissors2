const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  return(options[Math.floor(Math.random()*options.length)]);
}

function game(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('tie')
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log ('player')
  } else {
    console.log('computer')
  }
}

let computerChoice = getComputerChoice();
let playerChoice = ('rock')

game(playerChoice, computerChoice)
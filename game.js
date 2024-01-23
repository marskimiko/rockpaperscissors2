const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  return(options[Math.floor(Math.random()*options.length)]);
}

// function game() {
//   playRound()
//   playRound()
//   playRound()
//   playRound()
//   playRound()
//   // for (let i = 1; i <= 5; i++) {
//   //   playRound(i)
//   // }
//  }

function getPlayerChoice() {
  let input = prompt('enter rock, paper, or scissors')
  return input;
}

 function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if(result ==- "Tie") {
    return 
  }
}


// let playerChoice = getPlayerChoice();
// let computerChoice = getComputerChoice();
// console.log('computer choice',computerChoice)
// console.log('player choice',playerChoice)


// game()
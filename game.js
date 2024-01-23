const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  return(options[Math.floor(Math.random()*options.length)]);
}

function getPlayerChoice() {
  let validatedInput = false;

  while(validatedInput === false) {
    const input = prompt('enter rock, paper, or scissors');
    if (input === null) {
      continue;
    } else {
     const lowerCaseInput = input.toLowerCase();  
     if (options.includes(lowerCaseInput)) {
      validatedInput = true;
      return lowerCaseInput;
     }
    }
  }
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
  if(result === "tie") {
    return `it's a tie!`;
  } else if(result === 'player') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else  {
    return `You Lose :( ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
  }
}

game()
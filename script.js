console.log("hello World");

function getComputerChoice() {

  let decision = Math.random() * 9;

  if (decision < 2){
    compChoice = "rock";
  } else if (decision < 5) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }

  return compChoice;
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLocaleLowerCase();

  if (playerSelection == computerSelection) {
    return("Tie");
  } else if (playerSelection == "rock"){
    if (computerSelection == "paper") {
      return("You lose. Paper beats Rock.");
    } else {
      return("You win. Rock beats scissors");
    }
  } else if (playerSelection == "paper"){
    if (computerSelection == "rock") {
      return("You win. Paper beats Rock.");
    } else {
      return("You lose. Scissors beats paper");
    }
  } else if (playerSelection == "scissors"){
    if (computerSelection == "paper") {
      return("You win. Scissors beats Paper.");
    } else {
      return "You lose. Rock beats scissors" ;
    }
  }
}

function game() {
  let generalScore = 0;

  for (let i = 0; i < 5; i++) {
    let userInput = prompt("rock, paper, scissors?");
    let roundResult = playRound(userInput,getComputerChoice());
    if (roundResult[4] == 'w') {
      generalScore++;
    } else if (roundResult[4] == 'l') {
      generalScore--;
   }
  }

  if (generalScore > 0) {
    return "player wins";
  } else if (generalScore < 0) {
    return "computer wins"
  } else {
    return "tie"
  }
  
}
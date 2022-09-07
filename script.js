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
  if (playerSelection == computerSelection) {
    console.log("Tie");
  } else if (playerSelection == "rock"){
    if (computerSelection == "paper") {
      console.log("You lose. Paper beats Rock.");
    } else {
      console.log("You win. Rock beats scissors");
    }
  } else if (playerSelection == "paper"){
    if (computerSelection == "rock") {
      console.log("You win. Paper beats Rock.");
    } else {
      console.log("You lose. Scissors beats paper");
    }
  } else if (playerSelection == "scissors"){
    if (computerSelection == "paper") {
      console.log("You Win. Scissors beats Paper.");
    } else {
      console.log("You Lose. Rock beats scissors");
    }
  }
}

const playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";

rockButton.addEventListener("click", 
  () => playRound("rock", getComputerChoice()));

paperButton.addEventListener("click", 
  () => playRound("paper", getComputerChoice()));

scissorsButton.addEventListener("click", 
  () => playRound("scissors", getComputerChoice()));

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

const displayDiv = document.createElement("div");
const liveResults = document.createElement("h4");
const liveScore = document.createElement("p");
const winnerOutput = document.createElement("h3");
displayDiv.appendChild(liveResults);
displayDiv.appendChild(liveScore);
displayDiv.appendChild(winnerOutput);
document.body.appendChild(displayDiv);

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  }
  else if (randomNumber < 0.66) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanValue = prompt("Rock, paper or scissors?", "")

  return humanValue.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let output = "";
let winner = "";

function playRound(humanChoice, computerChoice) {
  
  if(humanScore === 5 || computerScore === 5 ) {
    computerScore = 0;
    humanScore = 0;
    winner = "";
  }

  if(humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    output = "You lose! Paper beats Rock";
  }
  else if(humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    output = "You win! Rock beats scissors";
  }
  else if(humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    output = "You win! Paper beats rock";
  }
  else if(humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    output = "You lose! Scissors beats paper";
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    output = "You lose! Rock beats Scissors";
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    output = "You win! Scissors beats paper";
  }
  else if (humanChoice === computerChoice) {
    output = "Draw!";
  }


  if(humanScore === 5) {
     winner = "You are the winner! Congratulations!";
   }
   else if(computerScore === 5) {
     winner = "You lose to the machine! Lol";
   }

    liveResults.textContent = output;
    winnerOutput.textContent = winner;
    liveScore.textContent = `SCORE - YOU: ${humanScore} | MACHINE: ${computerScore}`;
}
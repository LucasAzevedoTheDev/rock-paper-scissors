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

var humanScore = 0;
var computerScore = 0;
    
function playRound(humanChoice, computerChoice) {
  if(humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
  }
  else if(humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors");
  }
  else if(humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats rock");
  }
  else if(humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors");
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper");
  }
  else if (humanChoice === computerChoice) {
    console.log("Draw!");
  }
}

// function playGame() {
//   humanScore = 0;
//   computerScore = 0;

//   var humanChoice = getHumanChoice();
//   var computerChoice = getComputerChoice();
//   playRound(humanChoice, computerChoice);

//   humanChoice = getHumanChoice();
//   computerChoice = getComputerChoice();
//   playRound(humanChoice, computerChoice);

//   humanChoice = getHumanChoice();
//   computerChoice = getComputerChoice();
//   playRound(humanChoice, computerChoice);

//   humanChoice = getHumanChoice();
//   computerChoice = getComputerChoice();
//   playRound(humanChoice, computerChoice);

//   humanChoice = getHumanChoice();
//   computerChoice = getComputerChoice();
//   playRound(humanChoice, computerChoice);

//   if(humanScore > computerScore) {
//     alert("You are the winner! Congratulations!")
//   }
//   else if(humanScore < computerScore) {
//     alert("You lose to the machine! Lol")
//   }
//   else {
//     alert("You draw with the machine!")
//   }
// }

// playGame()

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
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

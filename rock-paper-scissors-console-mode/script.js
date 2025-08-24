// Rock, Paper, Scissors with number input andd alert results

function getComputerChoice() {
  const n = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
  return n; // return the number directly
}

function getHumanChoice() {
  const input = prompt("Enter your choice:\n1 = Rock\n2 = Paper\n3 = Scissors");
  return parseInt(input); // convert string to number
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const choices = {1: "Rock", 2: "Paper", 3: "Scissors"};

    if (humanChoice === computerChoice) {
      alert(`It's a tie! You both chose ${choices[humanChoice]}.`);
      return;
    }

    const humanWins =
      (humanChoice === 1 && computerChoice === 3) || // Rock beats Scissors
      (humanChoice === 2 && computerChoice === 1) || // Paper beats Rock
      (humanChoice === 3 && computerChoice === 2);   // Scissors beats Paper

    if (humanWins) {
      humanScore++;
      alert(`You win! ${choices[humanChoice]} beats ${choices[computerChoice]}.`);
    } else {
      computerScore++;
      alert(`You lose! ${choices[computerChoice]} beats ${choices[humanChoice]}.`);
    }
  }

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    alert("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    alert("💻 Computer wins the game!");
  } else {
    alert("🤝 It's a tie game!");
  }
}

playGame();

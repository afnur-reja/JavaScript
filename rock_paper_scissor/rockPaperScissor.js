const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.querySelector(".reset-btn");
const result = document.querySelector(".result p");

let usrScore = 0;
let comScore = 0;

const showResult = (message, colour) => {
  result.innerHTML = message;
  result.className = colour;
};

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const userWins = () => {
  usrScore += 1;
  userScore.innerHTML = usrScore;
  showResult("You Win", "green");
};

const compWins = () => {
  comScore += 1;
  compScore.innerHTML = comScore;
  showResult("You Lose", "red");
};

const drawGame = () => {
  showResult("Draw", "white");
};

const resetGame = () => {
  usrScore = 0;
  comScore = 0;
  userScore.innerHTML = usrScore;
  compScore.innerHTML = comScore;
  showResult("Choose your move!", "white");
};

const playGame = (userChoice) => {
  const compChoice = generateCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissor" && compChoice === "paper")
  ) {
    userWins();
  } else {
    compWins();
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = choice.classList[1];
    playGame(userChoice);

  });
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

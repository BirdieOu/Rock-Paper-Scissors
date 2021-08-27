let userScore = 0;
let robotScore = 0;
const userScore_span = document.getElementById("user-score");
const robotScore_span = document.getElementById("robot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getRobotChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, robotChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallRobotWord = "robot".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  robotScore_span.innerHTML = robotScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(robotChoice)}${smallRobotWord}. You win! 🌟`
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice, robotChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallRobotWord = "robot".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  robotScore++;
  userScore_span.innerHTML = userScore;
  robotScore_span.innerHTML = robotScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(robotChoice)}${smallRobotWord}. Robot wins. ⚙️`
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove('red-glow'),300);
}

function draw(userChoice, robotChoice) {
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "you".fontsize(3).sub();
  const smallRobotWord = "robot".fontsize(3).sub();
  userScore_span.innerHTML = userScore;
  robotScore_span.innerHTML = robotScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} and ${convertToWord(robotChoice)}${smallRobotWord} are equal. It's a draw. ✨`
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove('gray-glow'),300);
}

function game(userChoice) {
  const robotChoice = getRobotChoice();
  switch (userChoice + robotChoice) {
    case "rs":
    case "pr":
    case "sp":
       win(userChoice, robotChoice);
       break;
    case "rp":
    case "ps":
    case "sr":
       lose(userChoice, robotChoice);
       break;
    case "rr":
    case "pp":
    case "ss":
       draw(userChoice, robotChoice);
       break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();

const startButton = document.querySelector("#Start-btn");
const welcomeScreen = document.querySelector("#welcome-screen");
const quizScreen = document.querySelector("#quiz-screen");

startButton?.addEventListener("click", startGame);

function startGame() {
  // hide the welcome screen

  welcomeScreen.classList.add("hidden");

  // show the quiz screen

  quizScreen.classList.remove("hidden");
}

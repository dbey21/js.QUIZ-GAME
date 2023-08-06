const startButton = document.querySelector("#Start-btn");
const welcomeScreen = document.querySelector("#welcome-screen");
const quizScreen = document.querySelector("#quiz-screen");
const secondsRemainingEl = document.querySelector("#seconds-remaining");
const endScreen = document.querySelector("#end-screen");
let secondsRemaining = 5;
let timer;

startButton?.addEventListener("click", startGame);

function startGame() {
  // hide the welcome screen
  welcomeScreen.classList.add("hidden");
  // show the quiz screen
  quizScreen.classList.remove("hidden");

  secondsRemainingEl.textContent = secondsRemaining;

  timer = setInterval(() => {
    secondsRemaining--;

    // if the timer gets to 0, end the game
    if (secondsRemaining <= 0) endGame();

    secondsRemainingEl.textContent = secondsRemaining;
  }, 1000);
}

function endGame() {
  // stop the timer
  clearInterval(timer);
  // hide the quiz screen
  quizScreen.classList.add("hidden");
  // show the end screen
  endScreen.classList.remove("hidden");
}

// 1. Which of the following animals primarily lives in water?
// A. Kangaroo
// B. Dolphin
// C. Cheetah
// D. Ostrich

// 2. What is the capital of France?
// A. Berlin
// B. Madrid
// C. London
// D. Paris

// 3. Which chemical element has the symbol 'Au'?
// A. Argon
// B. Gold
// C. Aluminium
// D. Silver

// 4. Which musical instrument has 88 keys?
// A. Guitar
// B. Violin
// C. Trumpet
// D. Piano

// 5. Who wrote the play "Romeo and Juliet"?
// A. Charles Dickens
// B. Mark Twain
// C. Jane Austen
// D. William Shakespeare

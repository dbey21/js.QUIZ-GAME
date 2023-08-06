const startButton = document.querySelector("#Start-btn");
const welcomeScreen = document.querySelector("#welcome-screen");
const quizScreen = document.querySelector("#quiz-screen");
const secondsRemainingEl = document.querySelector("#seconds-remaining");
const currentScoreEl = document.querySelector("#current-score");
const currentQuestionEl = document.querySelector("#current-question");
const finalScoreEl = document.querySelector("#final-score");
const scoreFormEl = document.querySelector("#score-form");

const endScreen = document.querySelector("#end-screen");
let secondsRemaining = 10;
let currentQuestionIndex = 0;
let score = 0;
let timer;

startButton?.addEventListener("click", startGame);
scoreFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  saveScoreToStorage();
});

const questionsArray = [
  {
    prompt: "Which of the following animals primarily lives in water?",
    options: ["Kangaroo", "Dolphin", "Cheetah", "Ostrich"],
    correct: 1,
  },
  {
    prompt: "What is the capital of France?",
    options: ["Berlin", "London", "Madrid", "Paris"],
    correct: 3,
  },
  {
    prompt: "Which chemical element has the symbol 'Au'?",
    options: ["Argon", "Gold", "Aluminium", "Silver"],
    correct: 1,
  },
  {
    prompt: "Which musical instrument has 88 keys?",
    options: ["Guitar", "Violin", "Trumpet", "Piano"],
    correct: 3,
  },

  {
    prompt: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    correct: 0,
  },
];

function startGame() {
  // hide the welcome screen
  welcomeScreen.classList.add("hidden");
  // show the quiz screen
  quizScreen.classList.remove("hidden");

  secondsRemainingEl.textContent = secondsRemaining;
  currentScoreEl.textContent = score;

  timer = setInterval(() => {
    secondsRemaining--;

    // if the timer gets to 0, end the game
    if (secondsRemaining <= 0) endGame();

    secondsRemainingEl.textContent = secondsRemaining;
  }, 1000);

  showNextQuestion();
}

function showNextQuestion() {
  var currentQuestion = questionsArray[currentQuestionIndex];

  currentQuestionEl.innerHTML = `
    <h3>${currentQuestion.prompt}</h3>
    <div id="answer-buttons">
      <button class="answer-btn">${currentQuestion.options[0]}</button>
      <button class="answer-btn">${currentQuestion.options[1]}</button>
      <button class="answer-btn">${currentQuestion.options[2]}</button>
      <button class="answer-btn">${currentQuestion.options[3]}</button>
    </div> 
    `;

  const answerButtons = document.querySelectorAll(".answer-btn");

  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", () => {
      evaluateAnswer(i);
    });
  }
}

function evaluateAnswer(i) {
  var currentQuestion = questionsArray[currentQuestionIndex];
  const isCorrect = i === currentQuestion.correct;

  if (isCorrect) {
    score++;
    currentScoreEl.textContent = score;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= questionsArray.length) endGame();
  else showNextQuestion();
}

function endGame() {
  // stop the timer
  clearInterval(timer);
  // hide the quiz screen
  quizScreen.classList.add("hidden");
  finalScoreEl.textContent = score;
  // show the end screen
  endScreen.classList.remove("hidden");
}

function saveScoreToStorage() {
  const formData = new FormData(scoreFormEl);
  const initials = formData.get("initials");
  const newScore = {
    initials,
    points: score,
  };
  console.log(newScore);
}

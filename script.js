var questions = [
    {
        prompt: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
   
    
    {
       
        prompt: "The condition in an if/else statement is enclosed within:",
        options:["Quotes", "curly brackets","parentheses","square brackets"],
        answer: "curly brackets"
        
    
    },


   
    {

        prompt: "Arrays in JavaScript can be used to store:",
        options: ["number and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"

    },


    
    {

      prompt: "Strings values must be enclosed within_____when being assigned to variables:",
      options:["commas","curly brackets","quotes","parentheses"],
      answer: "commas"

    },
    
    
    {

      prompt: "A very useful tool used during development and debugging for printing content to the debugging is:",
      options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      answer :""


    }





] 

console.log(questions.length);
var score = 0;
var btn = document.querySelector("#btn")
var win = document.querySelector(".wins");
var lose = document.querySelector(".loses");
var wordText = document.querySelector(".wordText")
var section = document.getElementById("#question");

var timeEl = document.getElementById("time");
var loseCounter = 0;
var secondsLeft = 25;
var correctAnswers = 0;
var submiteBtn = document.querySelector("#submit-btn");
var initials = document.querySelector("#initials");



function init(){
getWins();
setLosses();
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left.";
    console.log(secondsLeft)
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        
        // Calls function to create and append image
        
        loseGame()
       
      }
  
    }, 1000);
  }


function startQuizClicked() {
    // show q1 to section
    currentQuestion = 0;
    secondsLeft = 25;
    displayQuestion()
    setTime();

   
    
}



function loseGame() {
    wordText.textContent = "GAME OVER";
    loseCounter++
    btn.disabled = false;
    setLosses();

}




function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("correctAnswers");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
        correctAnswers = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      correctAnswers = storedWins;
    }
    //Render win count to page
    win.textContent = correctAnswers;
  }

  function setWins() {
    win.textContent = correctAnswers;
    localStorage.setItem("correctAnswers", correctAnswers);



  }








function displayQuestion() {
    // pick question from questions - e.g. pickk the first one
    console.log("current que index",currentQuestion);
    var questionPicked = questions[currentQuestion];
    
    
    var title = document.createElement('h3')
    title.textContent = questionPicked.prompt
    var option1 = document.createElement("button")
    option1.textContent=questionPicked.options[0]

    var section = document.getElementById("question")
    section.innerHTML = ""

    section.appendChild(title)

    // options - 4 buttons
    for (let index = 0; index < questionPicked.options.length; index++) {
        var option = document.createElement('button')
        option.textContent=questionPicked.options[index]
        option.addEventListener('click', checkAnswer)

        section.appendChild(option)
    }

}

function checkAnswer(event) {
    
    // check if the answer clicked is correct
    // what user clicked
    var userClickedValue = event.target.textContent
    // correct ans for that question
    var correctAns = questions[currentQuestion].answer
    if (userClickedValue == correctAns && secondsLeft > 0) {
        //
        document.getElementById("notification").textContent = "Correct"
        correctAnswers++;
        win.textContent = correctAnswers;
    }
    else{
        
        document.getElementById("notification").textContent = "Wrong"
        loseCounter++;
        lose.textContent = loseCounter;
    }
    setTimeout(()=> {
        document.getElementById("notification").textContent = ""
    }, 500)
    
    if (currentQuestion == questions.length - 1) {
        console.log("Inside que no checking logic");
        // show end game screen
        document.getElementById("end-game").style.display = "block"
        // hide the questions
        section.style.display = "none"
    }
    else {
        console.log("from checkAns", currentQuestion);
        currentQuestion++;
        displayQuestion()
    }
    
}
var highScoreArray =  JSON.parse(localStorage.getItem("highScores")) || []
function initialScore(event){
  event.preventDefault()
  var highScore ={
    initial: initials.value,
    score:correctAnswers - loseCounter
  }
 highScoreArray.push(highScore)
 localStorage.setItem("highScores", JSON.stringify(highScoreArray))
}

 document.getElementById("btn").addEventListener("click", startQuizClicked);
 submiteBtn.addEventListener("click", initialScore);


for(let index = 0; index < highScoreArray.length; index++ ){

}




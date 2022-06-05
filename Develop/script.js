var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector(".time")
var q1Element = document.querySelector(".q1")
var q2Element = document.querySelector(".q2")
var q3Element = document.querySelector(".q3")
var q4Element = document.querySelector(".q4")
var q5Element = document.querySelector(".q5")

var isCorrect = false;
var timer;
var timerCount;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    startTimer();
}

// NEED TO ADD REDUCTION IN TIME FOR INCORRECT ANSWER
function startTimer() {
    timer = setInterval(function() {
        timerCount --;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isCorrect && timerCount > 0) {
                clearInterval(timer)
            };
        }
        if (timerCount == 0) {
            clearInterval(timer);
            alert("times run out");
        }
    }, 1000);
}

function loseQuiz() {

}


//      write global variables
    // questions
    // start button
    // options to choose from in questions 
    // timer 

// 1. add event listener to start quiz button which starts function to start quiz
    // start quiz reveals question 1 and starts timer down from 75 secs
    // write interval timer function which takes 10 seconds each wrong answer

    // start button shows question 1 

// 2. quiz function
    // if/else function for answers to select correct answer 
    // show either "correct" or "incorrect" after seelction is made 
// 3. after quiz input for initials and log score in local storage
// view highscore function to show previous scores when logged
var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector("#countdown");
var q1Element = document.querySelector(".q1");
var q2Element = document.querySelector(".q2");
var q3Element = document.querySelector(".q3");
var q4Element = document.querySelector(".q4");
var q5Element = document.querySelector(".q5");

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
        timerCount--;
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
// function to clear highscores from list 





        //   "q1"
        //     Commonly used data types DO NOT include:
        //     1. strings
        //     2. booleans
        //     3. alerts
        //     4. numbers
        
        // "q2"
        //     <The condition in an if/else statement is enclosed within _____.</
        //     1. quotes
        //     2. curly brackets
        //     3. parentheses
        //     4. square brackets
        
        //  q3
        //     <Arrays in JavaScript can be used to store _____.</
        //     1. numbers and strings
        //     2. other arrays
        //     3. booleans
        //     4. all of the above
        //  q4
        //    <String values must be enclosed within _____ when being assigned to variables.</
        //     1. commas
        //     2. curly brackets
        //     3. quotes
        //     4. parentheses
        //  q5
        //     A very useful tool used during development and debugging for printing content to the debugger is:
        //     1. JavaScript
        //     2. terminal/bash
        //     3. for loops
        //     4. console.log
        
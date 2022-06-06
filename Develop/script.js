// variables for start button
var startButton = document.querySelector(".startButton");

// variable for div with landing page
var landingPage = document.querySelector(".start");

// variables for timer 
var timerElement = document.querySelector("#countdown");
var score = document.querySelector("#scoreInput");
var secondsLeft = 75;
var isCorrect = false;
var timer;
var timerCount;

// variables for questions section
var allQuestionsEl = document.querySelector(".all-question");

// variables for question elements and right/wrong
var questionEl = document.querySelector("#question");
var rightWrong = document.querySelector("#right-wrong");
var questionCount = 0;

// variable for final score
var finalEl = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");

// variables for highscore
var highscoresEl = document.querySelector("#highscore");
var scoreListEl = document.querySelector(".highscore-display");
var scoreList = [];

// answer button for questions variable 
var ansBtn = document.querySelectorAll("button.answer-btn");

// variables for action buttons e.g. sumbit, go back, clear scores, view scores
var submitScoreBtn = document.querySelector("submit-button");
var clearScoreBtn = document.querySelector("#clearHighscores");
var viewScoreBtn = document.querySelector("#view-scores")
var goBackBtn = document.querySelector("#backButton")

// variables for calling answers
var ans1Btn = document.querySelector("#answer-1");
var ans2Btn = document.querySelector("#answer-2");
var ans3Btn = document.querySelector("#answer-3");
var ans4Btn = document.querySelector("#answer-4");

// questions array (index starts at [0])
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

// start timer function 
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
            allQuestionsEl.getElementsByClassName.display = "none";
            finalEl.style.display = "block";
            score.textContent = timerCount;
        }
    }, 1000);
}

// start quiz function 
function startQuiz() {
    landingPage.style.display = "none";
    allQuestionsEl.style.display = "block";
    questionCount = 0;
    timerCount = 75;
    startButton.disabled = true;
    
    startTimer();
    cycleQuestion(questionCount);
}

// cycle question function 
function cycleQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// checking answers function 
function checkAnswers(event) {
    event.preventDefault();

    // display right/wrong <p> tag underneath question options 
    rightWrong.style.display = "block";
    var questionStatus = document.createElement("p");
    rightWrong.appendChild(questionStatus);
}



startButton.addEventListener("click", startQuiz);




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


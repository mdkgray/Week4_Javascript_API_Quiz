// variables for start button
var startButton = document.querySelector(".startButton");

// answer button for questions variable 
var ansBtn = document.querySelectorAll("button.answer-btns");

// variables for action buttons e.g. submit, go back, clear scores, view scores
var submitScoreBtn = document.querySelector("submit-button");
var clearScoreBtn = document.querySelector("#clearHighscores");
var viewScoreBtn = document.querySelector("#view-scores")
var goBackBtn = document.querySelector("#backButton")

// variables for calling answers
var ans1Btn = document.querySelector("#answer-1");
var ans2Btn = document.querySelector("#answer-2");
var ans3Btn = document.querySelector("#answer-3");
var ans4Btn = document.querySelector("#answer-4");

// variable for div with landing page
var landingPage = document.querySelector(".start");

// variables for timer 
var timerElement = document.querySelector("#countdown");
var score = document.querySelector("#scoreInput");
var secondsLeft = 75;

// variables for questions section
var allQuestionsEl = document.querySelector(".all-question");

// variables for question elements and right/wrong
var questionEl = document.querySelector("#question");
var rightWrong = document.querySelector("#right-wrong");
var questionCount = 0;

// variable for final score
var finalScoreEl = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");

// variables for highscore
var highscoreEl = document.querySelector("#highscore");
var highscoreDisplayEl = document.querySelector(".highscore-display");
var userScore = [];


// questions array (index starts at [0])
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answerArray: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answerArray: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answerArray: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answerArray: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerArray: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

// start timer function 
function startTimer() {
    var timer = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = (secondsLeft);

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timer);
            allQuestionsEl.style.display = "none";
            finalScoreEl.style.display = "block";
            score.textContent = secondsLeft;            
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
        ans1Btn.textContent = questions[id].answerArray[0];
        ans2Btn.textContent = questions[id].answerArray[1];
        ans3Btn.textContent = questions[id].answerArray[2];
        ans4Btn.textContent = questions[id].answerArray[3];
    }
}

// checking answers function 
function checkAnswers(event) {
    event.preventDefault();

    // display right/wrong <p> tag underneath question options 
    rightWrong.style.display = "block";
    var correctIncorrect = document.createElement("p");
    rightWrong.appendChild(correctIncorrect);


    // set new element for certain time after showing 
    setTimeout(function() {
        correctIncorrect.style.display = "none";
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        correctIncorrect.textContent = "Correct!";
    }
    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        correctIncorrect.textContent = "Wrong!";
    }

    // displays next question after one is answered
    if (questionCount < questions.length) {
        questionCount++;
    }
    cycleQuestion(questionCount);
}

// Function for adding score 
function addScore(event) {
    event.preventDefault();

    finalScoreEl.style.display = "none";
    highscoreEl.style.display = "block";

    var userInitials = initialsInput.value.toUpperCase();
    userScore.push({initials: userInitials, score: secondsLeft});

  // sorts score highest to lowest then appends them to the DOM
    userScore = userScore.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        } 
    });
    
    highscoreDisplayEl.innerHTML="";
    for (let i = 0; i < userScore.length; i++) {
        var highscoreOrder = document.createElement("li");
        highscoreOrder.textContent = `${userScore[i].initials} : ${userScore[i].score}`;
        highscoreDisplayEl.appendChild(highscoreOrder);
    }

    // functions to log scores and show scores
    logScores();
    showScores();
}

// function to log scores
function logScores() {
    localStorage.setItem("userScore", JSON.stringify(userScore));
}

// function to show scores
function showScores() {
    var storedUserScores = JSON.parse(localStorage.getItem.userScore);
    if (storedUserScores !== null) {
        userScore = storedUserScores;
    }
}

// function to clear scores from local storage
function clearScores() {
    localStorage.clear();
    highscoreDisplayEl.innerHTML = "";
}

// EVENT LISTENERS FOR BUTTONS

// event listener for start button to start quiz 
startButton.addEventListener("click", startQuiz);

// event listener for multiple choice answer buttons 
ansBtn.forEach(item => {
    item.addEventListener("click", checkAnswers);
});

submitScoreBtn.addEventListener("click", showScores);

goBackBtn.addEventListener("click", function () {
    highscoreEl.style.display = "none";
    landingPage.style.display = "block";
    secondsLeft = 75;
    timerElement.textContent = ("Time:" + secondsLeft + "seconds left");
});

clearScoreBtn.addEventListener("click", clearScores);

viewScoreBtn.addEventListener("click", function () {
    if (highscoreEl.style.display === "none") {
        highscoreEl.style.display = "block";
    }else if (highscoreEl.style.display === "block") {
        highscoreEl.style.display = "none"
    } else {
        return alert("No highscores to show");
    }
});


// highscores are not working need to activate and display button



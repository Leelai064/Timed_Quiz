//Header Variables
const highscoreDisplayEl = document.querySelector('#highScore');
const timerEl = document.querySelector('#timeCountdown');

// Introduction Variables
const startContainerEl = document.querySelector('#startContainer');
const BeginButton = document.querySelector('#beginBtn');
//Quiz Variables
const quizContainerEl = document.querySelector('#quizContainer');
const questionAskedEl = document.querySelector('#questionName');
const userAnswerEl = document.querySelector('#userAnswer');
//Final Score Input Variables
const scoresContainerEl = document.querySelector('#scoresContainer');
const initialsEl = document.querySelector('#initials');
const finalScoreEl = document.querySelector('#finalScore');
const submitButtonEl = document.querySelector('#submitBtn');

//Highscore Variables
const highScoreContainerEl = document.querySelector('#highScoreContainer');
const scoreLisElt = document.querySelector('#scoreList');
const restartButtonEl = document.querySelector('#restartBtn');
const clearButtonEl = document.querySelector('#clearBtn');
//Document as a whole Varibales (Universal)
var finalScore = 0;
var currentQArray = 0;
var highScores = [];
var interval;
var timeGiven = 75;
var Elapsedtime = 0;
var time = questions.length * 15;

//Eventlisterners/Buttons listed 5 buttons onClicks needed!!!!!!!!!!!!!!

BeginButton.addEventListener("onClick",function(){
    hide(startContainerEl);
    show(quizContainerEl);
    beginQuiz();
    renderQuestion();
})
//Questions Button
userAnswerEl.addEventListener("onClick",function(e){
if (e.target.matches("button")){

}
})
//Resart button that resets to the startContainerEl

//Clear Button that resets information saved in localstorage
clearButtonEl.addEventListener("onClick", function(){
    highScores = [];
    localStorage.setItem("finalScore", JSON.stringify(highScores));
    renderHighScores()
})
//Submittion Button that grabs users finalScore from local storage and renders to display!!


//Once the button has been clicked. The timer algorithm begins

function beginQuiz (){
    interval = setInterval (function(){
        Elapsedtime++;
        timerEl.textContent = timeGiven -Elapsedtime;
        if (Elapsedtime >= timeGiven){
            currentQ = questions.length;
            questioningBegins();
        }

    },1000);

    timerEl.textContent = timeGiven;

    questioningBegins ();
}

function endQuiz(){
    clearInterval(interval);
}

//The timer algorithm ends

//Question algorithm

function questioningBegins(){
    currentQArray++; 
    if (currentQArray <questions.length){
        renderCycledQs();
    }
    else{
        endQuiz();
        if ((timeGiven - Elapsedtime) > 0)
        highScores += (timeGiven - Elapsedtime);

        hide(quizContainerEl);
        show(highScoreContainerEl);
        timerEl.textContent = 0;

    }
   
}

//Note to self when question is answered correctly add 15 seconds

function answerMatchup (answer){
    if (questions[currentQArray].answer ==  questions[currentQArray].choices[answer.id]){
        score += 5;
        displayMessage("Correct Answer!");
    }
    else{
        Elapsedtime -= 10;
        displayMessage("Incorrect Answer!");
    }

}

//function for displaying the answerMatchup messages

function displayMessage(alert){
    let alertDivider = document.createElement("hr");
    let alertEl = document.createElement("div");
    alertEl.textContent = alert;
    document.querySelector(".hero-body").appendChild(alertDivider);
    document.querySelector(".hero-body").appendChild(alertEl);
    alertDissappear(function(){
        alertDivider.remove();
        alertEl.remove();
    }, 4000);

    // 4 Second display before disappearance
}

//Now we need to hide and show our elements they need functions. This can also be done another way by adding this to each section class in the HTML file.

//Displayed Element
function show(element){

    element.style.display = "block";

}
//Hidden Element
function hide(element){

    element.style.display = "none";

}

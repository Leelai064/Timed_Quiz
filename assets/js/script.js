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
const scoreListEl = document.querySelector('#scoreList');
const restartButtonEl = document.querySelector('#restartBtn');
const clearButtonEl = document.querySelector('#clearBtn');
const highScoreLinkEl = document.querySelector('#highScoreLink');
//Document as a whole Varibales (Universal)
var finalScore = 0;
var currentQArray = 0;
var highScores = [];
var interval;
var timeGiven = 75;
var Elapsedtime = 0;
// var time = questions.length * 15;

//Eventlisterners/Buttons listed 5 buttons onClicks needed!!!!!!!!!!!!!!
highScoreLinkEl.addEventListener("click", function(){
    hide(startContainerEl);
    hide(quizContainerEl);
    hide(scoresContainerEl);
    show(highScoreContainerEl);
});
BeginButton.addEventListener("click", function () {
    hide(startContainerEl);
    show(quizContainerEl);
    beginQuiz();
    renderCycledQs();
});
//Questions Button
userAnswerEl.addEventListener("click", function (e) {
    if (e.target.matches("button")) {
        answerMatchup(e.target);
        questioningBegins();
    }
});
//Submittion Button that grabs users finalScore from local storage and renders to display!!
submitButtonEl.addEventListener("click",function(){
    var highScores = [];
    let initialValue = initialsEl.value.trim();
    if(initialValue){
       // let usersScore =[{usersName: initialValue, usersScore: finalScore}];
        let usersScore = {usersName: initialValue, usersScore: finalScore};
        initialsEl.value = '';
        highScores = JSON.parse(localStorage.getItem("finalScore")) || [];
        //usersScore.push('#highScore');
        highScores.push(usersScore);
        // console.log(usersScore);
        localStorage.setItem("finalScore",JSON.stringify(highScores));
        show(highScoreContainerEl);
        renderHighScores();
        fullReset();
    }
    hide(scoresContainerEl);
});

//Resart button that resets to the startContainerEl
restartButtonEl.addEventListener("click",function(){
    hide(highScoreContainerEl);
    show(startContainerEl);
});


//Clear Button that resets information saved in localstorage
clearButtonEl.addEventListener("click", function () {
    highScores = [];
    localStorage.setItem("finalScore", JSON.stringify(highScores));
    renderHighScores()
    hide(scoresContainerEl);
});


//Once the button has been clicked. The timer algorithm begins

hide(quizContainerEl);
hide(scoresContainerEl);
hide(highScoreContainerEl);

function beginQuiz() {
   
    interval = setInterval(function () {
        Elapsedtime++;
        timerEl.textContent = timeGiven - Elapsedtime;
        if (Elapsedtime >= timeGiven) {
            currentQ = questions.length;
            questioningBegins();
        }

    }, 1000);

    timerEl.textContent = timeGiven;

    questioningBegins();
}

function endQuiz() {
    if(timeGiven <= 0){
    clearInterval(interval);
    hide(startContainerEl);
    show(scoresContainerEl);
    } else{
        clearInterval(interval);
        hide(startContainerEl);
        show(scoresContainerEl);
    }
}

//The timer algorithm ends

//Question algorithm

function questioningBegins() {
    currentQArray++;
    if (currentQArray < questions.length) {
        renderCycledQs();
    }
    else {
        endQuiz();
        if ((timeGiven <=0))
            highScores += (timeGiven - Elapsedtime);

        hide(quizContainerEl);
        show(scoresContainerEl);
        timerEl.textContent = 0;

    }

}

//Note to self when question is answered incorrectly subtract 10 seconds

function answerMatchup(answer) {
    if (questions[currentQArray].answer == questions[currentQArray].choices[answer.id]) {
        finalScore += 5;
        displayMessage("Correct Answer!");
    }
    else {
        timeGiven -= 10;
        displayMessage("Incorrect Answer!");
    }
}

//function for displaying the answerMatchup messages

function displayMessage(alert) {
    let alertDivider = document.createElement("hr");
    let alertEl = document.createElement("div");
    alertEl.textContent = alert;
    document.querySelector(".answerCheck").appendChild(alertDivider);
    document.querySelector(".answerCheck").appendChild(alertEl);
    setTimeout(function () {
        alertDivider.remove();
        alertEl.remove();
    }, 1000);
    if (document.getElementById('colorStatus').innerText.trim()  == "Correct Answer!") { 
        document.getElementById('colorStatus').style.color = "Green";
     } else{
        document.getElementById('colorStatus').style.color = "Red";
     }
    // 1 Second display before disappearance
}

//Now we need to hide and show our elements they need functions. This can also be done another way by adding this to each section class in the HTML file.

//Displayed Element
function show(element) {

    element.style.display = "block";

}
//Hidden Element
function hide(element) {

    element.style.display = "none";

}

//Rendering questions through Array

function renderCycledQs(){
    questionAskedEl.textContent = questions[currentQArray].title;
    for (i = 0; i < userAnswerEl.children.length; i ++){
        userAnswerEl.children[i].children[0].textContent = `${(i + 1)}: ${questions[currentQArray].choices[i]}`;
    }

}

function renderHighScores(){
    scoreListEl.innerHTML = "";
    show(scoresContainerEl);
    highScores = JSON.parse(localStorage.getItem("finalScore"));
    console.log(highScores)
    for (let i = 0;i < highScores.length; i++){
        let scoreEl = document.createElement("li");
       // scoreEl.className +=
        scoreEl.setAttribute("id", i)
        scoreEl.textContent = `${(i + 1)}. ${highScores[i].usersName} - ${highScores[i].usersScore}`;
        console.log();
        scoreListEl.appendChild(scoreEl);
    }

}

//Clear button function resets to startContainerEl

function fullReset(){
    finalScore = 0;
    currentQArray = 0;
    Elapsedtime = 0;
    timerEl.textContent = 0;
    timeGiven = 75;
}

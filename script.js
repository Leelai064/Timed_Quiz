submitbtn.onclick = HighscoreTally;
startbtn.onclick = BeginQuiz;

//listing my variables

var question= document.querySelector("#questions");
var timer= document.querySelector("#time");
var choice =document.querySelector("#choice");
var startbtn= document.querySelector("#begin");
var submitbtn = document.querySelector("#done");
var results = document.querySelector("results");

//Timer and question queue variables
var timerId;
var time = question.length * 20;
var CurrentQue= 0;

//event listener: when the button is clicked the timer starts.

document.getElementById("Startbtn").addEventListener("click", timer);
// Begin Quiz function

function beginquiz(){
    //I want a start screen that disappears once the questions start rolling out. Here's the variable for that
    document.getElementById
  

}
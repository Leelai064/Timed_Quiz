//Here is my event listener. When the Begin button is clicked, the timer starts.
document.getElementById("start_btn").addEventListener("click", begin);
//buttons needed
var nxtquestion = document.querySelector("#nxtquestion"); //next question

// Question Elements
function begin(){
    displayQs()
    var counter= 75;
    setInterval(function(){
        counter--;
        if(counter >= 0){
            span = document.getElementById("time_countdown");
            span.innerHTML = 'Time Left: ' + counter;
        }
        if (counter === 0){
            alert('Oops! Look like you ran out of time!');
            clearInterval(counter);
        }
    }, 1000);
};
//Now we want to display these questions to the user, have them disappear when answered and checked for correct scores

//Declaring useful variables
var nxtquestion = document.querySelector("#nxtquestion"); //next question
var qsarray = document.querySelector("#qsarray"); //questions array
var container = document.querySelector("#container");
var questionnum=0;
var choicecreation= document.createElement("p");


var questionlist= document.querySelector("#questionslist"); //number of questions given
var finalscore= 0; //Final score the user got
var highScore=0;

var scoreResult;
var answer_checkpoint;

//Element renewer
var renew=document.createElement("renew");

//submittion buttons for each possible choice.
// var choice1btn= document.getElementById(btn0);
// var choice2btn= document.getElementById(btn1);
// var choice3btn= document.getElementById(btn2);
// var choice4btn= document.getElementById(btn3);
//Event listners for the choices and next question cycling
//Endgame initial btn,view highscores, go back, and clear highscore btn
// choice1btn.addEventListener("click", choose1);
// choice2btn.addEventListener("click", choose2);
// choice3btn.addEventListener("click", choose3);
// choice4btn.addEventListener("click", choose4);

//Eventually we will need a goback, clear, and view highscores button below

//function for going through the questions created above
function displayQs(){
    questionlist.innerHTML="";
    renew.innerHTML="";
    choicecreation.innerHTML="";
    //Cyles through our questions array
    for(var i=0; i< questions.length; i++){
        var askedq = questions[questionnum].title;
        var givchoices= questions[questionnum].choices;
        questionlist.textContent=askedq;
        

        givchoices.forEach(function(newItem){
            var disItem=document.createElement("display");
            disItem.textContent = newItem;
            questionlist.appendChild(choicecreation);
            choicecreation.appendChild(disItem);
            disItem.addEventListener("click",correct_answer);
        })
    }
    //Need to have this for loop cycle for each question (Work on)
}

//So far the code does now know how to determine if the choice selected is the right answer

function correct_answer(event){
    var element = event.target;

    if(element.matches("display")){
        var createnew = document.createElement("div");
        createnew.setAttribute("id","createnew");

        if(element.textContent == questions[questionlist].answer){
            score ++;
            createnew.textContent= "Correct!";
        }
        else{
            counter = counter - deduct;
            createnew.textContent = "Wrong!"
        }
    }
    questionlist ++
    if (questionlist >= questions.length){
        complete();
        createnew.textContent = "End of Quiz!"+ "" + "You final score is: " + finalscore + "/" + questions.length;
    }
    else{
        displayQs(quizqs);
    }
    qsarray.appendChild(createnew);
}
function choose1() {correct_answer(0);}
function choose2() {correct_answer(1);}
function choose3() {correct_answer(2);}
function choose4() {correct_answer(3);}

//Save question answers to local storage function
function storedchoices(){
    localStorage.setItem("scoreResults",JSON.stringify(scoreResult));
}
//Display final scores function

//Clear all scores function
function clean_slate(){
    localStorage.clear();
    scoreResultsEl.innerHTML="";
}

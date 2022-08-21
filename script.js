//Here is my event listener. When the Begin button is clicked, the timer starts.
document.getElementById("beginBtn").addEventListener("click", begin);

//buttons needed
var nxtQuestion = document.querySelector("#nxtQuestion"); //next question

// Question Elements
function displayQs(){
    choiceCreation.innerHTML="";
 
        var askedQ = questions[questionNum].title;
        console.log(askedQ);
        var givchoices= questions[questionNum].choices;
        console.log(givchoices);
        // questions.textContent=askedQ;
        
        //give choicebtns a class
        // look up the difference between innertext and textconent
        givchoices.forEach(function(newItem){
            console.log(newItem);
            var displayItem=document.createElement("button");
            displayItem.classList.add("choiceBtn");
            displayItem.textContent = newItem;
            displayItem.addEventListener("click",(correctAnswer));
        //     // questionsList.appendChild(choiceCreation);
           questionsList.appendChild(displayItem);
        })
    // }
    //Need to have this for loop cycle for each question (Work on)
}
function begin(){
    console.log("Button works");
    displayQs()
    var counter= 75;
    setInterval(function(){
        counter--;
        if(counter >= 0){
            span = document.getElementById("timeCountdown");
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
var nxtQuestion = document.querySelector("#nxtQuestion"); //next question
var qsArray = document.querySelector("#qsArray"); //questions array
var container = document.querySelector("#container");
var questionNum=0;
var choiceCreation= document.createElement('button');


var questionsList= document.querySelector("#questionsList"); //number of questions given
var finalScore= 0; //Final score the user got
var highScore=0;

var scoreResult;
var answerCheckpoint;

//Element renewer
var renew=document.createElement("renew");

//Eventually we will need a goback, clear, and view highscores button below

//function for going through the questions created above
// function displayQs(){
//     choiceCreation.innerHTML="";
 
//         var askedQ = questions[questionNum].title;
//         console.log(askedQ);
//         var givchoices= questions[questionNum].choices;
//         console.log(givchoices);
//         // questions.textContent=askedQ;
        
//         //give choicebtns a class
//         // look up the difference between innertext and textconent
//         givchoices.forEach(function(newItem){
//             console.log(newItem);
//             var displayItem=document.createElement("button");
//             displayItem.classList.add("choiceBtn");
//             displayItem.textContent = newItem;
//             displayItem.addEventListener("click",(correctAnswer));
//         //     // questionsList.appendChild(choiceCreation);
//            questionsList.appendChild(displayItem);
//         })
//     // }
//     //Need to have this for loop cycle for each question (Work on)
// }

//So far the code does now know how to determine if the choice selected is the right answer

function correctAnswer(event){
    var element = event.target;

    if(element.matches("display")){
        var createnew = document.createElement("div");
        createnew.setAttribute("id","createnew");

        if(element.textContent == questions[questionsList].answer){
            score ++;
            createnew.textContent= "Correct!";
        }
        else{
            counter = counter - deduct;
            createnew.textContent = "Wrong!"
        }
    }
    questionsList ++
    if (questionsList >= questions.length){
        complete();
        createnew.textContent = "End of Quiz!"+ "" + "You final score is: " + finalScore + "/" + questions.length;
    }
    else{
        displayQs();
    }
}
function choose1() {correctAnswer(0);}
function choose2() {correctAnswer(1);}
function choose3() {correctAnswer(2);}
function choose4() {correctAnswer(3);}

function quizcomplete(){
    
}
//Save question answers to local storage function
function storedChoices(){
    localStorage.setItem("scoreResults",JSON.stringify(scoreResult));
}
//Display final scores function

//Clear all scores function
function cleanSlate(){
    localStorage.clear();
    scoreResultsEl.innerHTML="";
}

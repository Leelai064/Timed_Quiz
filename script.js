//Here is my event listener. When the Begin button is clicked, the timer starts.
document.getElementById("Startbtn").addEventListener("click", timer);
// Begin Quiz function

function begin(){
    var counter= 75;
    setInterval(function(){
        counter--;
        if(counter >= 0){
            span = document.getElementById("time_countdown");
            span.innerHTML = counter;
        }
        if (counter === 0){
            alert('Oops! Look like you ran out of time!');
            clearInterval(counter);
        }
    }, 1000);
}
function beginquiz(){
    document.getElementById("count").style="color:black;";
    timecountdwn();
};
//I want a start screen that disappears once the questions start rolling out. Here's the variable for that
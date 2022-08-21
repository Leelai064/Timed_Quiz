//Header Variables
const highscoreDisplayEl=document.querySelector('#highScore');
const timerEl= document.querySelector('#timeCountdown');

// Introduction Variables
const startContainer = document.querySelector('#startContainer');
const BeginBtn = document.querySelector('#beginBtn');
//Quiz Variables
const quizContainer = document.querySelector('#quizContainer');
const questionAskedEl = document.querySelector('#questionName');
const userAnswerEl = document.querySelector('#userAnswer');
//Final Score Input Variables
const scoresContainer = document.querySelector('#scoresContainer');
const initialsEl = document.querySelector('#initials');
const finalScoreEl = document.querySelector('#finalScore');
const submitBtnEl = document.querySelector('#submitBtn');

//Highscore Variables
const highScorecontainer = document.querySelector('#highScoreContainer');
const scoreLisElt = document.querySelector('#scoreList');
const restartBtnEl = document.querySelector('#restartBtn');
const clearBtnEl = document.querySelector('#clearBtn');
//Document as a whole Varibales (Universal)
var finalScore = 0;
var currentQ = 0;
var highScoreContainer = [];
var interval;
var timeGiven = 75;
var Elapsedtime = 0;
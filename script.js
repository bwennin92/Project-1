let playerTurn = [];
let order = [];
let highLight;
let turn;
let complete;
let compTurn;
let sectionId;
let strict = false;
let on = false;
let difficultHard = false;

const streakCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const extCircle = document.querySelector("#extcircle");
const playerBox = document.querySelector("#playerbox");
const startButton = document.querySelector("#play");
const resetButton = document.querySelector("#reset");
const difficultyButton = document.querySelector("#hardmode")
compTurn = true;

// sectionId = setInterval(gameTurn, 800);


startButton.addEventListener('click', (e) =>{
    if(startButton.button == true){
        on = true;
        streakCounter.innerHTML = '-'
    } else {
        on = false;
        streakCounter.innerHTML ="";
    }
})




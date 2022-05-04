let playerStreak = [];
let order = [];
let turn;
let complete;
let compTurn;
let sectionId;
let reset = false;
let difficultHard = false;
let victory;
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
// compTurn = true;


function gameOn(){
    victory = false;
    order =[topLeft,topRight,bottomLeft,bottomRight];
    playerStreak = [];
    blink = 0;
    sectionId = 0;
    turn = 1;
    streakCounter.innerHTML = 1;
    complete = true;
}

let blink = panel => {
    return new Promise((resolve, reject) =>{
        panel.className += 'active';
        setTimeout(() =>{
            panel.className = panel.className.replace('active', '');
        }, 500)
    })
}




startButton.addEventListener('click', (e) =>{
        streakCounter.innerText = '-';
        gameOn()
})
resetButton.addEventListener('click', (e) =>{
    streakCounter.innerText =''
})



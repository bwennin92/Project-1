let playerTurn = [];
let intervalId;
let round;
let good;
let compTurn;
let blink;
let win;
let power = false;


const streakCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const extCircle = document.querySelector("#extcircle");
const playerBox = document.querySelector("#playerbox");
const startButton = document.querySelector("#play");
const powerButton = document.querySelector('#power')
const resetButton = document.querySelector("#reset");
const difficultyButton = document.querySelector("#hardmode");
let order = [topLeft, topRight, bottomLeft, bottomRight];

powerButton.addEventListener('click', (e) => {
if(powerButton.checked == true) {
    power = true;
    streakCounter.innerHTML = "-";
    alert('Power is on!');
}else {
    if(powerButton.checked == false)
    streakCounter.innerHTML = '';
    alert("Powering down :(")
}
})
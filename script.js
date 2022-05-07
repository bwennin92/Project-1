let playerTurn = [];
let intervalId;
let round;
let good;
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
    // clearAll();
    // clearInterval(intervalId);
    alert("Powering down :(");
}
})
startButton.addEventListener('click', (e) => {
    if(power||win) {
        gameOn();
        compTurn(randomColor)
    }
})

function gameOn() {
    win = false;
    blink = 0;
    order = [topLeft, topRight, bottomLeft, bottomRight];
    playerTurn = [];
    intervalId = 0;
    turn = 1;
    streakCounter.innerHTML = 1;

}
let randomColor = Math.floor(Math.random() * order.length)
function compTurn() {
    topLeft.classList.add('active')
    setTimeout(() => {
        topLeft.classList.remove('active');
        topRight.classList.add('active')
        setTimeout(() => {

            topRight.classList.remove('active')
            bottomRight.classList.add('active')
        }, 1500)
        bottomRight.classList.remove('active')
    }, 1000)
}


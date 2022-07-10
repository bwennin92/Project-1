let playerTurn = [];
let round;
let good;
let blink;
let win;
let power = false;
let compBlink = [];

const allColors = document.querySelectorAll(".colors");

const streakCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const extCircle = document.querySelector("#extcircle");
const playerBox = document.querySelector("#playerbox");
const startButton = document.querySelector("#play");
const powerButton = document.querySelector("#power");
const resetButton = document.querySelector("#reset");
const difficultyButton = document.querySelector("#hardmode");

// this notifies the player
powerButton.addEventListener("click", (e) => {
  if (powerButton.checked == true) {
    power = true;
    streakCounter.innerHTML = "-";
    alert("Power is on!");
  } else {
    if (powerButton.checked == false) streakCounter.innerHTML = "";
    // clearAll();
    // clearInterval(intervalId);
    alert("Powering down :(");
  }
});
// this starts the game after the player hits the "power checkbox"
startButton.addEventListener("click", (e) => {
    if (power || win) {
        gameOn();
        compTurn();
        allColors.forEach((color) => {
          color.addEventListener("click", function (e) {
            console.log("reached");
            playerTurn.push(e.target);
            console.log(e.target);
            console.log(playerTurn);
          });
        });
        checkColor();
        // playerClick();
    }
});

function gameOn() {
  win = false;
  order = [topLeft, topRight, bottomLeft, bottomRight];
  playerTurn = [];
  turn = 1;
  streakCounter.innerHTML = 1;
}
// this is to notify the player of the next level after completing the sequence
function newRound() {
  level += 1;
  console.log("Can you beat this level?");
}
// this needs to randomize the colors
function randomBlink() {
  let order = [topLeft, topRight, bottomLeft, bottomRight];
  let randomColor = Math.floor(Math.random() * order.length);
  return randomColor;
}
// computer makes random colors
function compTurn() {
  let randomNum = randomBlink();

  order[randomNum].classList.add("active");
  compBlink.push(order[randomNum]);
  console.log(compBlink);
  setTimeout(() => {
    order[randomNum].classList.remove("active");
  }, 1000);
//this function lets a random number blink. GREAT, but after the player hits the correct sequence how do i make more numbers blink after the play wins the round?
}
// Checking player input  to computer sequence before next round
function checkColor() {
// i need this function to check if the player hit the correct sequence. Might need an if(playerOrder === compTurn){ console.log("next round")} else{ console.log('Game over!') }
}


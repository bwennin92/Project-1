let playerTurn = [];
let win;
let power = false;
let compBlink = [];

const allColors = document.querySelectorAll(".colors");

const streakCounter = document.querySelector("#turn");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
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
    alert("Powering down :(");
  }
});
// this starts the game after the player hits the "power checkbox"
startButton.addEventListener("click", (e) => {
    if (power || win) {
        gameOn();
        compTurn();
        clickRight = false;
          }});

function gameOn() {
  win = false;
  order = [blue, red, green, yellow];
  guessClicks = [];
  turn = 1;
  streakCounter.innerHTML = 1;
  checkColor();
}

// this needs to randomize the colors
function randomBlink() {
  let order = [blue, red, green, yellow];
  let randomColor = Math.floor(Math.random() * order.length);
  return randomColor;
};
// This lets us set the rounds up
const sequence = [randomBlink()];
let guessClicks = [...sequence];
// computer makes random colors
function compTurn() {
  let randomNum = randomBlink();

  order[randomNum].classList.add("active");
  compBlink.push(order[randomNum]);
  console.log(compBlink);
  setTimeout(() => {
    order[randomNum].classList.remove("active");
  }, 1000);
//this function lets a random number blink. GREAT, but after the player hits the correct sequence how do i make more numbers blink after the player wins the round?
}

let clickRight = false;

const checkColor = checkColor => {
  if(!clickRight) return;
  const colorPop = guessClicks.shift();
  if (colorPop === checkColor) {
    if (guessClicks.length === 0) {
      sequence.push(randomBlink());
      guessClicks = [...sequence];
    }
  }else {
    alert('Sorry try again!')
  }
};



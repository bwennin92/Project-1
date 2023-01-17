// let playerTurn = [];
// let win;
// let power = false;
// let compBlink = [];
let order = [];




const allColors = document.querySelectorAll(".colors");
// const streakCounter = document.querySelector("#turn");
const blue = document.querySelector("#top_left_button");
const red = document.querySelector("#top_right_button");
const green = document.querySelector("#bottom_left_button");
const yellow = document.querySelector("#bottom_right_button");
const extCircle = document.querySelector("#extcircle");
// const playerBox = document.querySelector("#playerbox");
// const startButton = document.querySelector("#play");
// const powerButton = document.querySelector("#power");
// const resetButton = document.querySelector("#reset");
// const difficultyButton = document.querySelector("#hardmode");


// this needs to randomize the colors
function randomBlink() {
  let randomOrder = [blue, red, green, yellow];
  return randomOrder[parseInt(Math.random() * randomOrder.length)];
};
// This lets us set the rounds up
const sequence = [randomBlink()];
let guessClicks = [...sequence];
// computer makes random colors
const compTurn = allColors => {
  return new Promise((resolve,reject) =>{
    allColors.className += 'active';
    setTimeout(() => {
      allColors.className = allColors.className.replace(
        'active',
        ''
      );
      setTimeout(() =>{
        resolve();
      }, 500);
    }, 1000);
  });
};

//this function lets a random number blink. GREAT, but after the player hits the correct sequence how do i make more numbers blink after the player wins the round?



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

const gameOn = async () => {
  clickRight = false;
  for (const allColors of sequence){
    await compTurn(allColors)
  }
  clickRight = true;
}
gameOn();

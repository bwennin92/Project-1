const playButton = document.querySelector("#play");
// 👇 this is used in the main execution loop of the game
var i = 0

// 👇 this will be the entire history of the simon says
var sequence = []

click = 0
 let playerInput = []
// was overcomplicating the problem
// 👇 this query will get all of the buttons
const allColors = document.querySelectorAll('.colors')
// this records the players input👇
function playerClick(){
  document.addEventListener('click', (e)=>{
    const clickedColorIndex = Array.from(allColors).indexOf(e.target);
    // console.log(clickedColorIndex);
    playerInput.push(clickedColorIndex);
    console.log(playerInput)
    click = 0
  });
}


// function addPlayerInput() {
//   playerInput.push(playerClick())
//   console.log(addPlayerInput)
// }

// 👇 now you can light them up like this
function randomQuadrant() {
  // 👇 keep stuff like this concise
  return Math.floor(Math.random() * allColors.length)
}

function addMove() {
  // 👇 add random number to the sequence
  sequence.push(randomQuadrant())

  // 👇 make sure sequence starts at zero
  i = 0
}

function compTurn() {
  // 👇 add "glow" effect to quadrant
  allColors[sequence[i]].classList.add("active")

  // 👇 remove "glow" effect after x amount of time
  setTimeout(function () {
    allColors[sequence[i]].classList.remove("active")
    i++
    if (i < sequence.length) {
      compTurn()
    }
    // 👇 sets the delay between blinks in milliseconds
  }, 500)
  // 💡 you could also allow the player to specify a time modifier (i.e. slow or fast, easy or hard)
}

// 👇 add a random number to the seq
addMove()

// 👇 start main execution loop
// compTurn()



//👇 when you hit the play button it begins the game or at least makes the colors blink. also noticed the more i hit the play button the more moves it adds duh brandon the function ADDMOVE() derp.
  playButton.addEventListener("click", () =>{
addMove();
compTurn();
playerClick()
console.log(sequence);
})
console.log(playerInput)
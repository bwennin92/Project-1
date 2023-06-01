const startButton = document.querySelector("#play");
// 👇 this is used in the main execution loop of the game
var i = 0

// 👇 this will be the entire history of the simon says
var sequence = []

// the order var and declaring all of the colored buttons
// was overcomplicating the problem
// 👇 this query will get all of the buttons
const allColors = document.querySelectorAll('.colors')

// 👇 now you can light them up like this
// allColors[0].classList.add("active")

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
compTurn()


  startButton.addEventListener("click", () =>{
addMove()
compTurn()
  })


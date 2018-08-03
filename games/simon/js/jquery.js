//have the game light up with different colors
const colors = ["red", "blue", "yellow", "green"];
let sequence = [];

function randomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function toggleFlash(el) {
  el.toggleClass("flash");
}

function lightUpSequence() {
  sequence.push(randomArrayElement(colors));
  for (let i = 0; i < sequence.length; i++) {
    let colorDiv = $(`.${sequence[i]}`);
    setTimeout(() => toggleFlash(colorDiv), i * 500);
    setTimeout(() => toggleFlash(colorDiv), i * 500 + 500);
  }
}

$(".startButton").on("click", lightUpSequence);

let currentlyChecking = 0;
//listen for clicks on the sequares
$(".square").on("click", event => {
    console.log($(event.target).data("color"));
    // have to make sure the user is following the sequence
    if (sequence[currentlyChecking] === $(event.target).data("color")) {
      currentlyChecking++;
      if (currentlyChecking === sequence.length) {
        currentlyChecking = 0;
        lightUpSequence();
      }
    } else {
      alert("You lost");
    }
  });


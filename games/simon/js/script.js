//have the game light up with different colors
const colors = ["red", "blue", "yellow", "green"];
let sequence = [];

function randomArrayElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function toggleFlash(el) {
  el.classList.toggle("flash");
}

function lightUpSequence() {
  sequence.push(randomArrayElement(colors));
  for (let i = 0; i < sequence.length; i++) {
    let colorDiv = document.querySelector(`.${sequence[i]}`);
    setTimeout(() => toggleFlash(colorDiv), i * 500);
    setTimeout(() => toggleFlash(colorDiv), i * 500 + 500);
  }
}

document
  .querySelector(".startButton")
  .addEventListener("click", lightUpSequence);

let currentlyChecking = 0;
//listen for clicks on the sequares
Array.from(document.querySelectorAll(".square")).forEach(square => {
  square.addEventListener("click", event => {
    console.log(event.target.dataset.color);
    //have to make sure the user is following the  sequence
    if (sequence[currentlyChecking] === event.target.dataset.color) {
      currentlyChecking++;
      if (currentlyChecking === sequence.length) {
        currentlyChecking = 0;
        lightUpSequence();
      }
    } else {
      alert("You lost");
    }
  });
});

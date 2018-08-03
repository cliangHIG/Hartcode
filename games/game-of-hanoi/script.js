// let moveDisk = false;
// let diskToMove;
// let score = 0;
// let scoreHeader = document.querySelector("#score");

// function toggleMove() {
//   moveDisk = !moveDisk;
// }

// function handleClick(e) {
//   if (!moveDisk) {
//     this.classList.add("selected");
//     diskToMove = this.querySelector(".disk");
//   } else {
//     let firstDisk = this.querySelector(".disk");
//     if (firstDisk && diskToMove.dataset.size > firstDisk.dataset.size) return;
//     score++;
//     scoreHeader.innerHTML = score;
//     this.insertBefore(diskToMove, this.firstChild);
//     document.querySelector(".selected").classList.remove("selected");
//   }
//   toggleMove();
// }

// [...document.querySelectorAll(".dock")].forEach(dock => {
//   dock.addEventListener("click", handleClick);
// });

let moveDisk = false;
let diskToMove;
let score = 0;
let scoreHeader = document.querySelector("#score");
let firstDisk;

function toggleMove() {
  moveDisk = !moveDisk;
}

function toggleScore() {
  if (firstDisk && diskToMove.dataset.size > firstDisk.dataset.size) return;
  score++;
  scoreHeader.innerHTML = score;
}

function handleClick(e) {
  if (!moveDisk) {
    this.classList.add("selected");
    diskToMove = this.querySelector(".disk");
  } else {
    firstDisk = this.querySelector(".disk");
    toggleScore();
    this.insertBefore(diskToMove, this.firstChild);
    document.querySelector(".selected").classList.remove("selected");
  }
  toggleMove();
}

[...document.querySelectorAll(".dock")].forEach(dock => {
  dock.addEventListener("click", handleClick);
});

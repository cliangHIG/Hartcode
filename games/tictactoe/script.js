let currentPlayer = "X";
let currentPlayerSpan = document.querySelector(".player-symbol");

let rowScore = {
  X: [0, 0, 0],
  O: [0, 0, 0]
};

let colScore = {
  X: [0, 0, 0],
  O: [0, 0, 0]
};

let diagScore = {
  X: [0, 0],
  O: [0, 0]
};

function togglePlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  //  currentPlayer = currentPlayer === "X" ? "O" : "X"
}

function incrementScore(score, dimension) {
  score[currentPlayer][parseInt(dimension)]++;
  if (score[currentPlayer][parseInt(dimension)] === 3) alert("game over");
}

function incrementAllScores(target) {
  incrementScore(rowScore, target.dataset.row);
  incrementScore(colScore, target.dataset.col);
  if (target.dataset.diag === "2") {
    incrementScore(diagScore, 0);
    incrementScore(diagScore, 1);
  } else {
    incrementScore(diagScore, target.dataset.diag);
  }
}

document.querySelector(".game").addEventListener("click", e => {
  let target = e.target;
  if (target.innerHTML !== "&nbsp;") return;
  target.innerHTML = currentPlayer;
  incrementAllScores(target);
  togglePlayer();
  currentPlayerSpan.innerHTML = currentPlayer;
});
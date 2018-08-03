let currentPlayer = "X";
let currentPlayerSpan = $(".player-symbol");

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
  incrementScore(rowScore, target.data("row"));
  incrementScore(colScore, target.data("col"));
  if (target.data("diag") === "2") {
    incrementScore(diagScore, 0);
    incrementScore(diagScore, 1);
  } else {
    incrementScore(diagScore, target.data("diag"));
  }
}

$(".game").on("click", e => {
  let target = $(e.target);
  if (target.html() !== "&nbsp;") return;
  target.html(currentPlayer);
  incrementAllScores(target);
  togglePlayer();
  currentPlayerSpan.html(currentPlayer);
});
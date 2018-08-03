const ranks = [
  14,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13
];

const suites = ["hearts", "spades", "diamonds", "clubs"];
const deck = [];

// generating a deck of 52 cards
ranks.forEach(rank => {
  suites.forEach(suite => {
    deck.push({ rank, suite });
  });
});

// add player names to be populated from the text field

// var addNew = document.getElementById("addButton");
// addNew.addEventListener("click", addPlayer);

// const names = [];

// function addPlayer() {
//   var playerName = document.querySelector(".playerName").value;
// names.push(playerName[i]);
//     const players = document.querySelector(".players");
//     players.innerContent(playerName);

// }

// addPlayer();

// add a "play" button clicking event listener to get the random card
const playButton = document.querySelector(".play");
playButton.addEventListener("click", randomCard);

// generate a random card for the two players from the deck

const player1 = deck[Math.floor(Math.random() * deck.length)];
const player2 = deck[Math.floor(Math.random() * deck.length)];

function randomCard() {
  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  card1.innerHTML = "Player1: " + " " + player1.rank + " " + player1.suite;
  card2.innerHTML = "Player2: " + " " + player2.rank + " " + player2.suite;
}

//assign value to each card and compare scores to get a winner
const message1 = document.querySelector(".message1");
const message2 = document.querySelector(".message2");
const result = document.querySelector(".result");
result.addEventListener("click", score);

function score() {
  

  if (player1.rank == player2.rank) {
    message1.innerHTML = "It's a tie";
  } else if (player1.rank > player2.rank) {
    message1.innerHTML = "Player 1 Won!";
  } else {
    message2.innerHTML = "Player 2 Won!";
  }
}


// restart the game when clicking on the reset button
function reset() {
  var resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", function() {
    window.location.reload();
  });
}
reset();

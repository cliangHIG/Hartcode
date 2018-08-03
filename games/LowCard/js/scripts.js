/*
 * Script for index.html
 * Requires:
 *  - deck.js
 *  - player.js
 */

// Force Strict Mode
"use strict";

/*
 * function to init game
 * 
 * @param players Array of Players
 */
function initGame(players) {
  // Show Players
  $("#players").show();

  // Show Dealer if we have 3 Players
  // ToDo: Currently set to 1 Player so you can test functionality, but you must change to 3!
  if (players.length === 3) {
    console.log("Game is initialized. Ready to deal!");
    $("#dealer").show();
  } else {
    console.log(`Need ${3 - players.length} more players(s) to start game.`);
  }
}

// Execute only when document is ready (DOM loaded)
$(document).ready(() => {
  console.log("Document Ready...");

  // Array to hold Player Objects
  var players = [];
  // Array to hold Card Objects
  var deck = getDeck(); // getDeck() function in deck.js
  console.log(deck);

  // Bind Click Event Hanlder to playerOneForm Submit
  $("#playerOneForm").submit(e => {
    // Prevent Default Form Submit Behavior
    e.preventDefault();

    console.log("playerOneForm Submitted.");

    // check to ensure User Name Entered
    if ($("#playerOneName").val() === "") {
      alert("Enter a name for PlayerOne");
    } else {
      // Create Player and add to Game
      var player = createPlayer($("#playerOneName").val());
      players.push(player);

      // Display Player
      $("#playerOneDisplayName").text(player.getName());
      $("#playerOneDisplayScore").text(`(${player.getScore()})`);

      initGame(players);
      $("#playerOneHeader").show();

      $("#playerOneFormSubmitBtn").hide();
    }
  });
  // ToDo: Add handlers for two more Players. Can you make any of the duplicate code DRY?
  //       Also, ensure there are no duplicate Player names!

  $("#playerTwoForm").submit(e => {
    // Prevent Default Form Submit Behavior
    e.preventDefault();

    console.log("playerTwoForm Submitted.");

    // check to ensure User Name Entered
    if ($("#playerTwoName").val() === "") {
      alert("Enter a name for PlayerTwo");
    } else {
      // Create Player and add to Game
      var player = createPlayer($("#playerTwoName").val());
      players.push(player);

      // Display Player
      $("#playerTwoDisplayName").text(player.getName());
      $("#playerTwoDisplayScore").text(`(${player.getScore()})`);

      initGame(players);
      $("#playerTwoHeader").show();

      $("#playerTwoFormSubmitBtn").hide();
    }
  });

  $("#playerThreeForm").submit(e => {
    // Prevent Default Form Submit Behavior
    e.preventDefault();

    console.log("playerThreeForm Submitted.");

    // check to ensure User Name Entered
    if ($("#playerThreeName").val() === "") {
      alert("Enter a name for PlayerThree");
    } else {
      // Create Player and add to Game
      var player = createPlayer($("#playerThreeName").val());
      players.push(player);

      // Display Player
      $("#playerThreeDisplayName").text(player.getName());
      $("#playerThreeDisplayScore").text(`(${player.getScore()})`);

      initGame(players);
      $("#playerThreeHeader").show();

      $("#playerThreeFormSubmitBtn").hide();
    }
  });

  // Bind Click Event handler to Deal Button
  $("#dealButton").click(() => {
    console.log("Dealing...");

    // ToDo: Write code to:
    // - Deal top three cards to Players (one each)
    var playerOneCard = $("#playerOneCard").text(shuffleDeck());
    var playerTwoCard = $("#playerTwoCard").text(shuffleDeck());
    var playerThreeCard = $("#playerThreeCard").text(shuffleDeck());
    // - Compare the three cards to determine the winner
    if (playerOneCard < playerTwoCard && playerThreeCard) {
      this.score++;
    } else if (playerTwoCard < playerOneCard && playerThreeCard) {
      this.score++;
    } else {
      this.score++;
    }
    // - Add 1 to the winning Player's score
    // - Decrease "Cards in Deck" cout on page as appropriate
    $("#cardsInDeck").text(52 - shuffleDeck([].length));
    // - After first deal, increase "Cards Discarded" count on page as appropraite
    $("#cardsDiscarded").text(shuffleDeck([].length - 3));
    // - If there aren't enough Cards in Deck to deal to all Players, stop game, announce winner of game, show "New Game" button
    // Q: Should you create new functions for some of this functionality?
  });

  // ToDo: Bind Click Event Handler to "New Game" button which resets Players and shuffles new Deck for next game
  $("#newGameButton").click(() => {
    console.log("reseting...");
  });
});

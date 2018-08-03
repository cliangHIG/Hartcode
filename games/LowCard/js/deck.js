/*
 * Script for index.html
 * required by scripts.js
 * requires card.js
 */

// Force Strict Mode
"use strict";

// ToDo: Complete shuffleDeck() function, which takes an Array of Card Objects,
//       shuffles the Array, then returns it
function shuffleDeck(deck) {
  console.log("Shuffling deck...");

  // ToDo: Shuffle Array here
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Return shuffled deck
  return deck;
}

/*
 * This function is called by scripts.js to create a Deck of Cards and return it.
 *
 * @return deck - Array of Cards
 */
function getDeck() {
  console.log("Getting Deck of Cards...");

  // Aarry to hold Deck of Card Object Literals
  var deck = getCards(); // getCards() is in card.js

  // Shuffle cards before returning
  return shuffleDeck(deck);
}

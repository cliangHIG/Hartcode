/*
 * Script for index.html
 * required by deck.js
 */

// Force Strict Mode
"use strict";

// ToDo: Complete createCard() function which takes appropriate parameters (ex: Jack, Diamonds, value),
//       creates a Card Object, and returns it.
//       Note: See createPlayer() function in player.js as an example!
function createCard(face, suite, value) {
  console.log(`Creating Card: ${face} + ${suite}.`);
  // ToDo: Add Properties and Behaviors to the Card Object
  var card = {
    // Properties
    face: face, 
    suite: suite,
    value: value,

    // Behaviors
    getFace: function() {
      return this.face  + this.suite
    },

    getSuite: function() {
      return this.suite;
    },

    getValue: function() {
      return this.value;
    }
  };

  // Return the new Card
  return card;
}

// ToDo: Complete getCards() function which creates a Card Object for each Card in the Deck (ex: 2 - Ace cards for each suite),
//       pushes them to the cards Array, then returns the Array
function getCards() {
  // Array to hold Cards
  var suites = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];
  // Array to hold non-numeric card faces 
  var faceCards = ['J', 'Q', 'K', 'A'];

  // Array to hold Cards
  var cards = [];

  // Loop for each Suite
  var currentCardIndex = 0;
  for (var suite in suites) {
    // Loop for numeric cards
    for (var i = 2; i <= 10; i++) {
        cards.push(createCard(i, suites[suite], currentCardIndex));
        currentCardIndex++;
    }
    // Loop for non-numeric cards
    for (var face in faceCards) {
        cards.push(createCard(faceCards[face], suites[suite], currentCardIndex));
        currentCardIndex++;
    }
    currentCardIndex = 0;
}

  // Return Array of Card Objects
  return cards;
}

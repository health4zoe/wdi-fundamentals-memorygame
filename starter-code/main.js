console.log("JS file is connected to HTML! Woo!")

// declaring variables
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var gameBoard = document.getElementById('game-board');

// creating cards
// create a div
// class of card
// need four
// line 16 name function
// line 21 call function
// need body of function on line 19
var createCards = function() {
  for (i = 1; i < 5; i++) {
   var card = document.createElement("div");
   card.className = "card";
   gameBoard.appendChild(card);
   console.log(card);
  }
}

// running the createCards function
createCards();

// checking for matching cards
if (cardThree && cardFour) {
  alert("You found a match!");
} else if (cardTwo && cardOne) {
  alert("You found a match");
} else if (cardFour && cardTwo) {
  alert("Sorry try again!");
} else if (cardFour && cardOne) {
  alert("Sorry try again!");
} else if (cardThree && cardTwo) {
  alert("Sorry try again!");
} else if (cardOne && cardThree) {
  alert("Sorry try again!");
}

// code that was tried and not used
// cardThree == cardFour;
// "You found a match!"
// cardTwo == cardOne;
// "You found a match!";
// cardFour != cardTwo;
// "Sorry, try again.";
// cardFour != cardOne;
// "Sorry, try again.";
// cardThree != cardTwo;
// "Sorry, try again.";
// cardOne != cardThree;
// "Sorry, try again.";

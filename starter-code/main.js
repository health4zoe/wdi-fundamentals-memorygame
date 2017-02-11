console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

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

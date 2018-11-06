// Global variables will be defined here

// Target score for the player
var targetNumber = $("#randomNumber");

// Random value generator for our target score
var rnValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// Total number of wins
var totalWins = $("#winTotal");

// Total number of losses
var totalLosses = $("#loseTotal");

// The area where the crystals are going to go
var crystalSection = $("#crystals");

// The current score that the user has
var currentScore = $("#currentScore");

// The actual game begins here, after the page loads everything
$(document).ready(function() {

    // Our game starts by setting the random number 'target' for the player
    $(targetNumber).html(rnValue);
});
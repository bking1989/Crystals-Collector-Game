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

    // Our game starts by setting the interface, including target score
    $(targetNumber).html(rnValue);
    $(totalWins).html(0);
    $(totalLosses).html(0);
    $(currentScore).html(0);

    // Then, we assign a random value to each of the four crystals that we have
    for (var i = 1; i < 5; i+1) {
        var targetCrystal = $(crystalSection).child[i];
        var pointValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        targetCrystal.attr("value",pointValue);
    };
});
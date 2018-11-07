// Global variables will be defined here

// Target Score
var targetScore = $("#randomNumber");

// Random Number Generator for Target Score

var randomNumber =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// Total Number of Wins
var totalWins = $("#winTotal");

// Total Wins Counter
var winCounter;

// Total Number of Losses
var totalLosses = $("#loseTotal");

// Total Losses Counter
var loseCounter;

// The Four Crystals
var crystalOne = $("#crystalOne");
var crystalTwo = $("#crystalTwo");
var crystalThree = $("#crystalThree");
var crystalFour = $("#crystalFour");

// Current Score
var currentScore = $("#currentScore");

// Current Score Counter
var currentCounter;

$(document).ready(function() {
    // Game interface is prepared
    $(targetScore).html(randomNumber);
    winCounter = 0;
    $(totalWins).html(winCounter);
    loseCounter = 0;
    $(totalLosses).html(loseCounter);
    currentCounter = 0;
    $(currentScore).html(currentCounter);

    // Next, all but one of the crystals are given a random value between 1 and 12
    var valueTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var valueThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var valueFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

    $(crystalOne).data("value", 1);
    $(crystalTwo).data("value", valueTwo);
    $(crystalThree).data("value", valueThree);
    $(crystalFour).data("value", valueFour);

    // When one of the crystals is clicked, their value is added to the current score
    $(".crystalClick").on("click", function() {
        var pointValue = $(this).data("value");
        var newScore = currentCounter + pointValue;
        currentCounter = newScore;
        $(currentScore).html(currentCounter);

        // After the score has been updated, it is compared to the target score
        if (currentCounter == randomNumber) {
            // If they meet the score exactly, they win, win total is updated, and it restarts
            alert("Congratulations, you win!");
            var randomNumber =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $(targetScore).html(randomNumber);
            winCounter++;
            $(totalWins).html(winCounter);
            loseCounter = 0;
            $(totalLosses).html(loseCounter);
            currentCounter = 0;
            $(currentScore).html(currentCounter);
        } else if (currentCounter > randomNumber) {
            alert("Uh oh, yo went over! You lose!");
            var randomNumber =  Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $(targetScore).html(randomNumber);
            winCounter = 0;
            $(totalWins).html(winCounter);
            loseCounter++;
            $(totalLosses).html(loseCounter);
            currentCounter = 0;
            $(currentScore).html(currentCounter);
        };
    });
});
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
    // The game would start here, and begins with setting the scoreboard
    $(targetScore).html(randomNumber);
    winCounter = 0;
    $(totalWins).html(winCounter);
    loseCounter = 0;
    $(totalLosses).html(loseCounter);
    currentCounter = 0;
    $(currentScore).html(currentCounter);

    // Next, we assign values to the crystals
    var valueOne = 1;
    var valueTwo = Math.floor(Math.random() * 12) + 1;
    var valueThree = Math.floor(Math.random() * 12) + 1;
    var valueFour = Math.floor(Math.random() * 12) + 1;

    $(crystalOne).data("value",valueOne);
    $(crystalTwo).data("value",valueTwo);
    $(crystalThree).data("value",valueThree);
    $(crystalFour).data("value",valueFour);

    // When you click on a crystal, the value is added to the total score
    $(".crystalClick").on("click", function() {
        var pointValue = $(this).data("value");
        var oldScore = parseInt($(currentScore).html());
        var newScore = pointValue + oldScore;
        $(currentScore).html(newScore);

        // This if/else conditional will compare the new score to see if the player meets or exceeds the target score
        if (parseInt($(currentScore).html()) == parseInt($(targetScore).html())) {
            // If the player matches the target, the win counter goes up, the crystal values are randomized, and the game restarts
            alert("Congratulations! You met your target! Play again?");
            $(targetScore).html(randomNumber);
            winCounter++;
            $(totalWins).html(winCounter);
            currentCounter = 0;
            $(currentScore).html(currentCounter);

            var valueOne = 1;
            var valueTwo = Math.floor(Math.random() * 12) + 1;
            var valueThree = Math.floor(Math.random() * 12) + 1;
            var valueFour = Math.floor(Math.random() * 12) + 1;

            $(crystalOne).data("value",valueOne);
            $(crystalTwo).data("value",valueTwo);
            $(crystalThree).data("value",valueThree);
            $(crystalFour).data("value",valueFour);
        } else if (parseInt($(currentScore).html()) > parseInt($(targetScore).html())) {
            // If the player exceeds the target, the lose counter goes up, the crystal values are randomized, and the game restarts
            alert("Uh oh! You went over the target score! Try again?");
            $(targetScore).html(randomNumber);
            loseCounter++;
            $(totalLosses).html(loseCounter);
            currentCounter = 0;
            $(currentScore).html(currentCounter);

            var valueOne = 1;
            var valueTwo = Math.floor(Math.random() * 12) + 1;
            var valueThree = Math.floor(Math.random() * 12) + 1;
            var valueFour = Math.floor(Math.random() * 12) + 1;

            $(crystalOne).data("value",valueOne);
            $(crystalTwo).data("value",valueTwo);
            $(crystalThree).data("value",valueThree);
            $(crystalFour).data("value",valueFour);
        };
    });
});
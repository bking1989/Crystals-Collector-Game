# Crystals-Collector-Game

This is an intereactive game made using both basic JavaScript and the JavaScript library jQuery. 

The concept is that the player is given a random number as a 'target score', and they want to reach this score by clicking on the four crystals that are displayed beneath the scoreboard. The crystals have random values ranging from 0 to 12. However, the player doesn't know the value until the crystal is clicked on, and the player can lose by going over the target. Whether they win or lose, the game will reset, afterwards.

The actual code that went into the game included a number of JavaScript and jQuery pieces. More specifically, the jQuery command of `$()html()` was used to manage and update the user's scores, and `$().data()` was used to give each crystal a value. The actual number value the crystals received was calculated by using JavaScript functions like `Math.floor()` and `Math.random()`. 

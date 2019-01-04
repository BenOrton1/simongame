/*create simon object*/
$(document).ready(function() {
    let simonObject = {
        playerOrder: [],
        gameOrder: [],
        currentTurn: 0,
        computerColorCount: 0,
        playerTurn: false,
        numberOfColours: 4,
        colours: [red, green, blue, yellow]
    };
    /*computer turn functions*/
    function computerFlashTimeout() {
        console.log(simonObject.gameOrder[simonObject.computerColorCount]);
        var thisFlash = simonObject.gameOrder[simonObject.computerColorCount];
        var thisColour = simonObject.colours[thisFlash - 1];
        console.log(thisColour);
        $(thisColour).addClass("light-up");
        simonObject.computerColorCount++;
    }

    function clearColours() {
        $(".simon-color").removeClass("light-up");
    }
    /*end of computer turn functions*/

    /*startgame
    clear all of old games 
    set up new game order 
    start computer turn
    */
    $("#play").click(function() {
        clearColours();
        simonObject.gameOrder = [];
        simonObject.playerOrder = [];
        simonObject.currentTurn = 20;
        simonObject.playerTurn = false;
        for (var i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonObject.numberOfColours) + 1);
        }
        console.log(simonObject);
        computerTurn();
    });


    /*computer turn
    stop player clicking
    clear player order
    flash correct amount of colours from gameOrder 
    start player turn
    */
    function computerTurn() {
        simonObject.playerTurn = false;
        simonObject.computerColorCount = 0;
        var lightUpInterval = setInterval(lightUp, 500);

        function lightUp() {
            if (simonObject.computerColorCount < simonObject.currentTurn) {
                clearColours();
                setTimeout(computerFlashTimeout, 100);
            }
            else {
                clearColours();
                clearInterval(lightUpInterval);
            }
        }
        simonObject.currentTurn++;
        playerTurn();
    }

    function playerTurn() {
        clearColours();
        /*
        if (simonObject.currentTurn > 20) {
           console.log("end");
        }else{
             simonObject.currentTurn++;
             computerTurn();
        }
        */
    }
    /*user turn
    allow player to click.
    store player order and check against gameOrder
    ifcorrect check if win or start comp turn again
    */

    /*user wins or start again*/
});

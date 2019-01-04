/*create simon object*/
$(document).ready(function() {
    let simonObject = {
        playerOrder: [],
        gameOrder: [],
        currentTurn: 0,
        playerTurn: false,
    };
    let simonColours = {
        computerColorCount: 0,
        numberOfColours: 4,
        colours: [red, green, blue, yellow],
        time: 500,
        timeOut: 100
    };
    /*computer turn functions*/
    function computerFlashTimeout() {
        /*console.log(simonObject.gameOrder[simonColours.computerColorCount]);*/
        var thisFlash = simonObject.gameOrder[simonColours.computerColorCount];
        var thisColour = simonColours.colours[thisFlash - 1];
        /*console.log(thisColour);*/
        $(thisColour).addClass("light-up");
        simonColours.computerColorCount++;
    }

    function clearColours() {
        $(".simon-color").removeClass("light-up");
    }
    /*end of computer turn functions*/
    /*playerturn functions*/
    function check(){
        
    }
    /*end of playerturn functions*/
    /*startgame
    clear all of old games 
    set up new game order 
    start computer turn
    */
    $("#play").click(function() {
        clearColours();
        simonObject.gameOrder = [];
        simonObject.playerOrder = [];
        simonObject.currentTurn = 0;
        simonObject.playerTurn = false;
        for (var i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonColours.numberOfColours) + 1);
        }
        console.log(simonObject);
        computerTurn();
    });

    function computerTurn() {
        simonObject.playerTurn = false;
        simonColours.computerColorCount = 0;
        var lightUpInterval = setInterval(lightUp, simonColours.time);

        function lightUp() {
            if (simonColours.computerColorCount <= simonObject.currentTurn) {
                clearColours();
                setTimeout(computerFlashTimeout, simonColours.timeOut);
            }
            else {
                clearColours();
                clearInterval(lightUpInterval);
                playerTurn();
                simonObject.currentTurn++;
            }
        }
    }

    function playerTurn() {
        simonObject.playerTurn = true;
        /*user turnallow player to click.*/

        $(simonColours.colours).click(function() {
            if (simonObject.playerTurn) {
                console.log(simonColours.colours.indexOf(this));
                $(this).addClass('light-up');
                var playerGuess = simonColours.colours.indexOf(this);
                simonObject.playerOrder.push(playerGuess);
                console.log(simonObject.playerOrder);
                setTimeout(clearColours, simonColours.time);
            }
            check();
        });
        /*create an on click event that adds to playerorder*/

        /*create a check function that checks player order against game order */



        /*store player order and check against gameOrder
        ifcorrect check if win or start comp turn again
        */
    }


    /*user wins or start again*/
});

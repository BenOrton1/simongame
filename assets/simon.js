$(document).ready(function() {
    let simonObject = {
        playerOrder: [],
        gameOrder: [],
        currentTurn: 0,
        playerTurn: false,
    };
    let simonColours = {
        colorCount: 0,
        playerCount: 0,
        numberOfColours: 4,
        indexNumber: 0,
        colours: [red, green, blue, yellow],
        time: 500,
        timeOut: 100
    };


    function clearColours() {
        $(".simon-color").removeClass("light-up");
        $(".simon-color").removeClass("failure");
    }

    $("#play").click(function() {
        clearColours();
        simonObject.gameOrder = [];
        simonObject.currentTurn = 0;
        simonObject.playerTurn = false;
        for (var i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonColours.numberOfColours));
        }
        computerTurn();
    });

    //computer Turn
    function computerTurn() {
        simonObject.playerTurn = false;
        simonColours.colorCount = 0;

        var lightUpInterval = setInterval(computerLightUp, simonColours.time);

        function computerLightUp() {
            if (simonColours.colorCount <= simonObject.currentTurn) {
                clearColours();
                setTimeout(computerFlashTimeout, simonColours.timeOut);
            }
            else {
                clearColours();
                clearInterval(lightUpInterval);
                simonColours.playerCount = 0;
                simonObject.playerOrder = [];
                simonObject.playerTurn = true;
            }
        }
    }

    function computerFlashTimeout() {
        var thisFlash = simonObject.gameOrder[simonColours.colorCount];
        var thisColour = simonColours.colours[thisFlash];
        $(thisColour).addClass("light-up");
        simonColours.colorCount++;
    }


    //player turn
    $(simonColours.colours).click(function(PlayerClick) {
        simonColours.indexNumber = simonColours.colours.indexOf(this);
        playerTurn();
    });

    function playerTurn() {
        if (simonObject.playerTurn) {
            check();
        }
    }

    function check() {
        if (simonColours.indexNumber == simonObject.gameOrder[simonColours.playerCount]) {
            $(simonColours.colours[simonColours.indexNumber]).addClass('light-up');
            setTimeout(function() { clearColours() }, simonColours.time);
            playerTurnCounter();
        }
        else {
            $(".simon-color").addClass('failure');
            computerTurn();
            
        }
    }

    function playerTurnCounter() {
        if ((simonColours.playerCount) == simonObject.currentTurn) {
            setTimeout(function() { clearColours() }, simonColours.time);
            simonColours.colorCount = 0;
            simonObject.currentTurn++;
            computerTurn();
        }
        else {
            simonColours.playerCount++;
            
        }
    }
});

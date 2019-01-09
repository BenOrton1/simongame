$(document).ready(function() {
    let simonObject = {
        playerOrder: [],
        gameOrder: [],
        currentTurn: 0,
        playerTurn: false,
        correct: false
    };
    let simonColours = {
        colorCount: 0,
        numberOfColours: 4,
        indexNumber: 0,
        colours: [red, green, blue, yellow],
        time: 500,
        timeOut: 100
    };


    function clearColours() {
        $(".simon-color").removeClass("light-up");
    }

    $("#play").click(function() {
        clearColours();
        simonObject.gameOrder = [];
        simonObject.currentTurn = 0;
        simonObject.playerTurn = false;
        for (var i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonColours.numberOfColours));
        }
        /*hard mode. 2 colours light up at once. push gameorder i + math random*number of colours*/
        computerTurn();
    });

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
                simonColours.colorCount = 0;
                playerTurn();

            }
        }
    }

    function computerFlashTimeout() {
        /*console.log(simonObject.gameOrder[simonColours.colorCount]);*/
        var thisFlash = simonObject.gameOrder[simonColours.colorCount];
        var thisColour = simonColours.colours[thisFlash];
        $(thisColour).addClass("light-up");
        simonColours.colorCount++;
    }

    function playerTurn() {
        console.log(simonObject.currentTurn);
        simonObject.playerTurn = true;
        

        $(simonColours.colours).click(function() {
            if (simonObject.playerTurn) {
                if (simonColours.colours.indexOf(this) == simonObject.gameOrder[simonColours.colorCount]) {
                    simonColours.indexNumber = simonColours.colours.indexOf(this);
                    simonObject.correct = true;
                }
                check();
                /*
                if ((simonColours.colorCount - 1) == simonObject.currentTurn) {
                    setTimeout(function() { clearColours() }, simonColours.time);
                    simonColours.colorCount = 0;
                    simonObject.currentTurn++;
                    simonObject.playerTurn = false;
                    computerTurn();
                }
                else {
                    setTimeout(function() { clearColours() }, simonColours.time);
                }
                */
            }
        });
    }

    function check() {
        if (simonObject.correct == true) {
            $(simonColours.colours[simonColours.indexNumber]).addClass('light-up');
            setTimeout(function() { clearColours() }, simonColours.time);
            simonColours.colorCount++;
            
        }
        else {
            $(".simon-color").addClass('failure');
        }
    }
    
});

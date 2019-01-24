$(document).ready(function() {
    const simonObject = {
        gameOrder: [],
        currentTurn: 0,
        playerTurn: false,
        strict: true,
        winNumber: 20
    };
    const simonColours = {
        colorCount: 0,
        playerCount: 0,
        numberOfColours: 4,
        indexNumber: 0,
        colours: [red, green, blue, yellow],
        backgroundColors: ['#921b1b', '#245000', '#000f61', '#928300'],
        backgroundGradient: ['#2b0000', '#000000', '#3a0044', '#000000'],
        time: 500,
        timeOut: 100
    };


    function clearColours() {
        $('.simon-color').removeClass('light-up');
        $('.simon-color').removeClass('failure');
    }

    $('#play').click(function() {
        $('#play').css('position', 'relative');
        $('#play').css('padding', '15px 30px');
        $('#play').css('font-size', '15px');
        $('#play').html('Restart');
        $('#play').css('z-index', '0');
        $('.strict-button').css('z-index', '10');
        $('.button-background').css('z-index', '1');


        clearColours();
        simonObject.gameOrder = [];
        simonObject.currentTurn = 0;
        simonObject.playerTurn = false;
        for (let i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonColours.numberOfColours));
        }
    });

    function check() {
        if (simonColours.indexNumber == simonObject.gameOrder[simonColours.playerCount]) {
            $(simonColours.colours[simonColours.indexNumber]).addClass('light-up');
            const backgroundGradienteffect = 'radial-gradient(' + simonColours.backgroundColors[simonColours.indexNumber] + ',' + simonColours.backgroundGradient[simonColours.indexNumber] + ')';
            $('.button-background').css('background-image', backgroundGradienteffect);

            setTimeout(function() { clearColours() }, simonColours.time);
            playerTurnCounter();
        }
        else if (simonObject.strict) {
            $('.simon-color').addClass('failure');
            alert('failure');
            reset();
            $('#play').html('try again?');
        }
        else {
            $('.simon-color').addClass('failure');
            computerTurn();
        }
    }

    function computerFlashTimeout() {
        const thisFlash = simonObject.gameOrder[simonColours.colorCount];
        const thisColour = simonColours.colours[thisFlash];
        $(thisColour).addClass('light-up');
        simonColours.colorCount++;
    }

    function computerTurn() {

        $('.turn-counter').css('transform', 'scale(1,0)');
        setTimeout(htmlUpdate,300);
        simonObject.playerTurn = false;
        simonColours.colorCount = 0;
        const lightUpInterval = setInterval(computerLightUp, simonColours.time);

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

    function htmlUpdate() {
        $('#turn-counter').html('Turn ' + (simonObject.currentTurn + 1));
        $('.turn-counter').css('transform', 'scale(1,1)');
    }
    //player turn
    function playerTurn() {
        if (simonObject.playerTurn) {
            check();
        }
    }


    function playerTurnCounter() {
        if ((simonColours.playerCount) == simonObject.currentTurn) {
            if (simonObject.currentTurn !== simonObject.winNumber - 1) {
                setTimeout(function() { clearColours() }, simonColours.time);
                simonColours.colorCount = 0;
                simonObject.currentTurn++;
                computerTurn();
            }
            else {
                setTimeout(win, 10);
            }
        }
        else {
            simonColours.playerCount++;

        }
    }

    function reset() {
        $('.button-background').css('z-index', '1');
        $('.button-background').css('background-color', '#121c2f');
        $('#play').css('position', 'fixed');
        $('#play').css('padding', '100px 100px');
        $('#play').css('font-size', '100px');
        $('#play').css('z-index', '2');
    }

    function win() {
        alert('you win');
        reset();
        $('#play').html('Play again?');
    }

    $('#strict-on').click(function() {
        simonObject.strict = true;
        $('.strict-button').css('z-index', '-10');
        $('.button-background').css('z-index', '-1');
        computerTurn();
    });

    $('#strict-off').click(function() {
        simonObject.strict = false;
        $('.strict-button').css('z-index', '-10');
        $('.button-background').css('z-index', '-1');
        computerTurn();
    });

    $(simonColours.colours).click(function(PlayerClick) {
        simonColours.indexNumber = simonColours.colours.indexOf(this);
        playerTurn();
    });
});

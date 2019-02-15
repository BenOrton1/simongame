$(document).ready(function() {
    const simonObject = {
        gameOrder: [],
        currentTurn: 0,
        playerTurn: false,
        strict: true,
        winNumber: 20,
        rightAnswer: new Audio("assets/sounds/right.mp3"),
        wrong: new Audio("assets/sounds/wrong.mp3"),
        newTurn: new Audio("assets/sounds/nextTurn.mp3")
    };
    const simonColours = {
        colorCount: 0,
        playerCount: 0,
        numberOfColours: 4,
        indexNumber: 0,
        colours: [red, green, blue, yellow],
        backgroundColors: ['#921b1b', '#245000', '#000f61', '#928300'],
        backgroundGradient: ['#2b0000', '#000000', '#3a0044', '#000000'],
        time: 400,
        timeOut: 100
    };


    function clearColours() {
        $('.simon-color').removeClass('light-up');
        $('.simon-color').removeClass('failure');
    }

    $('#play').click(function() {
        $('#play').css('top', '90%');
        $('#play').css('padding', '45px 400px');
        $('#play').css('font-size', '30px');
        $('#play').css('opacity', '0.6');
        $('#play').html('Restart');
        $('#play').css('z-index', '0');
        $('.strict-button').css('z-index', '10');
        $('.button-background').css('z-index', '1');
        playButtonPressed();
    });


    function check() {
        if (simonColours.indexNumber == simonObject.gameOrder[simonColours.playerCount]) {
            $(simonColours.colours[simonColours.indexNumber]).addClass('light-up');
            const backgroundGradienteffect = 'radial-gradient(' + simonColours.backgroundColors[simonColours.indexNumber] + ',' + simonColours.backgroundGradient[simonColours.indexNumber] + ')';
            $('.button-background').css('background-image', backgroundGradienteffect);
            setTimeout(function() { clearColours() }, simonColours.time);
            simonObject.rightAnswer.play();
            playerTurnCounter();
        }
        else if (simonObject.strict) {
            $('.simon-color').addClass('failure');
            reset();
            simonObject.wrong.play();
            $('#play').html('<p>You Lost</p> <p>Try Again?</p>');
        }
        else {
            $('.simon-color').addClass('failure');
            simonObject.wrong.play();
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
        setTimeout(htmlUpdate, 300);
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

    function gameSetUp() {
        for (let i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonColours.numberOfColours));
        }
    }

    function htmlUpdate() {
        $('#turn-counter').html('Turn ' + (simonObject.currentTurn + 1));
        $('.turn-counter').css('transform', 'scale(1,1)');
    }

    function playButtonPressed() {
        clearColours();
        simonObject.gameOrder = [];
        simonObject.currentTurn = 0;
        simonObject.playerTurn = false;
        gameSetUp();
    }

    function playerTurn() {
        if (simonObject.playerTurn) {
            clearColours();
            check();
        }
    }

    function playerTurnCounter() {
        if ((simonColours.playerCount) == simonObject.currentTurn) {
            if (simonObject.currentTurn !== simonObject.winNumber - 1) {
                setTimeout(function() { clearColours() }, simonColours.time);
                simonColours.colorCount = 0;
                simonObject.currentTurn++;
                simonObject.newTurn.play();
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
        $('#play').css('top', '50%');
        $('#play').css('padding', '100px 100px');
        $('#play').css('font-size', '100px');
        $('#play').css('z-index', '2');
        $('#play').css('opacity', '1');
        $('#play').removeAttr('background-image');
    }

    function win() {
        reset();
        $('#play').html('<p>You Win</p> <p>Play again?</p>');
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

    $(simonColours.colours).click(function() {
        simonColours.indexNumber = simonColours.colours.indexOf(this);
        playerTurn();
    });
});

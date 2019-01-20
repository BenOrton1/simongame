$(document).ready(function() {
    let simonObject = {
        gameOrder: [],
        currentTurn: 0,
        playerTurn: false,
        strict: true,
        winNumber:20
    };
    let simonColours = {
        colorCount: 0,
        playerCount: 0,
        numberOfColours: 4,
        indexNumber: 0,
        colours: [red, green, blue, yellow],
        backgroundColors : ['#481616', '#0e3300', '#1a0065', '#2a2b00'],
        time: 500,
        timeOut: 100
    };


    function clearColours() {
        $(".simon-color").removeClass("light-up");
        $(".simon-color").removeClass("failure");
    }

    $("#play").click(function() {
        $('#play').css('position', 'relative');
        $('#play').css('padding', '15px 30px');
        $('#play').css('font-size', '15px');
        $('#play').html('Restart');
        $('#play').css('z-index', '0');
        $('.strict-button').css('z-index', '10');
        $('.button-background').css("z-index", "1");
        
        
        clearColours();
        simonObject.gameOrder = [];
        simonObject.currentTurn = 0;
        simonObject.playerTurn = false;
        for (var i = 0; i < 20; i++) {
            simonObject.gameOrder.push(Math.floor(Math.random() * simonColours.numberOfColours));
        }
    });
  $('#strict-on').click(function() {
     simonObject.strict=true;
     $('.strict-button').css('z-index', '-10');
     $('.button-background').css("z-index", "-1");
     computerTurn();
  });
  
   $('#strict-off').click(function() {
     simonObject.strict=false;
     $('.strict-button').css('z-index', '-10');
     $('.button-background').css("z-index", "-1");
     computerTurn();
  });
    //computer Turn
    function computerTurn() {
        $("#turn-counter").html("Turn " + (simonObject.currentTurn + 1));
        $( ".turn-counter" ).css("transform", "scale(0,1)" );
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
            $('.button-background').css("background-color", simonColours.backgroundColors[simonColours.indexNumber]);
            setTimeout(function() { clearColours() }, simonColours.time);
            playerTurnCounter();
        }
        else if (simonObject.strict) {
            $(".simon-color").addClass('failure');
            alert("failure");
            reset();
            $('#play').html('try again?');
        }
        else {
            $(".simon-color").addClass('failure');
            computerTurn();
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

    function win() {
        alert("you win");
        reset();
        $('#play').html('Play again?');
    }

    function reset() {
        $('.button-background').css("z-index", "1");
        $('.button-background').css("background-color", "#121c2f");
        $('#play').css('position', 'fixed');
        $('#play').css('padding', '100px 100px');
        $('#play').css('font-size', '100px');
        $('#play').css("z-index", "2");
    }
});

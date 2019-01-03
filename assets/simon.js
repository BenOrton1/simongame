/*create simon object*/
$(document).ready(function() {
    let simonObject = {
        gameOrder: [2, 5, 5],
        playerOrder: [7, 5, 6],
        playerTurn: false,
        numberOfColours: 4
    };
    function clearColours(){
        /*remove any lights on colours*/
    }

    /*startgame
    clear all of old games 
    set up new game order 
    start computer turn
    */
    $("#play").click(function() {
        clearColours();
        simonObject.gameOrder = [];
        simonObject.playerOrder=[];
        playerTurn=false;
        /*add random order*/
        for (var i=0; i<20; i++){
            simonObject.gameOrder.push(1);
        }
        console.log(simonObject);
    });


    /*computer turn
    stop player clicking
    clear player order
    flash correct amount of colours from gameOrder 
    start player turn
    */

    /*user turn
    allow player to click.
    store player order and check against gameOrder
    ifcorrect check if win or start comp turn again
    */

    /*user wins or start again*/
});

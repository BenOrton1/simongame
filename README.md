Interactive Frontend project
============

Interactive Frontend Memory Game
------------

This is a Project to create a simple memory game using javascript, jquery for the logic
of the game.

The game is the same as the popular game "Simon" where four colours flash and in a random
pattern and the user has to click on the colours in the same order. 

UX
----

I wanted to keep the UX very simple and not create any unnecessary distractions from the 
focus of this project. 

I wanted to provide visual feedback to show when the user has clicked on a colour that would
make it clear that the click had been registered and weather the click was correct or incorrect.
i did this by flashing red for a wrong answer and white for a correct one. in addition 
to this i added sounds to further indicate that the click has been registered and 
weather on not it is correct. 

i wanted to make it easy for the user to restart the game. I put a large restart 
button at the bottom of the screen also when the user wins the game or guesses wrong 
in strict mode a ;arge button pops up inviting the user to replay the game removing
any chance for confusion. 


Features
-----

A strict mode was added that adds chalenge to the game.

The Background colour changes to the colour clicked while playing the game. 

The turn counter appers to rotate to keep the player updated with the current turn.

Sounds inform the player when they have made a correct or incorrect click and when a 
new turn has started

[Jquery](https://jquery.com/)

The project uses JQuery to simplify DOM manipulation.



[bootstrap](https://getbootstrap.com/)

Bootstrap 4 was used to make the site reactive and reduce the amount of css needed. 

CSS3 and HTMl5 were used for markup and styling the site.





Testing
------

console.log used to test the simonObject.gameOrder to make sure it generates 20 random 
numbers between 1 and 4

reduced simonObject.winNumber to 3 and made sure the win condition of the game triggered 
correctly and added a console.log(simonObject.currentTurn) to check that is increasing as 
expected. 

added a console.log(simonColours.indexNumber) to check function to make sure it is registering 
the correct clicks in the player turn and clicked on colours in the computer turn to make sure it wasn't 
registered.

clicked the correct and incorrect answers to make sure they are registered correctly.

turned on strict mode and clicked the incorrect answer to make sure the game ends

turned off strict mode and clicked incorrect answers to make sure game continues. 

clicked the play button to make sure the game starts correctly.

clicked the reset button to make sure the game resets and generates a new simonObject.gameOrder

code passed though a [linter jshint] (https://jshint.com/)

Deployment
----------

This App was deployed to Github pages.

It can be run [here](https://benorton1.github.io/simongame/) or download the repo [here](https://github.com/BenOrton1/simongame)
and open index.html to view in browser.


Credits
-------------

sound effects from [orange free sounds](http://www.orangefreesounds.com/cartoon-failure-trumpet/)

[jshint] used to check for errors in the code(https://jshint.com/)
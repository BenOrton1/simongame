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
i did this by flashing red for a wrong answer and white for a correct one. 


Features
-----

rotating turn counter

success and failure sounds 

background colout change on click





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

Deployment
----------

This App was deployed to Github pages.

It can be run [here](https://benorton1.github.io/simongame/) or download the repo [here](https://github.com/BenOrton1/simongame)
and open index.html to view in browser.


Credits
-------------

sound effects from [orange free sounds](http://www.orangefreesounds.com/cartoon-failure-trumpet/)

Interactive Frontend project
============

Interactive Frontend Memory Game
------------

This is a Project to create a simple memory game using javascript, jquery for the logic
of the game.

The game is the same as the populat game "Simon" where four colours flash and in a random
pattern and the user has to click on the colours in the same order. 

UX
----

I wanted to keep the UX very simple and not create any unnessisary distractions from the 
focus of this project. 

I wanted to provide visual feedback to show when the user has clicked on a colour that would
make it clear that the clisk had been registered and weather the click was correct or incorecct.
i did this by fashing red for a wrong answer and white for a correct one. 


Features
-----



In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
Another feature idea
Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

JQuery
The project uses JQuery to simplify DOM manipulation.



Testing
------

console.log used to test the simonObject.gameOrder to make sure it generates 20 random 
numbers between 1 and 4

reduced simonObject.winNumber to 3 and made sure the win condition of the game triggered 
correctly and added a console.log(simonObject.currentTurn) to check that is icreasing as 
expected. 

added a console.log(simonColours.indexNumber) to check function to make sure it is registering 
the correct clicks in the player turn and clicked on colours in the computer turn to make sure it wasnt 
registered.

clicked the correct and incorecct answers to make sure they are registerd correctly.

turned on stricked mode and clicked the incorecct answer to make sure the game ends

turned off strict mode and clicked incorecct answers to make sure game continues. 

clicked the play button to m ake sure the game starts correctly.

clicked the reset button to make sure the game resets and generates a new simonObject.gameOrder

Deployment
----------

This App was deployed to Github pages
To run this app locally clone or download the repo and open index.html to view in browser.


Credits
-------------
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X
Interactive Frontend project

project to make the "simon game" using javascript.

play button. tested by adding random numbers in to simonObject arrays pressing 
play and console loggind output to make sure they are the correct values for a new game


Interactive Frontend Memory Game

This is a Project to create a simple memory game using javascript, jquery for the logic
of the game.

The game is the same as the populat game "Simon" where four colours flash and in a random
pattern and the user has to click on the colours in the same order. 

UX

I wanted to keep the UX very simple and not create any unnessisary distractions from the 
focus of this project. 

I wanted to provide visual feedback to show when the user has clicked on a colour that would
make it clear that the clisk had been registered and weather the click was correct or incorecct.
i did this by fashing red for a wrong answer and white for a correct one. 




**Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

**In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

As a user type, I want to perform an action, so that I can achieve a goal.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.





Features
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

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears
Try to submit the form with an invalid email address and verify that a relevant error message appears
Try to submit the form with all inputs valid and verify that a success message appears.
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

Deployment

This App was deployed to Github pages
To run this app locally clone or download the repo and open index.html to view in browser.


Credits
Content
The text for section Y was copied from the Wikipedia article Z
Media
The photos used in this site were obtained from ...
Acknowledgements
I received inspiration for this project from X
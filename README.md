# quizApp
quiz app based on "how to learn js properly" online study guide  
<http://javascriptissexy.com/how-to-learn-javascript-properly>

to run:

npm install -g serve  
serve

###specs
- uses radio button choices
- last page will only show the score
- use an array to store all the questions, each question, along with its choices and correct answer, should be stored in an object. 
- dynamically add the next question and remove the current question from the screen, when the user clicks the “Next” button.
- client-side data validation: make sure the user answers each question before proceeding to the next question.
- store the quiz questions in an external JSON file.
- add a “Back” button to allow the user to go back and change answer
- show the radio button selected for question.
- add Handlebars.js templating to the quiz
- use localStorage to save user's name and show them a welcome message upon returning to the quiz
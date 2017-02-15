# quizApp
quiz app based on "how to learn js properly" online study guide  
<http://javascriptissexy.com/how-to-learn-javascript-properly>

to run:

npm install -g serve  
serve

###specs so far
- uses radio button choices
- last page will only show the score
- use an array to store all the questions, each question, along with its choices and correct answer, should be stored in an object. 
- dynamically add the next question and remove the current question from the screen, when the user clicks the “Next” button.
- client-side data validation: make sure the user answers each question before proceeding to the next question.
- store the quiz questions in an external JSON file.
- add a “Back” button to allow the user to go back and change answer
- show the radio button selected for question.
- add Handlebars.js templating to the quiz

###specs to add  
- Add user authentication: allow users log in, and save their login credentials to local storage (HTML5 browser storage).
- Use cookies to remember the user, and show a “Welcome, First Name” message when the user returns to the quiz.
- Keep a record of all the users who take the quiz and show each user how her score ranks amongst the scores from other quiz takers.
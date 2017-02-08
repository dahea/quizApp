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

###specs to add

set 1:
- Add a “Back” button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions that the user has answered already, be sure to show the radio button selected, so that the user is not forced to answer the questions again, which she has completed.
- Add user authentication: allow users log in, and save their login credentials to local storage (HTML5 browser storage).
- Use cookies to remember the user, and show a “Welcome, First Name” message when the user returns to the quiz.

set 2:
- Learn Handlebars.js and add Handlebars.js templating to the quiz. You should no longer have any HTML in your JavaScript code. Your quiz is getting more advanced bit by bit.
- Keep a record of all the users who take the quiz and show each user how her score ranks amongst the scores from other quiz takers.
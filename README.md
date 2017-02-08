# quizApp
quiz app based on "how to learn js properly" online study guide

to run:

npm install -g serve  
serve

###specs to add

set 1:
- Add client-side data validation: make sure the user answers each question before proceeding to the next question.
- Add a “Back” button to allow the user to go back and change her answer. The user can go back up to the first question. For the questions that the user has answered already, be sure to show the radio button selected, so that the user is not forced to answer the questions again, which she has completed.
- Store the quiz questions in an external JSON file.
- Add user authentication: allow users log in, and save their login credentials to local storage (HTML5 browser storage).
- Use cookies to remember the user, and show a “Welcome, First Name” message when the user returns to the quiz.

set 2:
- Learn Handlebars.js and add Handlebars.js templating to the quiz. You should no longer have any HTML in your JavaScript code. Your quiz is getting more advanced bit by bit.
- Keep a record of all the users who take the quiz and show each user how her score ranks amongst the scores from other quiz takers.
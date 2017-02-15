window.onload=function(){
  var allQuestions;
  var questionCounter;
  var choicesWrapper;
  var currentQuestion = 0;
  var isFirstQuestion = true;
  var nextButton = document.getElementById('next');
  var prevButton = document.getElementById('prev');
  var msgWrapper = document.getElementById('msg');

// related to getting the Q's from json
  var request = new XMLHttpRequest();
  request.open('GET', 'js/questions.json', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      allQuestions = JSON.parse(request.responseText);
      questionCounter = allQuestions.length;
      displayQuestion(currentQuestion);

    } else {}
  };

  request.onerror = function() {};
  request.send();

// related to handlebars
  var source = document.getElementById('question-template').innerHTML;
  var template = Handlebars.compile(source);
  
// functions for the rest of the app

  function clearNode(node){
  	while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
  	}
  }

  function displayQuestion(questionNum){
    if (0 <= questionNum < allQuestions.length) {
      clearNode(msgWrapper);
      clearNode(document.getElementById('question-wrapper'));
      var question = allQuestions[questionNum];
      var html    = template(question);

      var newContentNode = document.createElement('div');
      newContentNode.innerHTML = html;
      document.getElementById('question-wrapper').appendChild(newContentNode);

      choicesWrapper = document.getElementById('choices');
      
      displayUserAnswer(questionNum);
    }
  }

  function storeUserAnswer(questionNum){
    allQuestions[questionNum].userAnswer = Number(choicesWrapper.querySelector('input[name="answer"]:checked').value);
  }

  function displayUserAnswer(questionNum){
    if (allQuestions[questionNum].userAnswer != null){
      choicesWrapper.getElementsByTagName('input').item(allQuestions[questionNum].userAnswer).setAttribute('checked','checked');
    }
  }

  function displayScore(){
  	clearNode(msgWrapper);
    clearNode(document.getElementById('question-wrapper'));
    var userScore = 0;
    allQuestions.forEach(function(question){
      if (question.userAnswer === question.correctAnswer){
        userScore++;
      }
    });

    var scoreSource = document.getElementById('score-template').innerHTML;
    var scoreTemplate = Handlebars.compile(scoreSource);
    var scoreVar = {score: userScore};
    var scoreOutput = scoreTemplate(scoreVar);

    msgWrapper.innerHTML = scoreOutput;  

  }

  nextButton.onclick = function(){
    if(choicesWrapper.querySelector('input[name="answer"]:checked')){
      isFirstQuestion = false;
      storeUserAnswer(currentQuestion);
      if(currentQuestion < (questionCounter-1)){
        currentQuestion++;
        displayQuestion(currentQuestion);
      } else {
        displayScore();
      }
    } else {
      msgWrapper.innerHTML = "Please choose an option";
    }
  };

  prevButton.onclick = function(){
    if (!isFirstQuestion){
      currentQuestion--;
      displayQuestion(currentQuestion);
      if (currentQuestion <= 0){
        currentQuestion = 0;
        isFirstQuestion = true;
      }
    }
  };

  displayQuestion;
}



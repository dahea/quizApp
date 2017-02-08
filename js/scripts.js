var allQuestions;
var request = new XMLHttpRequest();
request.open('GET', 'js/questions.json', true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    allQuestions = JSON.parse(request.responseText);
  } else {}
};

request.onerror = function() {};
request.send();

window.onload=function(){
  
  var questionCounter = allQuestions.length;
  var correctAnswerCounter = 0;
  var currentQuestion = 0;
  var isFirstQuestion = true;
  var isLastQuestion = false;
  var nextButton = document.getElementById('next');
  var prevButton = document.getElementById('prev');
  var choicesWrapper = document.getElementById('choices');
  var questionWrapper = document.getElementById('question');
  var msgWrapper = document.getElementById('msg');

  function clearNode(node){
  	while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
  	}
  }

  function displayQuestion(questionNum){
    if (0 <= questionNum < allQuestions.length) {
      questionWrapper.innerHTML = allQuestions[questionNum].question;  
      clearNode(choicesWrapper);

      for(var i=0; i < allQuestions[questionNum].choices.length; i++){
        var inputnode = document.createElement("input");
        inputnode.setAttribute("type","radio");
        inputnode.setAttribute("name","answer");
        inputnode.setAttribute("value",i);
        var brnode = document.createElement("br");
        var textnode = document.createTextNode(allQuestions[questionNum].choices[i].toString());
        choicesWrapper.appendChild(inputnode);
        choicesWrapper.appendChild(textnode);
        choicesWrapper.appendChild(brnode);
      }  
    }
  }

  function checkAnswer(questionNum){
    var correctAnswerValue = Number(allQuestions[questionNum].correctAnswer);
    var selectedAnswerValue = Number(choicesWrapper.querySelector('input[name="answer"]:checked').value);
    if(correctAnswerValue === selectedAnswerValue){
     correctAnswerCounter++;
    }
  }

  function displayScore(score){
  	clearNode(choicesWrapper);
    clearNode(questionWrapper);
    msgWrapper.innerHTML = "Your score: "+score;    
  }

  nextButton.onclick = function(){
    if(choicesWrapper.querySelector('input[name="answer"]:checked')){
      isFirstQuestion = false;
      clearNode(msgWrapper);
      checkAnswer(currentQuestion);
      if(currentQuestion < (questionCounter-1)){
        currentQuestion++;
        displayQuestion(currentQuestion);
      } else {
        isLastQuestion = true;
        displayScore(correctAnswerCounter);
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

  displayQuestion(currentQuestion);

}
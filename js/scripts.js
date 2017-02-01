window.onload=function(){
// Only one question is in this array, but you will add all the questions
var allQuestions = [
	{question: "Who is Prime Minister of the United Kingdom?",
  choices: ["David Cameron1", "Gordon Brown", "Winston Churchill", "Tony Blair"],
  correctAnswer:0},
  {question: "Who are you?",
  choices: ["David Cameron2", "Gordon Brown", "Winston Churchill", "Tony Blair"],
  correctAnswer:1},
  {question: "Who am I?",
  choices: ["David Cameron3", "Gordon Brown", "Winston Churchill", "Tony Blair"],
  correctAnswer:2},
];

var questionCounter = allQuestions.length;
var correctAnswerCounter = 0;
var currentQuestion = 0;
var isLastQuestion = false;
var nextButton = document.getElementById('next');
var choicesWrapper = document.getElementById('choices');
var questionWrapper = document.getElementById('question');

function clearNode(node){
	while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
	}
}

function displayQuestion(questionNum){
  questionWrapper.innerHTML = allQuestions[questionNum].question;   
  clearNode(choicesWrapper);

for(var i=0; i < allQuestions[questionNum].choices.length; i++) {
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
  questionWrapper.innerHTML = "Your score: "+score;    
}

nextButton.onclick = function(){
  checkAnswer(currentQuestion);
  if(currentQuestion < (questionCounter-1)){
    currentQuestion++;
    displayQuestion(currentQuestion);
  } else {
    isLastQuestion = true;
    displayScore(correctAnswerCounter);
  }
};

displayQuestion(currentQuestion);




}
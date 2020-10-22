/* Create a start button for the quiz
   Create a timer for the quiz
   Create an array of questions
   Create a for loop for the array
   Create a function that reduces time for incorrect answers
   Create a high scores page for the end
   Make a storage log for the initials and high score
*/
var questionText = document.getElementById("questionText");
var choices = document.querySelector('.choices');
var timeEl = document.querySelector('.time');
var currentQuestionIndex = 0;


setTime();
//List of questions for the quiz

const questions = [{
   title: "Supermans only weakness is?",
   choices: ["Kryptonite","Dogs","Icecream","Milk"],
   answer: "Kryptonite" 
},
{
   title: "What is not javascript?",
   choices: ["Javascript","Javascript","Javascript","Javascraps"],
   answer: "Javascraps"
},
{
   title: "What does the append function do in javascript?",
   choices: ["removes valuse","adds values","subtracts values","multipys values"],
   answer: "adds values"
},
{
   title: "What year was Barack obama elected president?",
   choices: ["2004","2006","2008","2010"],
   answer: "2008"
},
{
   title: "When did the Cubs finally win the world series?",
   choices: ["2014","2008","2018","2016"],
   answer: "2016"
}];



function generatedChoicesList() {
   function addChoice(choice) {
      var lChoices = document.createElement('li');
      var choiceText = choice;
      var button = document.createElement("button");
      button.textContent = choiceText;
      button.className = "choice-button";
      console.log("adding choie " + choiceText);

      button.addEventListener("click", function() {
        attemptAnswer(button.textContent);
      }, true);

      lChoices.appendChild(button);
      qList.appendChild(lChoices);
   }

   var qList = document.createElement('ul');
   qList.style = "list-style: none; spacing: 10px;";

   var currentQuestion = questions[currentQuestionIndex];

   currentQuestion.choices.forEach(addChoice);

   // Finally, return the constructed list:
   return qList;
}


function moveOn() {
   currentQuestionIndex++;
   refreshScreen();
}

var secondsLeft = 60;

function setTime() {
   var timerInterval = setInterval(function() {
     secondsLeft--;
     timeEl.textContent = "Timer" + " " + secondsLeft;
 
     if(secondsLeft === 0) {
       clearInterval(timerInterval);
     }
 
   }, 1000);
 }



function attemptAnswer(answerString) {
   var currentQuestion = questions[currentQuestionIndex];
   var answerTag = document.querySelector('.wrong-right');
   
   if (currentQuestion.answer === answerString) {
      answerTag.textContent = "Correct";
   } else {
      answerTag.textContent = "Wrong";
   }

   moveOn();
}

function refreshScreen() {
   if (currentQuestionIndex <= questions.length - 1) {
      questionText.textContent = questions[currentQuestionIndex].title;
   
   if (choices.children.length > 0) {
      choices.removeChild(choices.children[0]);
      }
   
      choices.appendChild(generatedChoicesList());
   } else {
      console.log("NO MORE");
   }
   
   
   
}

refreshScreen();

















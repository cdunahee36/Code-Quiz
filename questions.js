/* Create a start button for the quiz
   Create a timer for the quiz
   Create an array of questions
   Create a for loop for the array
   Create a function that reduces time for incorrect answers
   Create a high scores page for the end
   Make a storage log for the initials and high score
*/

//These set all the variables for the questions to display

var questionText = document.getElementById("questionText");
var choices = document.querySelector('.choices');
var timeEl = document.querySelector('.time');
var currentQuestionIndex = 0;
var score = 0;
var highscore = 0;

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
   choices: ["removes values","adds values","subtracts values","multipys values"],
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

//This function creates a list and puts the array questions into it

function generatedChoicesList() {
   function addChoice(choice) {
      var lChoices = document.createElement('li');
      var choiceText = choice;
      var button = document.createElement("button");

      button.textContent = choiceText;
      button.className = "choice-button";

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

   // Returns reconstructed list
   
   return qList;
}

//This function allows the buttons to continue through the quiz

function moveOn() {
   currentQuestionIndex++;
   refreshScreen();
}

//Sets time in seconds for the timer

var secondsLeft = 60;

//Timer for the quiz

function setTime() {
   var timerInterval = setInterval(function() {
     secondsLeft--;
     timeEl.textContent = "Timer" + " " + secondsLeft;
 
     if(secondsLeft === 0) {
       clearInterval(timerInterval);
       highRedirect()
     }
 
   }, 1000);
 }

//This function redirects you to the score page

 function highRedirect() {
   window.location.href = "highscores.html";
 }

//This function allows the quiz to tell the user whether they are right or wrong

function attemptAnswer(answerString) {
   var currentQuestion = questions[currentQuestionIndex];
   var answerTag = document.querySelector('.wrong-right');
   
   if (currentQuestion.answer === answerString) {
      answerTag.textContent = "Correct!";
      
   } else {
      answerTag.textContent = "Wrong!";
      secondsLeft.textContent = secondsLeft -= 10;
   }

   moveOn();
}

//This function removes the current index from display and puts new one and also pushes the user to the highscore screen

function refreshScreen() {

   if (currentQuestionIndex <= questions.length - 1) {
      questionText.textContent = questions[currentQuestionIndex].title;
   
   if (choices.children.length > 0) {
      choices.removeChild(choices.children[0]);
      }
   
      choices.appendChild(generatedChoicesList());
   } else {
      window.location.href = "highscores.html";
   }
   
}

refreshScreen();

















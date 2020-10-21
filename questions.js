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
var currentQuestionIndex = 0;


//List of questions for the quiz

const questions = [{
   title: "Supermans only weakness is:",
   choices: ["Kryptonite","Dogs","Icecream","Milk"],
   answer: "Kryptonite" 
},
{
   title: "What is not javascript:",
   choices: ["Javascript","Javascript","Javascript","Javascraps"],
   answer: "Javascraps"
},
{
   title: "What does the append function do in javascript:",
   choices: ["removes valuse","adds values","subtracts values","multipys values"],
   answer: "adds values"
},
{
   title: "What year was Barack obama elected president:",
   choices: ["2004","2006","2008","2010"],
   answer: "2008"
},
{
   title: "When did the Cubs finally win the world series:",
   choices: ["2014","2008","2018","2016"],
   answer: "2016"
}];




function generatedChoicesList() {
   console.log("Testing");
   var qList = document.createElement('ul');
   var currentQuestion = questions[currentQuestionIndex];
   console.log("testing");

   for (var i = 0; i < currentQuestion.choices.length; i++) {
       
       var lChoices = document.createElement('li');
       var choiceText = currentQuestion.choices[i];
       var button = document.createElement("button");
       button.textContent = currentQuestion.choices[i];
       console.log("adding choie " + choiceText);
       button.addEventListener("click", function() {
         console.log(button.textContent);
         moveOn();
         attemptAnswer(button.textContent);
       }, false);
       lChoices.appendChild(button);
       qList.appendChild(lChoices);
   }

   // Finally, return the constructed list:
   return qList;
}


function moveOn() {
   currentQuestionIndex++;
   refreshScreen();
}



function attemptAnswer(answerString) {
   console.log("Selected " + answerString);

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

















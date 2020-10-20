/* Create a start button for the quiz
   Create a timer for the quiz
   Create an array of questions
   Create a for loop for the array
   Create a function that reduces time for incorrect answers
   Create a high scores page for the end
   Make a storage log for the initials and high score
*/


var start = document.querySelector('.Start');
var Quiz = document.querySelector('.questions');






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

//Creating event listener for the start button to begin the quiz

start.addEventListener('click', startQuiz)

function startQuiz() {
   const output = [];

   questions.forEach(
      (currentQuestion, questionNumber) => {
         const answer = [];

   output.push(
      currentQuestion.title,
      choices.join('')
   );

 }
   );

   Quiz.innerHTML = output.join('');
}





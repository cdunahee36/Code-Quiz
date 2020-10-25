
//Displays final score

var lastStoredScore = localStorage.getItem("final-score");

var lastScore = document.querySelector(".score");

lastScore.append(lastStoredScore);




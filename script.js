//Creating variables for the elements on the screen
let intro = document.getElementById("intro");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");

//Creating variables for each of the option buttons
let start = document.getElementById("start");

let humanities = document.getElementById("question1option1");
let stem = document.getElementById("question1option2");

let laidback = document.getElementById("question2option1");
let organized = document.getElementById("question2option2");

let easy = document.getElementById("question3option1");
let challenge = document.getElementById("question3option2");

//Creating variables to hold the answers to each question:
let question1;
let question2;
let question3;

//On clicking the buttons, the page will go to the next question and store the past answer

//Intro page:
start.onclick = function() {
    intro.style.display = "none"
    q1.style.display = "flex"
};

//Question 1:
humanities.onclick = function() {
    question1 = "humanities"
    q1.style.display = "none"
    q2.style.display = "flex"
};

stem.onclick = function() {
    question1 = "stem"
    q1.style.display = "none"
    q2.style.display = "flex"
};

//Question 2:
laidback.onclick = function() {
    question2 = "laidback"
    q2.style.display = "none"
    q3.style.display = "flex"
};

organized.onclick = function() {
    question2 = "organized"
    q2.style.display = "none"
    q3.style.display = "flex"
};

//Question 3:
easy.onclick = function() {
    question3 = "easy"
    q3.style.display = "none"
    //link to results page
};

challenge.onclick = function() {
    question3 = "easy"
    q3.style.display = "none"
    //link to results page
};
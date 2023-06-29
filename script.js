//Creating variables for the elements on the question screens
let title = document.getElementById("title");
let intro = document.getElementById("intro");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let footer = document.getElementById("footer");

//Creating variables for the results screens
let resultsSection = document.getElementById("resultsSection");
let resultText = document.getElementById("resultText");
let resultImage = document.getElementById("resultImage");
let explanation = document.getElementById("explanation");

//Creating variables for each of the option buttons
let start = document.getElementById("start");
let replay = document.getElementById("replayButton");

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
    //Hide intro page, show question 1
    intro.style.display = "none"
    q1.style.display = "flex"
    footer.style.display = "block"
};

//Question 1:
humanities.onclick = function() {
    //Store input, hide question 1, show question 2
    question1 = "humanities"
    q1.style.display = "none"
    q2.style.display = "flex"
};

stem.onclick = function() {
     //Store input, hide question 1, show question 2
    question1 = "stem"
    q1.style.display = "none"
    q2.style.display = "flex"
};


//Question 2:
laidback.onclick = function() {
     //Store input, hide question 1, show question 3
    question2 = "laidback"
    q2.style.display = "none"
    q3.style.display = "flex"
};

organized.onclick = function() {
     //Store input, hide question 2, show question 3
    question2 = "organized"
    q2.style.display = "none"
    q3.style.display = "flex"
};


//Question 3:
easy.onclick = function() {
     //Store input, hide question 3, calculate results, and show results page
    question3 = "easy"
    q3.style.display = "none"
    //Show results screen
    resultsSection.style.display = "block"
    footer.style.display = "block"
    getResults(question1, question2, question3)
};

challenge.onclick = function() {
    //Store input, hide question 3, calculate results, and show results page
    question3 = "challenge"
    q3.style.display = "none"
    //Shows results screen
    resultsSection.style.display = "block"
    footer.style.display = "block"
    getResults(question1, question2, question3)
};

//Play again button:
replay.onclick = function() {
    //Hide results section and show start screen
    resultsSection.style.display = "none"
    intro.style.display = "flex"
};

//Uses nested conditionals to determine the user's result based on their answers
//Sets the result name, description, and image on the screen
function getResults(q1Answer, q2Answer, q3Answer) {
    if (q1Answer === "humanities") {
        if (q2Answer === "laidback") {
            if (q3Answer === "easy") {
                //HTML result
                resultsSection.style.display = "block"
                resultText.innerHTML = "HTML!"
                resultImage.src = "Photos/htmlPic.png"
                resultImage.style.width = "400px"
                explanation.innerHTML = "This markup language is used to build webpages from the ground up. It's very beginner friendly because it uses simple elements and properties to set text, images, and more on the screen! Just like HTML, you like to use your creativity to make beautiful things, and you think outside of the box."
            }
            else if (q3Answer === "challenge") {
                //CSS result
                resultsSection.style.display = "block"
                resultText.innerHTML = "CSS!"
                resultImage.src = "Photos/cssPic.png"
                explanation.innerHTML = "This styling language is used to add colors, layouts, fonts, and animations to webpages. Although the syntax is very simple, it can be very difficult to master combining the correct properties to make a website visually pleasing. But, just like CSS, you're a creative and you like to take on the challenge!"
            }
        }
        else if (q2Answer === "organized") {
            if (q3Answer === "easy") {
                //JavaScript result
                resultsSection.style.display = "block"
                resultText.innerHTML = "JavaScript!"
                resultImage.src = "Photos/javascriptPic.png"
                explanation.innerHTML = "JS is a popular programming language that's very beginner friendly due to its easy-to-understand syntax. It's also very versatile! It can be used to create apps and games, but it's also used in the more creative field of web development. Just like JavaScript, you are very well-rounded between the creative and technical worlds."
            }
            else if (q3Answer === "challenge") {
                //C# result
                resultsSection.style.display = "block"
                resultText.innerHTML = "C#!"
                resultImage.src = "Photos/cSharpPic.png"
                resultImage.style.height = "250px"
                explanation.innerHTML = "C# (aka C Sharp) is used mostly for game development, a field that requires a lot of imagination and creativity. However, that doesn't mean it's easy. Although the language is a bit more difficult to learn, it can be used for all types of software and is a useful skill to have in the industry. Just like C#, you are a technical person with a creative side!"
            }
        }
    }
    else if (q1Answer === "stem") {
        if (q2Answer === "laidback") {
            if (q3Answer === "easy") {
                //Python result
                resultsSection.style.display = "block"
                resultText.innerHTML = "Python!"
                resultImage.src = "Photos/pythonPic.webp"
                explanation.innerHTML = "As one of the most popular programming languages as of late, Python is very useful in the tech world today. The language has forgiving syntax that is easy for any beginner to pick up while it's also utilized by industry professionals! It's very versatile and is used to create many types of software. Like Python, you are probably an easy-going and well-liked person!"
            }
            else if (q3Answer === "challenge") {
                //SQL Result
                resultsSection.style.display = "block"
                resultText.innerHTML = "SQL!"
                resultImage.src = "Photos/sqlPic.png"
                resultImage.style.height = "200px"
                explanation.innerHTML = "SQL (also pronounced as 'sequel') bridges the gap between data and computer sciences. This language is used to create and manipulate databases for software and it's fairly easy to learn and use syntax-wise. You are probably a very technical and intelligent person that knows how to have fun."
            }
        }
        else if (q2Answer === "organized") {
            if (q3Answer === "easy") {
                //Java result
                resultsSection.style.display = "block"
                resultText.innerHTML = "Java!"
                resultImage.src = "Photos/javaPic.jpg"
                explanation.innerHTML = "The language Java is a simple language for experts, but a difficult language for beginners. Its syntactic rules can be unforgiving at times, but when all goes well, you can create a masterpiece. Java can be used to create all types of algorithms and uses objects and classes. Like Java, you might be a more strict and uptight kind of person. Loosen up a bit, man!"
            }
            else if (q3Answer === "challenge") {
                //Assembly result
                resultsSection.style.display = "block"
                resultText.innerHTML = "Assembly!"
                resultImage.src = "Photos/assemblyPic.png"
                explanation.innerHTML = "Created in the 1940s, Assembly is notorious for being a very difficult programming language. It's used to communicate directly with hardware systems and can only accomplish simple tasks. However, many colleges teach their CS students Assembly because it helps with problem-solving and understanding processors. You're either a very intense person, or you're very traditional and old (like Assembly)."
            }
        }
    }
};
// array to hold each question, their answers, their correct answers, and an image to display for each
var trivia = [
    {
        question: "What is the name of Orianna's ultimate ability?",
        answers: [
            "Command: Dissonance",
            "Command: Protect",
            "Command: Shockwave",
            "Command: Attack"
        ],
        correctAnswer: "Command: Shockwave",
        image: "<img src=\"assets/images/Orianna.gif\" alt=\"Orianna Shockwave\">"
    },
    {
        question: "Which champion has an ability called Tidal Wave?",
        answers: [
            "Varus",
            "Corki",
            "Nami",
            "Lux"
        ],
        correctAnswer: "Nami",
        image: "<img src=\"assets/images/Nami.gif\" alt=\"Nami Tidal Wave\">"
    },
    {
        question: "Which of the following champions has most recently been introduced to the game?",
        answers: [
            "Kled",
            "Camille",
            "Taliyah",
            "Ivern"
        ],
        correctAnswer: "Camille",
        image: "<img src=\"assets/images/Camille.jpg\" alt=\"Camille\">"
    },
    {
        question: "Which of the following items grants the most ability power?",
        answers: [
            "Rylai's Crystal Scepter",
            "Liandry's Torment",
            "Luden's Echo",
            "Morellonomicon"
        ],
        correctAnswer: "Luden's Echo",
        image: "<img src=\"assets/images/Luden.png\" alt=\"Luden's Echo\">"
    },
    {
        question: "Which of the following champions has the highest base health?",
        answers: [
            "Zac",
            "Alistar",
            "Braum",
            "Tryndamere"
        ],
        correctAnswer: "Tryndamere",
        image: "<img src=\"assets/images/Tryndamere.png\" alt=\"Tryndamere\">"
    },
    {
        question: "What is the name of Nunu's yeti?",
        answers: [
            "Yoyo",
            "Willump",
            "Tristy",
            "Bristle"
        ],
        correctAnswer: "Willump",
        image: "<img src=\"assets/images/Nunu.jpeg\" alt=\"Nunu\">"
    },
    {
        question: "How many champions are currently available in League of Legends?",
        answers: [
            "150",
            "138",
            "141",
            "148"
        ],
        correctAnswer: "141",
        image: "<img src=\"assets/images/Champions.jpg\" alt=\"Champions\">"
    },
    {
        question: "Which of the following abilities can penetrate through Yasuo's Wind Wall?",
        answers: [
            "Final Spark",
            "Tidal Wave",
            "Weaver's Wall",
            "Super Mega Death Rocket!"
        ],
        correctAnswer: "Final Spark",
        image: "<img src=\"assets/images/Lux.jpeg\" alt=\"Final Spark\">"
    },
    {
        question: "How much gold does a completed Infinity Edge cost?",
        answers: [
            "3800",
            "3700",
            "3600",
            "3500"
        ],
        correctAnswer: "3700",
        image: "<img src=\"assets/images/Infinity.jpg\" alt=\"Infinity Edge\">"
    },
    {
        question: "What is the earliest time that the Elder Dragon can spawn on Summoner's Rift?",
        answers: [
            "30 minutes",
            "35 minutes",
            "37 minutes",
            "40 minutes"
        ],
        correctAnswer: "35 minutes",
        image: "<img src=\"assets/images/Elder.png\" alt=\"Elder Dragon\">"
    }

];

// variable declaration
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var index = 0;
var timeRemaining = 30;
var intervalId;
var answer;

// function to start the game
function startGame() {
    $("#timeDisplay").removeClass("hide");
    $("#start").addClass("hide");
    $("#startOver").addClass("hide");
    $("#questionDisplay").removeClass("hide");
    $("#timeDisplay").html("<h2>Time Remaining: " + timeRemaining + " seconds</h2>")
    wrongAnswers = 0;
    index = 0;
    correctAnswers = 0;
    unanswered = 0;
    timeRemaining = 30;
    game();
}

// function holding the main logic for the game
function game() {
    $("#timeDisplay").html("<h2>Time Remaining: " + timeRemaining + " seconds</h2>")
    $("#questionDisplay").html(trivia[index].question + "<br>");
    for (k = 0; k < 4; k++) {
        var answerButton = $("<button>");
        $(answerButton).append(trivia[index].answers[k]);
        $(answerButton).addClass("answer-button");
        $(answerButton).attr("data-answer", trivia[index].answers[k]);
        $("#questionDisplay").append(answerButton);
        $("#questionDisplay").append("<br>");
        answer = trivia[index].correctAnswer;
    }
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// function to decrease the timer by 1 second and display the new time
function decrement() {
    timeRemaining--;
    $("#timeDisplay").html("<h2>Time Remaining: " + timeRemaining + " seconds</h2>")
    if (timeRemaining === 0) {
        clearInterval(intervalId);
        unanswered++;
        displayOutOfTime();
        timeRemaining = 30;
    }
}

// function that's called if the user answered correctly
function displayCorrect() {
    $("#questionDisplay").html("Correct!<br>" + trivia[index].image);
    if (index === 9) {
        setTimeout(completed, 5000)
    }
    index++;
    setTimeout(game, 5000);
}

// function that's called if the user answered incorrectly
function displayWrong() {
    $("#questionDisplay").html("Nope!<br>" + "The correct answer was " + trivia[index].correctAnswer + ".<br>" + trivia[index].image);
    if (index === 9) {
        setTimeout(completed, 5000)
    }
    index++;
    setTimeout(game, 5000);
}

// function that's called if the user didn't answer in time
function displayOutOfTime() {
    $("#questionDisplay").html("Out of time!<br>" + "The correct answer was " + trivia[index].correctAnswer + ".<br>" + trivia[index].image);
    if (index === 9) {
        setTimeout(completed, 5000)
    }
    index++;
    setTimeout(game, 5000);
}

// function that's called when the user completed the trivia game
function completed() {
    $("#startOver").removeClass("hide");
    $("#timeDisplay").addClass("hide");
    $("#questionDisplay").html("<h2>All done, here's how you did!</h2><br>" + "<h4>Correct Answers: " + correctAnswers + "</h4><br><h4>Incorrect Answers: " + wrongAnswers + "</h4><br><h4> Unanswered: " + unanswered + "</h4>");
}

// when the user clicks "start", call the startGame function
$("#start").click(startGame);

// when the user clicks "start over", call the startGame function
$("#startOver").click(startGame);

// function that runs when the user clicks an answer
$(document).on("click", ".answer-button", function () {
    clearInterval(intervalId);
    var userAnswer = $(this).attr("data-answer");
    if (userAnswer === answer) {
        correctAnswers++;
        displayCorrect();
    } else {
        wrongAnswers++;
        displayWrong();
    }
    timeRemaining = 30;
});
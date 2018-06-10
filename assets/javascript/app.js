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
        image: "<img src=\"assets/images/Nunu.jpg\" alt=\"Nunu\">"
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

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var index = 0;
var timeRemaining = 31;
var intervalId;
var answer;

function stopTimer() {
    clearInterval(intervalId);
}

function startGame() {
    $("#start").addClass("hide");
    $("#startOver").addClass("hide");
    $("#questionDisplay").removeClass("hide");
    wrongAnswers = 0;
    index = 0;
    correctAnswers = 0;
    unanswered = 0;
    timeRemaining = 31;
    game();
}

function game() {
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

function decrement() {
    timeRemaining--;
    $("#timeDisplay").html("<h2>Time Remaining: " + timeRemaining + " seconds</h2>")
    if (timeRemaining === 0) {
        clearInterval(intervalId);
        unanswered++;
        displayOutOfTime();
        timeRemaining = 31;
    }
}

function displayCorrect() {
    $("#questionDisplay").html("Correct!<br>" + trivia[index].image);
    if (index === 9) {
        setTimeout(completed, 5000)
    }
    index++;
    setTimeout(game, 5000);
}

function displayWrong() {
    $("#questionDisplay").html("Nope!<br>" + "The correct answer was " + trivia[index].correctAnswer + "<br>" + trivia[index].image);
    if (index === 9) {
        setTimeout(completed, 5000)
    }
    index++;
    setTimeout(game, 5000);
}

function displayOutOfTime() {
    $("#questionDisplay").html("Out of time!<br>" + "The correct answer was " + trivia[index].correctAnswer + "<br>" + trivia[index].image);
    if (index === 9) {
        setTimeout(completed, 5000)
    }
    index++;
    setTimeout(game, 5000);
}

function completed() {
    $("#startOver").removeClass("hide");
    $("#questionDisplay").html("<h2>All done, here's how you did!</h2><br>" + "<h4>Correct Answers: " + correctAnswers + "</h4><br><h4>Incorrect Answers: " + wrongAnswers + "</h4><br><h4> Unanswered: " + unanswered + "</h4>");
}

$("#start").click(startGame);

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
    timeRemaining = 31;
});

$("#startOver").click(startGame);



















































// function stop() {
//     clearInterval(intervalId);
// }

// function game() {
//     $("#questionDisplay").html(trivia[index].question + "<br>");
//     for (k = 0; k < 4; k++) {
//         var answerButton = $("<button>");
//         $(answerButton).append(trivia[index].answers[k]);
//         $(answerButton).addClass("answer-button");
//         $(answerButton).attr("data-answer", trivia[index].answers[k]);
//         $("#questionDisplay").append(answerButton);
//         $("#questionDisplay").append("<br>");
//         answer = trivia[index].correctAnswer;
//     }
//     index++;
// }

// function start() {
//     $("#start").addClass("hide");
//     $("#questionDisplay").removeClass("hide");
//     intervalId = setInterval(decrement, 1000);
// }

// function decrement() {
//     timeRemaining--;
//     $("#timeDisplay").html("Time remaining: " + timeRemaining + "seconds");
//     if (timeRemaining === 0) {
//         unanswered++;
//         timeRemaining = 30;
//         game();
//     }
// }

// $(document).on("click", ".answer-button", function () {
//     var userAnswer = $(this).attr("data-answer");
//     if (userAnswer === answer) {
//         correctAnswers++;
//     } else {
//         wrongAnswers++;
//     }
//     game();
//     timeRemaining = 30;
// });

// $("#start").on("click", function () {
//     start();
// });

















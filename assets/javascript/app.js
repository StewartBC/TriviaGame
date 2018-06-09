var trivia = [
    {
        question: "What is the name of Orianna's ultimate ability?",
        answer1: "Command: Dissonance",
        answer2: "Command: Protect",
        answer3: "Command: Shockwave",
        answer4: "Command: Attack"
    },
    {
        question: "Which champion has an ability called Tidal Wave?",
        answer1: "Varus",
        answer2: "Corki",
        answer3: "Nami",
        answer4: "Lux"
    },
    {
        question: "Which of the following champions has most recently been introduced to the game?",
        answer1: "Kled",
        answer2: "Kayn",
        answer3: "Zoe",
        answer4: "Kai'Sa"
    },
    {
        question: "Which of the following items grants the most ability power?",
        answer1: "Rabadon's Deathcap",
        answer2: "Liandry's Torment",
        answer3: "Luden's Echo",
        answer4: "Morellonomicon"
    },
    {
        question: "Which of the following champions has the highest base health?",
        answer1: "Zac",
        answer2: "Alistar",
        answer3: "Braum",
        answer4: "Tryndamere"
    },
    {
        question: "What is the name of Nunu's yeti?",
        answer1: "Yoyo",
        answer2: "Willump",
        answer3: "Tristy",
        answer4: "Garen"
    },
    {
        question: "How many champions are currently available in League of Legends?",
        answer1: "150",
        answer2: "138",
        answer3: "141",
        answer4: "148"
    },
    {
        question: "Which of the following abilities can penetrate through Yasuo's Wind Wall?",
        answer1: "Final Spark",
        answer2: "Tidal Wave",
        answer3: "Weaver's Wall",
        answer4: "Super Mega Death Rocket!"
    },
    {
        question: "How much gold does a completed Infinity Edge cost?",
        answer1: "3800",
        answer2: "3700",
        answer3: "3600",
        answer4: "3500"
    },
    {
        question: "What is the earliest time that the Elder Dragon can spawn on Summoner's Rift?",
        answer1: "30 minutes",
        answer2: "35 minutes",
        answer3: "37 minutes",
        answer4: "40 minutes"
    }

];

var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var index = 0;

function displayTrivia() {
    if (index < trivia.length) {
        $("#questionDisplay").html(trivia[index].question + "<br>");
        var answerButton1 = $("<input type=\"radio\" name=\"answer\" value=\"answer 1\">" +
            " " + trivia[index].answer1 + "<br>");
        var answerButton2 = $("<input type=\"radio\" name=\"answer\" value=\"answer 1\">" +
            " " + trivia[index].answer2 + "<br>");
        var answerButton3 = $("<input type=\"radio\" name=\"answer\" value=\"answer 1\">" +
            " " + trivia[index].answer3 + "<br>");
        var answerButton4 = $("<input type=\"radio\" name=\"answer\" value=\"answer 1\">" +
            " " + trivia[index].answer4 + "<br>");
        $(answerButton1).addClass("answer-button");
        $(answerButton2).addClass("answer-button");
        $(answerButton3).addClass("answer-button");
        $(answerButton4).addClass("answer-button");
        $("#questionDisplay").append(answerButton1);
        $("#questionDisplay").append(answerButton2);
        $("#questionDisplay").append(answerButton3);
        $("#questionDisplay").append(answerButton4);

        index++;
    }
}
function idk() {
    $("#start").addClass("hide");
    $("#questionDisplay").removeClass("hide");
    setInterval(displayTrivia, 1000);
}

$("#start").on("click", function () {
    $("#start").addClass("hide");
    $("#questionDisplay").removeClass("hide");
    setInterval(displayTrivia, 1000);
});









        // $("#questionDisplay").html(
        //     trivia[index].question +
        //     "<br>" +
        //     "<input type=\"radio\" name=\"answer\" value=\"answer 1\">" +
        //     " " + trivia[index].answer1 + "<br>" +
        //     "<input type=\"radio\" name=\"answer\" value=\"answer 2\">" +
        //     " " + trivia[index].answer2 + "<br>" +
        //     "<input type=\"radio\" name=\"answer\" value=\"answer 3\">" +
        //     " " + trivia[index].answer3 + "<br>" +
        //     "<input type=\"radio\" name=\"answer\" value=\"answer 4\">" +
        //     " " + trivia[index].answer4 + "<br>"
        // );
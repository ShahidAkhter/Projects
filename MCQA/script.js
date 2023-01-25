let questions = [
    "What is computer?",
    "Is computer is an electronic device?",
    "What is input device?",
    "What is output device?",
    "What is C.P.U.",
];
let answerOptions = [
    { answers1: "computer is an electronic device", answers2: "machine", answers3: "device", answers4: "data" },
    { answers1: "computer is an electronic device", answers2: "machine", answers3: "device", answers4: "data" },
    { answers1: "computer is an electronic device", answers2: "machine", answers3: "device", answers4: "data" },
    { answers1: "computer is an electronic device", answers2: "machine", answers3: "device", answers4: "data" },
    { answers1: "computer is an electronic device", answers2: "machine", answers3: "device", answers4: "data" },
]
// document.getElementById("question").innerText = question[0];
randomQuestion = () => {
    a = 0;
    b = questions.length - 1;
    c = Math.round(b - (b - a) * Math.random());
    document.getElementById("question").value = questions[c];
    document.getElementById('answer1').value = answerOptions[c].answers1;
    document.getElementById('answer2').value = answerOptions[c].answers2;
    document.getElementById('answer3').value = answerOptions[c].answers3;
    document.getElementById('answer4').value = answerOptions[c].answers4;
    resetQuestion();

}
resetQuestion = () => {
    d = c
    document.getElementById('next').addEventListener('click', () => {
        if (d == (questions.length - 1)) {
            d = 0;
        } else {
            d++;
        }
        // document.getElementById('next').addEventListener('click', () => {
            // document.getElementById('yourAnswers').innerHTML+=document.getElementsByClassName('container').innerHTML;
        // })
        setTimeout(() => {
            document.getElementById("question").value = questions[d];
            document.getElementById('answer1').value = answerOptions[d].answers1;
            document.getElementById('answer2').value = answerOptions[d].answers2;
            document.getElementById('answer3').value = answerOptions[d].answers3;
            document.getElementById('answer4').value = answerOptions[d].answers4;
        }, 40);
    })
    document.getElementById('previous').addEventListener('click', () => {
        if (d == 0) {
            d = (questions.length - 1);
        } else {
            d--;
        }
        setTimeout(() => {
            document.getElementById("question").value = questions[d];
            document.getElementById('answer1').value = answerOptions[d].answers1;
            document.getElementById('answer2').value = answerOptions[d].answers2;
            document.getElementById('answer3').value = answerOptions[d].answers3;
            document.getElementById('answer4').value = answerOptions[d].answers4;
        }, 40);
    })
}
randomQuestion();

const answerSelect = () => {
    document.getElementById('answer1').addEventListener('click', () => {
        document.getElementById('answer1').style.background = '#00d0ff';
    })
    document.getElementById('answer2').addEventListener('click', () => {
        document.getElementById('answer2').style.background = '#00d0ff';
    })
    document.getElementById('answer3').addEventListener('click', () => {
        document.getElementById('answer3').style.background = '#00d0ff';
    })
    document.getElementById('answer4').addEventListener('click', () => {
        document.getElementById('answer4').style.background = '#00d0ff';
    })
}
answerSelect();

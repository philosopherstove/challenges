let score         = 0;
let questionCount = 0;
let questions     = [
    {
        question: "What is 2+2?",
        answers: {
            a: "4",
            b: "3",
            c: "5",
            d: "21"
        },
        correct: "a"
    },
    {
        question: "What colour is a carrot?",
        answers: {
            a: "red",
            b: "orange",
            c: "green",
            d: "purple"
        },
        correct: "b"
    },
    {
        question: "How many seasons have the Toronto Maple Leafs played without winning a stanley cup? ",
        answers: {
            a: "4",
            b: "81",
            c: "51",
            d: "100"
        },
        correct: "c"
    }
];

function getHelp(){
    alert("Please select the correct answer and then click enter answer.")
}

function serveQuestion(){
    let question                  = questions[questionCount].question;
    let questionElement           = document.querySelector(".question");
        questionElement.innerHTML = question;

    let answer1                   = questions[questionCount].answers.a;
    let answerElement_1           = document.querySelector(".card > div:nth-of-type(1) .answer");
        answerElement_1.innerHTML = answer1;

    let answer2                   = questions[questionCount].answers.b;
    let answerElement_2           = document.querySelector(".card > div:nth-of-type(2) .answer");
        answerElement_2.innerHTML = answer2;

    let answer3                   = questions[questionCount].answers.c;
    let answerElement_3           = document.querySelector(".card > div:nth-of-type(3) .answer");
        answerElement_3.innerHTML = answer3;

    let answer4                   = questions[questionCount].answers.d;
    let answerElement_4           = document.querySelector(".card > div:nth-of-type(4) .answer");
        answerElement_4.innerHTML = answer4;
};

function enter(){
    let radios = document.querySelectorAll(".card input");
    let isSelected = false;
    let selected   = null;
    for (i = 0; i < radios.length; i++){
        let radio = radios[i];
        if( radio.checked){
            isSelected = true;
            selected   = radio.value;
        };
    };
    if( isSelected == true){
        let correct = questions[questionCount].correct;
        if( selected == correct){
            score++;
        };
        let scoreboard           = document.querySelector("#scoreboard");
            scoreboard.innerHTML = `Score = ${score}`;
        questionCount++;
        if( questionCount == 3){
            let delay = setTimeout(()=>{
                alert(`Your score is ${score}`);
                document.location.reload();
            },100);
        }
        else{
            serveQuestion();
        };
    }
    else{
        alert("Please select and answer!");
    };
};

function restart(){
    document.location.reload();
};

serveQuestion();

const displayPoints = document.querySelector('#currentPoints')
const displayTime = document.querySelector("#currentTime")
const choice1 = document.querySelector('#choice1');
const choice2 = document.querySelector('#choice2');
const choice3 = document.querySelector('#choice3');
const choice4 = document.querySelector('#choice4');
const submitBtn = document.querySelector('#submitBtn');
const questionChoice = document.querySelector('#questionChoice');
const startBtn = document.querySelector("#startBtn");
const qTag = document.querySelector('#qTag');
let timeRemaining = 60;
let currentAnswer = "";
let currentPoints = 0;
const questions = [
    {
        question: '4 x 4 = ?',
        choice1:'22',
        choice2:'34',
        choice3:'66',
        choice4:'16',
        key: '16'
    },
    {
        question: '20 x 10 = ?',
        choice1:'60',
        choice2:'10234',
        choice3:'220',
        choice4:'200',
        key: '200'
    },
    {
        question: '325 + 120 = ?',
        choice1:'455',
        choice2:'555',
        choice3:'445',
        choice4:'465',
        key: '455'
    },
    {
        question: '4 x 12 = ?',
        choice1:'36',
        choice2:'52',
        choice3:'48',
        choice4:'22',
        key: '48'
    },
    {
        question: '2 + 2 = ?',
        choice1:'4',
        choice2:'6',
        choice3:'8',
        choice4:'Fish',
        key: 'Fish'
    },
    {
        question: '8 x 8 = ?',
        choice1:'2622',
        choice2:'122',
        choice3:'424',
        choice4:'64',
        key: '64'
    },
    {
        question: '10 + 10 = ?',
        choice1:'5',
        choice2:'40',
        choice3:'20',
        choice4:'10',
        key: '20'
    },
    {
        question: '15 x 4 = ?',
        choice1:'90',
        choice2:'120',
        choice3:'60',
        choice4:'80',
        key: '60'
    },
    {
        question: '400 - 8 = ?',
        choice1:'390',
        choice2:'385',
        choice3:'395',
        choice4:'392',
        key: '16'
    },
    {
        question: '12 + 12 = ?',
        choice1:'1212',
        choice2:'22',
        choice3:'24',
        choice4:'0',
        key: '24'
    },
    {
        question: '42 * 42 = ?',
        choice1:'1824',
        choice2:'1764',
        choice3:'1954',
        choice4:'1999',
        key: '1764'
    },
    {
        question: '18 / 2 = ?',
        choice1: `9`,
        choice2: `9.5`,
        choice3: `7.5`,
        choice4: `12`,
        key: `9`
    },
    {
        question: '4 x ? = 40',
        choice1: `12`,
        choice2: `8`,
        choice3: `6`,
        choice4: `10`,
        key: `10`
    },
    {
        question: '12 x 11 = ?',
        choice1: `142`,
        choice2: `111`,
        choice3: `132`,
        choice4: `122`,
        key: `132`
    },
    {
        question: '88 - 42 = ?',
        choice1: `48`,
        choice2: `46`,
        choice3: `44`,
        choice4: `42`,
        key: `46`
    },
]

function timerCountDown() {
    countdown = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            displayTime.textContent = timeRemaining;
        }
        else {
            clearInterval(countdown)
            outOfTime();
            return;
        }
    }, 1000)}

function quizFunction(selectedAnswer) {
    if (selectedAnswer === currentAnswer){
        currentPoints = currentPoints + 5;
        displayPoints.textContent = currentPoints;
        selectQuestion();
        return;
    } else {
        timeRemaining = timeRemaining - 5;
        selectQuestion();
        return;
    }

}
function selectQuestion() {
    let randomQuestion = Math.floor(Math.random() * questions.length)
    displayQuestion(questions[randomQuestion]);
}

function displayQuestion(chosen) {
    qTag.textContent = chosen.question;
    choice1.textContent = chosen.choice1;
    choice2.textContent = chosen.choice2;
    choice3.textContent = chosen.choice3;
    choice4.textContent = chosen.choice4;
    currentAnswer = chosen.key;
}

startBtn.addEventListener('click', function(){
    quizFunction();
    timerCountDown();
    startBtn.remove()
})

questionChoice.addEventListener('click', function(e){
    let target = e.target;
    if (target.classList == "choices"){
      quizFunction(target.textContent);  
    }
});













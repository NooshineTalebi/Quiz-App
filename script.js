
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElements = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const questionElement = document.getElementById('question');

let currentQuestionIndex = 0;

startButton.addEventListener('click' , startQuiz);
nextButton.addEventListener('click' , nextQuestion);

function startQuiz(){
    startButton.classList.add('hide');
    questionContainerElements.classList.remove('hide');
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {

        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click' , selectedAnswer);
})
}

function selectedAnswer(){
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        const isCorrect = button.dataset.correct === 'true';
        if (isCorrect) {
            button.classList.add('correct');
        }else{
            button.classList.add('incorrect');
        }
    });
    nextButton.classList.remove('hide');
}

function nextQuestion(){
    questionElement.innerHTML = '';
    answerButtons.innerHTML = '';
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else if(currentQuestionIndex == questions.length) {
        nextButton.innerHTML = 'play again';
        questionElement.innerHTML = '';
        answerButtons.innerHTML = '';
    }else{
        resetQuiz();
    }
}

function resetQuiz(){
    nextButton.innerHTML = 'Next';
    currentQuestionIndex = 0;
    startQuiz();
}

const questions = [
    {
        question: 'what is 4 * 2 ?',
        answers: [
            { text: '8', correct: true },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'what is 2 + 2 ?',
        answers: [
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '3', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'which is the smallest continent in the world ?',
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Africa', correct: false },
            { text: 'Australia', correct: true },
        ]
    },
    {
        question: 'who is the best dancer ?',
        answers: [
            { text: 'shakira', correct: true },
            { text: 'jennifer lopez', correct: false },
            { text: 'ariana grande', correct: false },
            { text: 'britney spears', correct: false }
        ]
    }
]




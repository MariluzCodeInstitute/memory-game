document.getElementById('btn-start-game').addEventListener('click', generateRandomNumber);
document.getElementById('btn-submit').addEventListener('click', checkAnswer);
let num;

function generateRandomNumber() {
    num = Math.floor(Math.random() * 10);
    displayNumber(num)
}

function displayNumber(number) {
    document.getElementById('number').innerText = number
    setTimeout(() => {
        document.getElementById('number').innerText = '';
      }, 1000);
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('player-answer').value);
    let correct = userAnswer === num
    document.getElementById('player-answer').value = '';

    if (correct) {
        alert('Well done! Your answer is correct!');
        increaseCorrectAnswers();
    } else {
        alert(`Sorry! Your answer was ${userAnswer}. The correct answer was ${num}!`);
        increaseWrongAnswers();
    }
}

// Code inspired on the methods to update scores from Love Maths project
function increaseCorrectAnswers() {
    let previousScore = parseInt(document.getElementById('correct-score').innerText)
    document.getElementById('correct-score').innerText = ++previousScore;
}

function increaseWrongAnswers() {
    let previousScore = parseInt(document.getElementById('incorrect-score').innerText)
    document.getElementById('incorrect-score').innerText = ++previousScore;
}
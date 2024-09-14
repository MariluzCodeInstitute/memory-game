document.getElementById('btn-start-game').addEventListener('click', generateRandomNumber);
document.getElementById('btn-submit').addEventListener('click', checkAnswer);
document.getElementById('player-answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
})

let numbers = [];
let digits = 1;

function generateRandomNumber() {
    // Disable input field until last number has been shown
    document.getElementById('player-answer').disabled = true;

    for (let i = 0; i < digits; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    // Pass a copy of the numbers array so that the original array doesn't get modified
    displayNumbers([...numbers]);
}

function displayNumbers(values) {
    if (values.length < 1) {
        document.getElementById('player-answer').disabled = false;
        document.getElementById('player-answer').focus();
        return
    }
    document.getElementById('number').innerText = values.shift();
    setTimeout(() => {
        document.getElementById('number').innerText = '';
        blankNumbersBox(values);
    }, 1000);
}

// This method forces a blank period before printing the next number
function blankNumbersBox(values) {
    setTimeout(() => {
        displayNumbers(values);
    }, 500);
}

function checkAnswer() {
    let fullNumber = numbers.join('');
    let userAnswer = document.getElementById('player-answer').value;
    let correct = userAnswer === fullNumber
    document.getElementById('player-answer').value = '';
    
    if (correct) {
        alert('Well done! Your answer is correct!');
        increaseCorrectAnswers();
        ++digits;
    } else {
        alert(`Sorry! Your answer was ${userAnswer}. The correct answer was ${fullNumber}!`);
        increaseWrongAnswers();
        if (digits > 1) {
            --digits;
        }
    }
    numbers = [];
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
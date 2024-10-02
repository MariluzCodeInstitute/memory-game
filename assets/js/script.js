let startButton = document.getElementById('btn-start-game');
startButton.addEventListener('click', generateRandomNumber);

let submitAnswerButton = document.getElementById('btn-submit');
submitAnswerButton.addEventListener('click', checkAnswer);

document.getElementById('player-answer').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});
document.getElementById('btn-instructions').addEventListener('click', toggleInstructions);

let numbers = [];
let digits = 1;

// Generate as many random numbers as the value for digits variable is
function generateRandomNumber() {
    // Disable input field until last number has been shown
    document.getElementById('player-answer').disabled = true;
    // Disable start button to avoid player clicking on it multiple times
    startButton.disabled = true;

    for (let i = 0; i < digits; i++) {
        numbers.push(Math.floor(Math.random() * 10));
    }
    // Pass a copy of the numbers array so that the original array doesn't get modified
    displayNumbers([...numbers]);
}

// Display each number temporarily and handle player-anser behaviour
function displayNumbers(values) {
    if (values.length < 1) {
        document.getElementById('player-answer').disabled = false;
        document.getElementById('player-answer').focus();
        return;
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

// Check the player's answer and increase/decrease the value of digits accordingly
function checkAnswer() {
    let fullNumber = numbers.join('');
    let userAnswer = document.getElementById('player-answer').value;
    let correct = userAnswer === fullNumber;
    document.getElementById('player-answer').value = '';

    // Enable the start button again
    startButton.disabled = false;
    
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
    let previousScore = parseInt(document.getElementById('correct-score').innerText);
    document.getElementById('correct-score').innerText = ++previousScore;
}

function increaseWrongAnswers() {
    let previousScore = parseInt(document.getElementById('incorrect-score').innerText);
    document.getElementById('incorrect-score').innerText = ++previousScore;
}

// Show or hide the instructions when the user clicks on the button
function toggleInstructions() {
    let instructions = document.getElementById('instructions-text');

    if (instructions.style.display !== 'block') {
        instructions.style.display = 'block';
    } else {
        instructions.style.display = 'none';
    }
}
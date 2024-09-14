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

    if (correct) {
        alert('Well done! Your answer is correct!');
    } else {
        alert(`Sorry! Your answer was ${userAnswer}. The correct answer was ${num}!`);
    }
}
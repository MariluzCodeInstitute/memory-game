document.getElementById('btn-start-game').addEventListener('click', generateRandomNumber);
document.getElementById('btn-submit').addEventListener('click', checkAnswer);



function generateRandomNumber() {
    let num = Math.floor(Math.random() * 10);
    displayNumber(num)
}

function displayNumber(number) {
    document.getElementById('number').innerText = number
    setTimeout(() => {
        document.getElementById('number').innerText = '';
      }, 1000);
}

function checkAnswer(number) {
    let userAnswer = parseInt(document.getElementById("player-answer").value);
    let correct = userAnswer === number
    console.log(correct)
}
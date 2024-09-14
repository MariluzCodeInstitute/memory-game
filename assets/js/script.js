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

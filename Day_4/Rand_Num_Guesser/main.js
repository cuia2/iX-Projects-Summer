const amountInput = document.getElementById('amount-input');
const buttonInput = document.getElementById('button');
const cardBody = document.getElementById('card-body');

buttonInput.addEventListener('click', (event) => {
    const nGuess = amountInput.value;
    const randNum = Math.floor(Math.random() * 10);
    const resultDiv = document.createElement('div');

    if (nGuess == randNum) {
        resultDiv.innerHTML = "Correct!";
    } else {
        resultDiv.innerHTML = "Incorrect. The number was " + randNum;
    }

    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-primary');
    resultDiv.classList.add('mt-4');

    cardBody.append(resultDiv);
});
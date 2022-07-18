const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

const randNum = Math.floor(Math.random() * movies.length);
const expDisplay = document.getElementById('exp-display');
const titleInput = document.getElementById('title-input');
const buttonInput = document.getElementById('button');
const button2Input = document.getElementById('button2');
const cardBody = document.getElementById('card-body');

expDisplay.innerHTML = movies[randNum].explanation;

buttonInput.addEventListener('click', (event) => {
    const resultDiv = document.createElement('div');
    let tGuess = titleInput.value;

    if (tGuess == movies[randNum].title) {
        resultDiv.innerHTML = "Correct!";
    } else {
        resultDiv.innerHTML = "Incorrect. The movie title was \"" + movies[randNum].title + "\"";
    }

    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-primary');
    resultDiv.classList.add('mt-4');

    cardBody.append(resultDiv);
});

button2Input.addEventListener('click', (event) => {
    const hintDiv = document.createElement('div');
    hintDiv.innerHTML = movies[randNum].hint;

    hintDiv.classList.add('alert');
    hintDiv.classList.add('alert-info');
    hintDiv.classList.add('mt-4');

    cardBody.append(hintDiv);
});

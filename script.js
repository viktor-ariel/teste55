let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultMessage = document.getElementById('resultMessage');
const attemptsMessage = document.getElementById('attemptsMessage');
const restartButton = document.getElementById('restartButton');

guessButton.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === secretNumber) {
        resultMessage.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
        resultMessage.style.color = 'green';
        attemptsMessage.textContent = '';
        guessButton.disabled = true;
        guessInput.disabled = true;
        restartButton.style.display = 'inline-block';
    } else if (userGuess > secretNumber) {
        resultMessage.textContent = 'O número é menor!';
        resultMessage.style.color = 'red';
    } else if (userGuess < secretNumber) {
        resultMessage.textContent = 'O número é maior!';
        resultMessage.style.color = 'red';
    }

    attemptsMessage.textContent = `Tentativas: ${attempts}`;
});

restartButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultMessage.textContent = '';
    attemptsMessage.textContent = '';
    guessInput.value = '';
    guessButton.disabled = false;
    guessInput.disabled = false;
    restartButton.style.display = 'none';
});

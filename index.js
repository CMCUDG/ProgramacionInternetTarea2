
let num = 0;
let guesses = 0;
let result = '';
let guessList = 'Intentos anteriores: ';

const guessElement = document.querySelector('.js-guess');
const resultElement = document.querySelector('.js-result');
const guessesElement = document.querySelector('.js-guesses');
const previousGuessesElement = document.querySelector('.js-previousGuesses');

reset()

function buttonClicked(){

    if(guesses > 9){
        result = 'Se acabaron los intentos'
        resultElement.textContent = result;
        return
    }

    let guess = Number(guessElement.value);
    guessList+=String(guess)+', ';

    guesses+=1;
    if(guess < num){
        result = 'Demasiado bajo'
    }
    if(guess > num){
        result = 'Demasiado alto'
    }
    if(guess == num){
        result = 'Correcto'
    }
    resultElement.textContent = result;
    clear();
}

function clear(){
    guessesElement.textContent = ("Intentos: " + String(guesses));
    guessElement.value = "";
    previousGuessesElement.textContent=guessList;
}

function reset(){
    num = Math.floor(Math.random() * 100+1);
    guesses = 0;
    result = '';
    let guessList = 'Intentos anteriores: ';
    clear();
}
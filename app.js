import {
    compareNum
} from './utils.js';

// import functions and grab DOM elements
const inputEl = document.getElementById('user-input');
const buttonEl = document.getElementById('button');
const resetEl = document.getElementById('reset');
const resultEl = document.getElementById('recap-box');
const guessesEl = document.getElementById('guesses-left');
const timesPlayedEL = document.getElementById('times-played');

// initialize global state
let timesPlayed = 0;
let turnsLeft = 4;
let correctAnswer = 0;
let userGuess = 0;

// making a function to generate the random correct answer on page load
export function getRandom(num) {
    return Math.ceil(Math.random() * num);
}
correctAnswer = getRandom(20);
console.log(correctAnswer);
// ^^^ at this point I have initialized the states that I need ^^


// set event listeners 
buttonEl.addEventListener('click', () => {
    turnsLeft--;
    // after each click the number of turns left decrements
    userGuess = Number(inputEl.value);

    const actionJaxon = compareNum(userGuess, correctAnswer);
    if (turnsLeft < 1) {
        resultEl.textContent = 'I hate to say it, but You kind of lost, I even googled the saddest color and apparently its gray :(';
        buttonEl.style.visibility = 'hidden';
        resultEl.style.display = 'inline';

        // when turns left goes below 1 buttonEl disappears 
        // button is disabled
    }

    if (actionJaxon === 0) {
        guessesEl.textContent = 'You Win! I\'d give you ice cream or something but...you know ..Ants';
        guessesEl.style.color = 'white';
        resultEl.style.display = 'none';

    } else if (actionJaxon === 1) {
        guessesEl.textContent = `You are too high and you have ${turnsLeft} guesses left`;

    } else {
        guessesEl.textContent = `You are too low and you have ${turnsLeft} guesses left`;
    }


    
});


resetEl.addEventListener('click', () => {
    // this will reset the game without reloading the page
    turnsLeft = 4;
    correctAnswer = getRandom(20);
    guessesEl.textContent = 'You have four guesses and your goal is to guess the correct number between 1-20';
    guessesEl.style.color = 'black';
    resultEl.style.display = 'none';
    timesPlayed++;
    timesPlayedEL.textContent = timesPlayed;
    buttonEl.style.visibility = 'visible';
});
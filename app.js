// import functions and grab DOM elements
const inputEl = document.getElementById('user-input');
const buttonEl = document.getElementById('button');
const resetEl = document.getElementById('reset');
const resultEl = document.getElementById('recap-box');
const guessesEl = document.getElementById('guesses-left');

// initialize global state
let turnsLeft = 4;
let correctAnswer = 0;
let userGuess = 0;
// making a function to generate the random correct answer on page load
function getRandom(max) {
    return Math.ceil(Math.random() * max);
}
correctAnswer = getRandom(20);

console.log(correctAnswer);

// ^^^ at this point I have initialized the states that I need ^^

// set event listeners 
buttonEl.addEventListener('click', () => {
    turnsLeft = turnsLeft - 1;
  // after each click the number of turns left decrements

    userGuess = Number(inputEl.value);
    // console.log(userGuess);

    if (turnsLeft < 1) {
        resultEl.textContent = 'You are out of turns';
        buttonEl.style.visibility = 'hidden';
    // when turns left goes below 1 buttonEl disappears 
    // button is disabled
    }

    if (correctAnswer === userGuess) {
        guessesEl.textContent = 'You Win!';
        guessesEl.style.color = 'white';
    } else if (correctAnswer > userGuess) {
        guessesEl.textContent = `You are too low and you have ${turnsLeft} guesses left`;
    } else if (correctAnswer < userGuess) {
        guessesEl.textContent = `You are too high and you have ${turnsLeft} guesses left`;

    }

    console.log(turnsLeft);
  // inputEl.textContent =


});

// function CompareAnswers(userGuess) {

// }




resetEl.addEventListener('click', () => {

});
// get user input
// use user input to update state 
// update DOM to reflect the new state
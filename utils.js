const guessesEl = document.getElementById('guesses-left');

const win = function() {
    guessesEl.textContent = 'You Win!';
    guessesEl.style.color = 'white';
};

const low = function() {
    guessesEl.textContent = `You are too low and you have ${turnsLeft} guesses left`;
};
const high = function() {
    guessesEl.textContent = `You are too high and you have ${turnsLeft} guesses left`;
};
const outOfRange = function() {
    guessesEl.textContent = `You have guessed outside of the limits or used a letter duh`;
};

export function compareAndAct(num1, num2) {
    return num1 === num2 ? win :
        num1 > num2 ? low :
            num1 < num2 ? high :
                outOfRange;
}
let turnsLeft = 4;
export function compareNumbers(correctAnswer, userGuess) {
    if (correctAnswer === userGuess) {
        guessesEl.textContent = 'You Win!';
        guessesEl.style.color = 'white';
        return;
    } else if (correctAnswer > userGuess) { guessesEl.textContent = `You are too low and you have ${turnsLeft} guesses left`;
       
    } else if (correctAnswer < userGuess) {
        guessesEl.textContent = `You are too high and you have ${turnsLeft} guesses left`;

    }}

//     // console.log(turnsLeft);
//     if (turnsLeft < 1) {
//         resultEl.textContent = 'I hate to say it, but You kind of lost, I even googled the saddest color and apparently its gray :(';
//         buttonEl.style.visibility = 'hidden';
//         resultEl.style.display = 'inline';
// }
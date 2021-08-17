const guessesEl = document.getElementById('guesses-left');

const win = function() {guessesEl.textContent = 'You Win!';
    guessesEl.style.color = 'white';};

const low = function() {
    guessesEl.textContent = `You are too low and you have ${turnsLeft} guesses left`;  
};
const high = function() {
    guessesEl.textContent = `You are too high and you have ${turnsLeft} guesses left`;
};
const outOfRange = function() {
    guessesEl.textContent = `You have guessed outside of the limits or used a letter duh`;
};

export function compareAndAct(num1, num2){
    return num1 === num2 ? win
        : num1 > num2 ? low   
            : num1 < num2 ? high 
                : outOfRange;
}

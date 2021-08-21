export function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

export function compareNum(num1, num2) {

    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    } 
    else if (num1 < num2) {
        return -1;
    }}
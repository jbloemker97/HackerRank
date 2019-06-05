/*
    Write a factorial function using recurision
*/

function factorial (num) {
    if (num === 1) return num;

    return num * factorial(num-1);
}

let a = factorial(6);
let b = factorial(3);
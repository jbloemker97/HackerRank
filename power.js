/*
    Write a function which accepts a base and an exponent and returns the power of the base to the exponent.
*/

function power (base, exponent) {
    if (exponent === 0) return 1

    return base * power(base, exponent-1);
}

let a = power(2, 0);
let b = power(2, 2);
let c = power(2, 4);
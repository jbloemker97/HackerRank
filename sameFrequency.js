/*
    Given two positive integers, find out if the two numbers have th esame frequency of digits
*/

function sameFrequency (num1, num2) {
    let obj1 = {};

    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) {
        return false;
    }

    for (let i = 0; i < num1.length; i++) {
        obj1[num1[i]] = num1[i]
    }

    for (let i = 0; i < num2.length; i++) {
        if (!obj1[num2[i]]) {
            return false;
        }
    }

    return true;
}

let a = sameFrequency(11, 22);
let b = sameFrequency(123, 321);
let c = sameFrequency(22, 222);
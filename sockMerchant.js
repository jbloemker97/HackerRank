/*
    Problem: https://www.hackerrank.com/challenges/sock-merchant/problem
*/

function sockMerchant(n, ar) {
    let pairs = 0;

    ar.sort((a, b) => { 
        return a - b;
    });

    for (let i = 0; i < ar.length-1; i++) { 
        if (ar[i] === ar[i+1]) { 
            pairs++;
            i++;
        }
    }

    return pairs;
}

// Test Cases
let a = sockMerchant(6, [1, 6, 1, 5, 9, 6, 5]);
let b = sockMerchant(10, [10, 46, 10, 55, 46, 10, 100, 100, 10, 6, 10]);
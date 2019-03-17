/*
    Problem: https://www.hackerrank.com/challenges/electronics-shop/problem/
*/

function getMoneySpent(keyboards, drives, b) {
    let sum = 0;

    // Sort greatest to least
    keyboards = keyboards.sort((a, b) => b - a);
    drives = drives.sort((a, b) => b - a);

    // Loop through keyboard
    for (let i = 0; i < keyboards.length; i++) { 
        // Loop through drives
        for (let j = 0; j < drives.length; j++) { 
            if (keyboards[i] + drives[j] > sum && keyboards[i] + drives[j] <= b) { 
                sum = keyboards[i] + drives[j];
            }
        }
    }

    if (sum === 0) { 
        return -1;
    }

    return sum;
}

// Test cases
let a = getMoneySpent([5, 1, 1], [4], 5);
let b = getMoneySpent([5, 10, 1], [10, 4, 5], 25);
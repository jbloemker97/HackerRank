/*
    Problem: https://www.hackerrank.com/challenges/counting-valleys/problem
*/

function countingValleys(n, s) {
    let level = 0;
    let valleys = 0;
    let inValley;

    s.split("").forEach((step, index) => {
        if (step === 'U') {
            level++;
        } else if (step === 'D') { 
            level--;
        }

        if (level === 0 && step === 'U') { 
            valleys++;
        }
    });

    return valleys;
}

// Test cases
let a = countingValleys(10, "DUDDDUUDUU");
let b = countingValleys(8, 'UDDDUDUU');
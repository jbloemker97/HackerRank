/*
    Implement a function called countDupeValues, which accepts a sorted array, and counts the dupe values in the array.

    Time: O(n)
*/

function countDupeValues (arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            count++;
        }
    }

    return count;
}

let a = countDupeValues([0,0,0,2,2,3,4,5,5]);
let b = countDupeValues([10, 10, 15]);
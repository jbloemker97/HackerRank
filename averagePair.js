/*
    Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target audience. 
*/

function averagePair (arr, average) {
    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + arr[i+1]) / 2 === average) {
            return true;
        }
    }

    return false;
}

let a = averagePair([1,2,3], 2.5);
let b = averagePair([1,3,3,5,6,7,10,12,19], 8);
let c = averagePair([-1,0,3,4,5,6], 4.1);
let d = averagePair([], 4);


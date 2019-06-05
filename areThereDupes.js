/*
    Function that accepts variable number of arguments and checks wheather there are dupes
*/

function areThereDuplicates () {
    let obj = {};

    for (let i = 0; i < arguments.length; i++) {
        if (obj[arguments[i]]) {
            return true;
        }

        obj[arguments[i]] = arguments[i];
    }    


    return false;
}

let a = areThereDuplicates(1, 2, 3);
let b = areThereDuplicates("t", "b", "t");
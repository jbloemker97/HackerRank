/*
    Problem: Is it an anagram?
    Big O: 
        Time: O(n)
        Space: O(n)
*/

function anagram (s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    if (s1 === s2) {
        return true;
    }

    let freq1 = {};
    let freq2 = {};
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    for (let char of s1) {
        if (freq1[char]) {
            freq1[char] += 1;
        }else {
            freq1[char] = 1;
        }
    }

    for (let char of s2) {
        if (freq2[char]) {
            freq2[char] += 1;
        }else {
            freq2[char] = 1;
        }
    }

    for (let char in freq1) {
        if (freq2[char] !== freq1[char]) {
            return false;
        } 
    }

    return true;
}

// Test Cases
let a = anagram('', '');
let b = anagram('ABC', 'abc');
let c = anagram('abv', 'ajts');
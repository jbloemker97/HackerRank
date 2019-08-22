/*
    Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

    Note:

    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

var singleNumber = function(nums) {
    let obj = {};
    
    nums.forEach(num => {
        if (obj[num]) {
            obj[num]++;
        }else {
            obj[num] = 1;
        }
    });
    
    for (let key in obj) {
        if (obj[key] === 1) return key;
    }
};
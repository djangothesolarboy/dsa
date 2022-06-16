/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3, 4];
let nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums1)); // true
console.log(containsDuplicate(nums2)); // false
console.log(containsDuplicate(nums3)); // true
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// ------------------------------------------------------------
// | submitted | status | difficulty | attempt |
// | 6/23/22   |  fail  |    easy    |   1st   |
// ------------------------------------------------------------
var isAnagram = function (s, t) {
    let letters = new Set();
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (!letters.has(s[i])) {
            letters.add(s[i]);
        }
    }
    // console.log(letters)
    for (let j = 0; j < t.length; j++) {
        if (!letters.has(t[j])) {
            return false;
        }
    }
    return true;
};

console.log('1st attempt:');
console.log(isAnagram("aacc", "ccac")); // output: true | expected: false
console.log(isAnagram("anagram", "nagaram")); // output: true | expected: true
console.log(isAnagram("banana", "ananab")); // output: true | expected: true
console.log(isAnagram("rat", "car")); // output: false | expected: false
// ------------------------------------------------------------
// | submitted | status | difficulty | attempt |
// | 6/23/22   |  pass  |    easy    |   2nd   |
// ------------------------------------------------------------

var isAnagram = function (s, t) {
    return (s.split("").sort().join("")) === (t.split("").sort().join(""));
};

console.log('2nd attempt:');
console.log(isAnagram("aacc", "ccac")); // output: false | expected: false
console.log(isAnagram("anagram", "nagaram")); // output: true | expected: true
console.log(isAnagram("banana", "ananab")); // output: true | expected: true
console.log(isAnagram("rat", "car")); // output: false | expected: false
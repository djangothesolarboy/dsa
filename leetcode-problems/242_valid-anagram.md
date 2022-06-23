valid anagram
---
[leetcode](https://leetcode.com/problems/valid-anagram/)

> Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and `false` otherwise.
> An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
```
Input: s = "anagram", t = "nagaram"
Output: true
```

Example 2:
```
Input: s = "rat", t = "car"
Output: false
```

Example 3:
```
Input: s = "rat", t = "car"
Output: false
```
 
Constraints:
```
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
```
---
### solution details:
| Time Submitted | Status | Runtime | Memory | Language | Difficulty | BigO | Attempt |
|---|---|---|---|---|---|---|---|
| 06/23/2022 2:40 | <span style="color:red">fail</span> | <span style="color:red">n/a</span> |  <span style="color:red">n/a</span> | javascript | easy | ~ | $$1st$$ |
| 06/23/2022 3:28 | <span style="color:green">pass</span> | 126ms | 49.3mb | javascript | easy | ~ | $$2nd$$ |
---
### explanation/s
1. 1st [attempt](./242_valid-anagram.js) explanation:
    - explanation for each line/code block
2. 2nd [attempt](./242_valid-anagram.js) explanation:
    - splits both strings into arrays
    - sorts both arrays
    - reassembles the arrays back into strings
    - result returns if the two results are equal
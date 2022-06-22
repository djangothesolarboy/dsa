contains duplicate
---
[leetcode](https://leetcode.com/problems/contains-duplicate/)

> Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
```
Input: nums = [1,2,3,1]
Output: true
```

Example 2:
```
Input: nums = [1,2,3,4]
Output: false
```

Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```
 
Constraints:
```
1 <= nums.length <= 105
-109 <= nums[i] <= 109
```
---
### solution details:
| Time Submitted | Status | Runtime | Memory | Language | Difficulty |
|---|---|---|---|---|---|
| 06/16/2022 16:54 | Accepted | 282 ms | 50.8 MB | javascript | easy |

- [1st](./217_contains-duplicates.js)  

---
### explanation/s
[1st attempt](./217_contains-duplicates.js) explanation:
> brute force method || first idea i had

- function takes in an array of numbers: `nums`
- `nums.sort();` sorts the array sm-lg
- loop through array
- check if current num matches the number beside it && return true
- returns false if it doesn't find any duplicates

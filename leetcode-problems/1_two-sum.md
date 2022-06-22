contains duplicate
---
[leetcode](https://leetcode.com/problems/two-sum)

> Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
> You may assume that each input would have exactly **one** solution, and you may not use the same element *twice*.
> You can return the answer in *any* order.

Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```
 
Constraints:
```
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
```
---
### solution details:
| Time Submitted | Status | Runtime | Memory | Language | Difficulty |
|---|---|---|---|---|---|
| 06/22/2022 14:54 | Accepted | 113 ms | 41.1 MB | javascript | easy |

- [1st](./1_two-sum.js)  

---
### explanation/s
[1st attempt](./1_two-sum.js) explanation:

- loop both arrays
- check if current index in both arrays added together equals target
    - only **1** answer means once found exit
    - so return those indices in an array: `[i, j]`
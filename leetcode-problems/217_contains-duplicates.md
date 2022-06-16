contains duplicate
---
[leetcode](https://leetcode.com/problems/contains-duplicate/)

---
| Time Submitted | Status | Runtime | Memory | Language | Difficulty |
|---|---|---|---|---|---|
| 06/16/2022 16:54 | Accepted | 282 ms | 50.8 MB | javascript | easy |

- [1st](./217_contains-duplicates.js)  

---
[1st attempt](./217_contains-duplicates.js) explanation:
> brute force method || first idea i had

- function takes in an array of numbers: `nums`
- `nums.sort();` sorts the array sm-lg
- loop through array
- check if current num matches the number beside it && return true
- returns false if it doesn't find any duplicates

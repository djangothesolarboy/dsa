linear time: `o(n)`
---

example:
```javascript
const printElementsOfArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]}`);
    };
};

printElementsOfArray(['e', 'f', 'sdf']);
```

explanation:
> this function runs in `o(n)` or *linear time*. where `n` is the number of elements in the array. if array has 10 items, it prints 10 times & etc.

---
time complexity of operations of `o(n)`:
> data structure & opperations of linear time

| data structure | operations of `o(n)` |
|---|---|---|---|---|
| array | search, insertion, deletion |
| stack | access, search |
| queue | access, search |
| singly-linked list | access, search |
| doubly-linked list | access, search |
| skip list | access, search, insertion, deletion |
| hash table | search, insertion, deletion |
| binary search tree | access, search, insertion, deletion |
| cartesian tree | search, insertion, deletion |
| kd tree | access, search, insertion, deletion |

---
space complexity of array sorting:
> algorithms that have a linear space complexity

| algorithm space complexity |
|---|
| merge sort |
| tree sort |
| bucket sort |
| cube sort |
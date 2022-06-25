constant time: `o(1)`
---
example:
```javascript
const printFirstElementOfArray = function(arr) {
    console.log(`First element of the array: ${arr}`, arr[0]);
};

printFirstElementOfArray(['e', 'q']); // prints: e
```
explanation:
> this function runs in `o(1)` (*constant time*) relative to its input. regardless of array size, the function only requires one step

---
time complexity of operations of `o(1)`:
> data structure & opperations of constant time

| data structure | operations of `o(1)` |
|---|---|---|---|---|
| array | access |
| stack | insertion, deletion |
| queue | insertion, deletion |
| singly-linked list | insertion, deletion |
| doubly-linked list | insertion, deletion |

---
space complexity of array sorting:
> algorithms that have a constant space complexity

| algorithm space complexity |
|---|
| heap sort |
| time sort |
| bubble sort |
| insertion sort |
| selection sort |
| shell sort |
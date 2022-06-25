quadratic time: `o(n^2)`
---

example:

```javascript
const printAllPossibleOrderedPairs = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`${arr[i], arr[j]}`);
        }
    }
}
```

explanation:
> if our array has `n` items, our outer loop runs `n` times and our inner loop runs `n` times for each iteration of the outer loop giving us `n^2`. if array has 10 items, it prints 100 times, etc.

---
time complexity of array sorting of `o(n^2)`:
> array sorting of quadratic time

| algorithm |
|---|
| quick sort |
| bubble sort |
| insertion sort |
| selection sort |
| tree sort |
| bucket sort |

---
space complexity of array sorting:
> algorithms that have a quadratic space complexity

| algorithm space complexity |
|---|
| `n/a` |
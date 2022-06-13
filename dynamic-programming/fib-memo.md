# Fibonacci Memo
Resources:
- [fib-memo vid](https://youtu.be/oBt53YbR9Kk?list=PLD8pC1MXKesXC9BIVO5WucyjfKTTaRwMd&t=220)

## Question:
Write a function `fib(n)` that takes in a number as an argument. The fucntion should return the n-th number of the fibonacci sequence.

### How Fib works:
	The 1st and 2nd number of the sequence is 1. To generate the next number of the fibonacci sequence, we sum the previouis two numbers.

*n is the position*
```
n:      1, 2, 3, 4, 5, 6,  7,  8,  9, ..
fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ..
```

```javascript
// *not for large numbers*
// recursive method:
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
```
![fib tree](rsrcs/fib-tree.svg)
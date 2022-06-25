/*
    quadratic time: o(n^2)
*/

const printAllPossibleOrderedPairs = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`${arr[i], arr[j]}`);
        }
    }
}

printAllPossibleOrderedPairs(['e','e', 'g', 'q']);
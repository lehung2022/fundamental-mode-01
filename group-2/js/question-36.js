// Part 1
// Defined array 
var ar =
    [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
function findEven(ar) {
    var res1 = [];
    for (let geek = 0; geek < ar.length; geek++) {
        if (ar[geek] % 2 === 0) {
            res1.push(ar[geek]);
        }
    }
    return res1;
}

function findOdd(ar) {
    var res2 = [];
    for (let geek = 0; geek < ar.length; geek++) {
        if (ar[geek] % 2 === 1) {
            res2.push(ar[geek]);
        }
    }
    return res2;
}

function segregateEvenOdd(ar) {

    // Invoking findEven and findOdd functions 
    var even = findEven(ar);
    var odd = findOdd(ar);
    console.log("Before Segregation: ");
    console.log(ar);
    console.log("After Segregation: ");
    console.log("Even integers: " + even);
    console.log("Odd integers: " + odd);
}

// Invoker 
segregateEvenOdd(ar);

// Part 2
//#Source https://bit.ly/2neWfJ2 
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);
console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));

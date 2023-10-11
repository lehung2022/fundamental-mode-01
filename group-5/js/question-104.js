//#Source https://bit.ly/2neWfJ2 
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
console.log(doubleEvenNumbers(2));
console.log(doubleEvenNumbers(1));

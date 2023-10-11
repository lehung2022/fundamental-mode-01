//#Source https://bit.ly/2neWfJ2 
const spreadOver = fn => argsArr => fn(...argsArr);
const arrayMax = spreadOver(Math.max);

console.log(arrayMax([1, 2, 3]));

//#Source https://bit.ly/2neWfJ2 
const union = (a, b) => Array.from(new Set([...a, ...b]));
console.log(union([1, 2, 3], [4, 3, 2]));
console.log(union([1, 2, 3], [1, 2, 3]));

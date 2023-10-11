//#Source https://bit.ly/2neWfJ2 
const castArray = val => (Array.isArray(val) ? val : [val]);
console.log(castArray('w3r')); 
console.log(castArray([100]));

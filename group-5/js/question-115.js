//#Source https://bit.ly/2neWfJ2 
const unary = fn => val => fn(val);
console.log(['6', '8', '10'].map(unary(parseInt)));

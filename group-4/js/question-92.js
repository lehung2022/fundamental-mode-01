//#Source https://bit.ly/2neWfJ2 
const nthArg = n => (...args) => args.slice(n)[0];
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));

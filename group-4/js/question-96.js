//#Source https://bit.ly/2neWfJ2 
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));

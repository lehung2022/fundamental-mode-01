//#Source https://bit.ly/2neWfJ2 
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

console.log(mapString('Javascript exercises', c => c.toUpperCase()));

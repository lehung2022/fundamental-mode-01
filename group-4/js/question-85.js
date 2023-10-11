//#Source https://bit.ly/2neWfJ2 
const mask = (cc, num = 4, mask = '*') =>
  ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

console.log(mask(1234567890)); 
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, '$'));

//#Source https://bit.ly/2neWfJ2 
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

console.log(truncateString('boomerang', 7));

//#Source https://bit.ly/2neWfJ2 
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

console.log(takeWhile([1, 2, 3, 4], n => n >= 3));

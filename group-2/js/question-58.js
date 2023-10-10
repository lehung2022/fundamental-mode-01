//#Source https://bit.ly/2neWfJ2 
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));

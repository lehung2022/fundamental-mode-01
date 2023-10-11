//#Source https://bit.ly/2neWfJ2 
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
console.log(coalesce(null, undefined, '', NaN, 'abcd'));

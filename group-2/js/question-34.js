//#Source https://bit.ly/2neWfJ2 
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomIntegerInRange(0, 5));
console.log(randomIntegerInRange(2, 5));
console.log(randomIntegerInRange(5, -5));
console.log(randomIntegerInRange(-2, -7));

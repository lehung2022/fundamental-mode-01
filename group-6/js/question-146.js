//#Source https://bit.ly/2neWfJ2 
const shallowClone = obj => Object.assign({}, obj);
const a = { x: true, y: 1 };
const b = shallowClone(a);  

console.log(b);

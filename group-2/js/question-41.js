//#Source https://bit.ly/2neWfJ2 
const object_From_Pairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
console.log(object_From_Pairs([['a', 1], ['b', 2]])); 
console.log(object_From_Pairs([[1, 10], [2, 20], [3, 30]]));

// First solution
const allStudentsAge = [19, 22, 18, 19, 16, 18, 19, 21, 24];
let target = 19;

let counter = 0;
for (studentAge of allStudentsAge) {
  if (studentAge == target) {
        counter++;
    }
};

console.log(counter); // 3
// Second solution 
const data = [11, 21, 46, 19, 10]
let len = data.length
console.log(len)
// Third solution
//#Source https://bit.ly/2neWfJ2 
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

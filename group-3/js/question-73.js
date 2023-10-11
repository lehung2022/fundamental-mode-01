// Compare differences between two arrays, method 1
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8];
let difference = arr1.filter(x => arr2.indexOf(x) === -1);
console.log(difference);

// Compare differences between two arrays, method 2
const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(v => fn(v)));
    return a.filter(x => !s.has(fn(x)));
  };
  console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
  console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));
  
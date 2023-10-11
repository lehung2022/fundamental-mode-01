// Filter out all values in an array, method 1
var creatures = [
    { name: "Shark", habitat: "Ocean" },
    { name: "Whale", habitat: "Ocean" },
    { name: "Lion", habitat: "Savanna" },
    { name: "Monkey", habitat: "Jungle" }
];
var aquaticCreatures = creatures.filter(function (creature) {
    return creature.habitat == "Ocean";
});

console.log(aquaticCreatures);
// Filter out all values in an array, method 1
// Filter out all values in an array, method 2
let people = [
    { name: "aaron", age: 65 },
    { name: "beth", age: 2 },
    { name: "cara", age: 13 },
    { name: "daniel", age: 3 },
    { name: "ella", age: 25 },
    { name: "fin", age: 1 },
    { name: "george", age: 43 },
]

let toddlers = people.filter(person => person.age <= 3)

console.log(toddlers)
// Filter out all values in an array, method 2
// Filter out all values in an array, method 3


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArr = [];
const myFilter = (value) => {
    return Boolean(value % 2);
};

arr.filter((element) => {
    if (myFilter(element) === false) {
        filteredArr.push(element);
    }
});
console.log(filteredArr);
// Filter out all values in an array, method 3
// Filter out all values in an array, method 4
//#Source https://bit.ly/2neWfJ2 
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
console.log(differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)));
// Filter out all values in an array, method 4
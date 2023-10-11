// Create a deep clone of an object, method 1
const copyObject = object => {

    let copiedObj = {};

    for (let key in object) {
        copiedObj[key] = object[key];
    }

    return copiedObj;
};
const testObject = {
    a: 5,
    b: 6,
    c: {
        d: 4
    }
};
copyObject(testObject);
console.log(copyObject(testObject));
// Create a deep clone of an object, method 2
const interface = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(),  // stringified
    undef: undefined,  // lost
    inf: Infinity,  // forced to 'null'
    re: /.*/,  // lost
}
console.log(interface);
console.log(typeof interface.date);  // Date object
const clone = JSON.parse(JSON.stringify(interface));
console.log(clone);
console.log(typeof clone.date);  // result of .toISOString()
//   Deep clone of an object, method 3, spread operator
var student1 = {
    name: "Manish",
    company: "Gfg"

}

var student2 = { ...student1 };

student1.name = "Rakesh"

console.log("student 1 name is", student1.name)
console.log("student 2 name is ", student2.name);
// Deep clone, method 4, using Object.assign
var student1 = {
    name: "Manish",
    company: "Gfg"
}

var student2 = Object.assign({}, student1);

student1.name = "Rakesh"

console.log("student 1 name is", student1.name)
console.log("student 2 name is ", student2.name);
// Method 5, from w3resource
//#Source https://bit.ly/2neWfJ2 
const deepClone = obj => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
        key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log(b)

let array = [1, 2, 2, 3, 4,
    5, 6, 6, 7, 8, 8, 8];
console.log(
    "Before filtering non unique values: "
    + array);

let unique =
    array.filter((value, index) => {
        return array.indexOf(value) === array.lastIndexOf(value);
    });
console.log(
    "After filtering non unique values: "
    + unique);
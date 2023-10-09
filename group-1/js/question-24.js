// program to convert first letter of a string to uppercase
function decapitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toLowerCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = decapitalizeFirstLetter(string);

console.log(result);
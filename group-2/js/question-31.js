//Javascript program to find all
//element of an array except first
 
//function which takes an array as argument
const print = (arr) => {
 
    //creating a dummy array to store result
    const find = []
 
    //a counter for adding result
    let k = 0
 
    for (let i = 1; i < arr.length; i++) {
        find[k] = arr[i]
        k++
    }
    //returning resultant array
    return find
}
//input array
const arr = [1, 2, 3, 4, 5]
 
//printing the result
console.log(print(arr));
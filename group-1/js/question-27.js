// Function which takes an array as argument
const print = (arr1,arr2) => {
     
    // Creating a set with elements of arr1
    const set = new Set(arr1)
 
    // Adding elements of arr2
    arr2.forEach(element => {
        set.add(element)
    });
 
    // Returning resultant array
    return set
}
 
// Input array
const arr1 = [10, 20, 30, 40, 50]
const arr2 = [10,20,34,32,11]
  
// Printing the result
console.log(print(arr1,arr2))
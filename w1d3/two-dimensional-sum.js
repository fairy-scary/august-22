/*Two Dimensional Sum
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.*/

/* 1. Understand the Problem 
    - add up all values  within all nested arrays
    - returns sum
  
*/

/* 2. Make a plan 
    - holding variable for sum
    - nested loop to access values
    - add all values in array together

*/

/* 3. Carry out the plan */

function twoDimensionalSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        let innerArray = arr[i]
        //console.log(innerArray)

        for(let j = 0; j < innerArray.length; j++) {
            //console.log(innerArray[j])
            sum += innerArray[j]
        }
    }
    return sum
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6
/* Doubler
Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.
*/

/* 1. Understand the problem
    taking in an array 
    multiply the value at each index by 2
    no ifs
    returning new array
*/

/* 2. Make a plan (pseudo code here)
    initialize holding []
    iterate array with a loop to grab each number
    push those new array
    return finished array after loop completes
*/

// 3. Carry out the plan (write your code here)

let doubler = function(arr) {
    let newArray = []
    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        //ele *= 2
        //let doubled = ele * 2
        newArray.push(doubled)
    }
    return newArray
}

console.log(doubler([1, 2, 3])); // => [2, 4, 6]



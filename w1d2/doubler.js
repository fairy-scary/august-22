/* Doubler
Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.
*/

/* 1. Understand the problem
    taking in an array
    multiply the int at each ele by 2
    no ifs
    returning new array
*/

/* 2. Make a plan (pseudo code here)
neeed a holding array 
iterate the array with a loop to grab each number
push each doubled number to new array
return finished new array after loop completes

*/

// 3. Carry out the plan (write your code here)

function doubler(arr) {
    let newArray = []

    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        //ele *= 2
        let doubled = ele * 2
        newArray.push(doubled)
    }

    return newArray
}



console.log(doubler([1, 2, 3])); // => [2, 4, 6]



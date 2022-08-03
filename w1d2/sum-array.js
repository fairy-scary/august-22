/*Sum Array
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.*/

/* 1. Understand the problem 
    Add together all the number in the array
    Return the sum
    
*/

/* 2. Make a plan (pseudo code here) 
use a loop to iterate array and extract values
create holding variable of loop
use assignment shorthand inside loop to administer the value of the holding variable
    
*/

// 3. Carry out the plan (write your code here) 

function sumArray(array) {

    let sum = 0
    for(let i = 0; i < array.length; i++) {
        let ele = array[i]

        

        sum += ele
    }
    return sum

}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
console.log(sumArray([1, 2, 3, "cat", 4, 5]))


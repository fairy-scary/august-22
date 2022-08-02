/*Sum Array
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.*/

/* 1. Understand the problem 
    Adding together all numbers stored in an array
    Returning the sum
*/

/* 2. Make a plan (pseudo code here) 
    Use a loop to iterate array and extract values
    Create holding variable outside of loop 
    Use assignment shorthand inside loop to administer the value of the holding variable
*/

// 3. Carry out the plan (write your code here) 

function sumArray(array) {

    let sum = 0
    for(let i = 0; i < array.length; i++) {
        // console.log("sum 1 ",sum)
        let ele = array[i]
        //if(typeof ele !== "number") //show continue and break
        // console.log("ele ",ele)
        sum += ele
       // console.log("sum 2 ", sum)
    }
    return sum
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30
//console.log(sumArray([1, 2, 3, "cat", 4]))


//Bonus Edge Case: What if array contains elements that aren't numbers?
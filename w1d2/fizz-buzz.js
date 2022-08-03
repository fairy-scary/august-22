/* Fizz Buzz
 Define a function fizzBuzz(max) that takes a number and prints
every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not
both. */

/* 1. Understand the problem
    takes in an int 
    checking  each int before max for divisor matches
    PRINT matches  
*/

/* 2. Make a plan (pseudo code here)
    define the functio
    counting loop to isolate integers
    boolean expression to check for divisor match
    if true, console log
    false continues loop
*/

// 3. Carry out the plan (write your code here)

function fizzBuzz(max) {
    for(let i = 2; i < max; i++) {
        if(i % 3 === 0 && i % 5 === 0) continue
        if(i % 3 === 0 || i % 5 === 0) console.log(i)
    }
}


// Examples:

fizzBuzz(20); // prints out:
3
5
6
9
10
12
18
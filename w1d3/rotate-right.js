/* Rotate Right
Write a function rotateRight(array, num) that takes in an array and a number as args. The function should return a new array where the elements of the array are rotated to the right num times. The function should not mutate the original array and instead return a new array. 

Define this function using function expression syntax. 

HINT: you can use Array's slice() method to create a copy of an array */

/* 1. Understand the Problem 
    - takes in array and num(elements to be rotated)
    - don't mutate original(use slice)
    - return mutated array then rotated
*/

/* 2. Make a plan 
    - make copy variable of array wit slice
    - use pop and unshift to move elements around
    - perform iteration num times
    - return mutated copy
*/

/* 3. Carry out the plan */

let rotateRight = function(array, num) {
    
    let copy = array.slice()

    for(let i = 0; i < num; i++) {
        let popped = copy.pop()
        copy.unshift(popped)
    }

    return copy
}



let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
//console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
//console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
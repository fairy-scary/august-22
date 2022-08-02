/* isPrime
 Define a function isPrime(number) that returns 
 true if number is prime. Otherwise, false. 
 A number is prime if it is 
 only divisible by 1 and itself.
 Better definition: a prime number has exactly two distinct 
 factors, 1 and itself, or that a prime is a whole number 
 greater than 1 that is only divisible by 1 and itself.
*/

/* 1. Understand the problem
determine if the number is prime
no number between 1 and a prime number itself should be able to divide that prime number into an integer
return boolean if t/f
*/

/* 2. Make a plan (pseudo code here)
use a "counting" loop to grab every number Between 2 and num(bc 1 and 2 are prime)
each time we iterate we want to check (conditional) if each integer is a factor of the number 
if the number is divisable by an integer (num % i === 0) return false
after iterating completely return true if no factors found
*/

// 3. Carry out the plan (write your code here)

let isPrime = function(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0){
            return false
    }
}
    return true
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
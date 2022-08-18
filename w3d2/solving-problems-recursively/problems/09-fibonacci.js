/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!


Examples:
fibonacci(1); // 1 
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(6); // 8
fibonacci(10); // 55                                             
 
***********************************************************************/

function iterativeFib(n) {

  if(n < 3) return 1

  let prev = 1
  let curr = 1

  for(let i = 2; i < n; i++){

    const next = prev + curr
    prev = curr
    curr = next
  }

  return  curr
  
}

/* 

Call Stack
fib(6) = fib(5) + fib(4) = 5 + 3 = 8
         fib(5) = fib(4) + fib(3) = 3 + 2 = 5
                  fib(4) = fib(3) + fib(2) = 2 + 1 = 3
                           fib(3) = fib(2) + fib(1) = 1 + 1 = 2
*/

function fibonacci(n) {

if(n < 3) return 1

return fibonacci(n - 1) + fibonacci(n - 2)
                    
}

console.log(iterativeFib(6)) //8
console.log(fibonacci(6)) // 8
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
  
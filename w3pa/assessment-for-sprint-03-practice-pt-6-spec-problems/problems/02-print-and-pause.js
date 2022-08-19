/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/
/* PLAN:
-TAKES IN ARRAY OF NUMS
-RECURSION EMPTIES ARRAY
-Each ele IS delay - prints ITSELF */

function printAndPause(nums) {
  
  // 4. Recursion Base Case tests for empty array and *breaks/ends* function
  if (!nums.length) return;

  // 1. Recursive step removes(mutates)/stores value of ele
  let pause = nums.shift()
  // 2. Need to print BEFORE we pause
  console.log(pause);
  // 3. What this does: waits 00ms to invoke itself with mutated array
  setTimeout(function() {printAndPause(nums)}, pause);
                        //1st recurse ([800, 200, 800, 200, 800]), 200
                                //2nd recurse ([200, 800, 200, 800]), 800
                                      //3rd recurse ([800, 200, 800]), 200
                                            //4th recurse ([200, 800]), 800
                                                  //5th recurse ([800]), 200
                                                        //6th recurse ([]), 800

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

// base case - no nums add up to 12 OR two nums add up to 12

// recursive step - slice first element out each time arg is passed


Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

function iterativeAdd(arr) {
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] + arr[i+1] === 12) return true
  }

  return false
  
}

function addToTwelve(arr) {

  if (arr.length < 2) return false
  if (arr[0] + arr[1] === 12) return true
  // 1 + 3 before recursion
  // 3 + 4
  // 4 + 7

  return addToTwelve(arr.slice(1))    
         //////////////[3,4,7,5]//////////////
                       //////////////[4,7,5]//////////////
                                     //////////////[7,5]////////////// 
                                                   //////////////[5]//////////////                
                         
}


console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
console.log(iterativeAdd([1, 3, 4, 7, 5])); // true
console.log(iterativeAdd([1, 3, 4, 7, 6])); // false
console.log(addToTwelve([1])); // false
console.log(iterativeAdd([1])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}

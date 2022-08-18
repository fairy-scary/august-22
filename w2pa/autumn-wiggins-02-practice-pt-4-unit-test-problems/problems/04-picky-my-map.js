/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.

// PLAN:
/* 
Args -
  - array and cb
   
Return - 
  - array w/ results of passing cb to each ele
  - falsey values excluded

Ideas -
  - holding variable, loop, falsey logic test to add to array
***********************************************************************/

function pickyMyMap(arr, cb) {

	const resultArr = []

  for(let i = 0; i < arr.length; i++) {
    const result = cb(arr[i])
    if(result) resultArr.push(result)
  }

  return resultArr
	
}

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}

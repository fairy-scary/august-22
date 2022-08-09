function isSorted(nums) {

    // Loop through each number
    for (let i = 1 ; i < nums.length ; i++) { //1. index should start at 1 because we're checking i-1 later

        // Check if the current number is less than
        // the previous number
        if (nums[i - 1] > nums[i]) { // 2. reverse logic or they all get false
            // If it's not, return false
            return false;
        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;

}

console.log(isSorted([1, 2, 3, 4, 5]))// true
console.log(isSorted([2, 2, 4, 4]))//true
console.log(isSorted([1, 2, 4, 3, 5, 6]))  // false

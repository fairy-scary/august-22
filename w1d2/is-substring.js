/* Is Substring
So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the String.indexOf() method. 

Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.*/


/* 1. Understand the problem
    1st string arg is a sentence
    2nd string arg a word we're looking for in the sentence
    case insensitive
    use indexOf to iterate
    return t/f of existence

*/

/* 2. Make a plan (pseudo code here)
    make both args lower case
    use indexOf to determine boolean 

*/

// 3. Carry out the plan (write your code here)

function isSubstring(searchString, subString) {
    let lowerSearch = searchString.toLowerCase()
    let lowerSub = subString.toLowerCase()


    return lowerSearch.indexOf(lowerSub) !== -1

    
  }
  
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
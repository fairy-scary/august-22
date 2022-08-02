/* Is Substring
So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the String.indexOf() method. 

Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.*/


/* 1. Understand the problem
    1st string argument a sentence
    2nd string argument a word we're looking for in sentence
    case insenstive 
    indexOf() on MDN
    return t/f of existence

*/

/* 2. Make a plan (pseudo code here)
    make sentence and word lowercase
    use .indexOf to determine boolean (will return -1 if not found)

*/

// 3. Carry out the plan (write your code here)

function isSubstring(searchString, subString) {

    let lowerSearch = searchString.toLowerCase()
    let lowerSubString = subString.toLowerCase()

    //console.log(lowerSearch.indexOf(lowerSubString))
    //if(lowerSearch.indexOf(lowerSubString)!== -1) return true
    //else return false

    //return searchString.toLowerCase().indexOf(subString.toLowerCase()) !== -1

    
  }
  
  console.log(isSubstring("The cat went to the store", "he cat went")); // => true
  console.log(isSubstring("Time to program", "time")); // => true
  console.log(isSubstring("Jump for joy", "joys")); // => false
/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

// PLAN:
/* 
Args -
    - string
	- minCount(letter frequency criteria)

Return - 
    - array with letters that meet frequency criteria

Ideas -
	- track count with an object made in helper function
	- filter through array of keys to create array of letters >= mincount
*/


function countCharacters(string) { 
	
	let charTracker = {} //make obj to hold the count

	for(let i = 0; i < string.length; i++) {
		//console.log(charTracker[string[i]]) //comes up undefined (not falsey)
		if(charTracker[string[i]] === undefined) { //need to use equivelancy
			charTracker[string[i]] = 1 //adding character as key and initial count
		} else {
			charTracker[string[i]] += 1 //incrementing count if letter is found again
		}
	}
	//console.log(charTracker)
	return charTracker

}

function duplicateCharMinCount(string, minCount) {

	let counter = countCharacters(string) //not same variable in memory - scoped!

	let letters = Object.keys(counter) //array of keys(letters)
	return letters.filter(letter => counter[letter] >= minCount) //filter creates array by checking if the value at each key >= the mincount

}

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;

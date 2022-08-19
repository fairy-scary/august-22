/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.

Each recursive step should count the vowels in the last string in the array
and add them to the `counter`. Return the vowel with the greatest count in
the `counter` object.

Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
mostFrequentVowel(words, counter)

// Example:
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

Run tests on just this file by typing `npm test test/03-most-frequent-vowel-spec.js`
on the command line.

***********************************************************************/
/* PLAN:
1. need to isolate last ele(word) and send up to helper(countVowels) that counts vowels and creates counter
2. to solve recursively, need to send array eles up to counter, when empty, send counter to other helper(mostVowel) that that analyzes and returns result (high value vowel or "" if none)
3. base case exits program with result
4(countVowels).  use loop to create/add to key/value pairs to default counter param, not returning anything because only purpose is to mutate counter at each recurse
5.(mostVowel) needs to iterate through vowels to see if KEY/VAL Exists, and if so, is it's value > all the others(tracking variable for "max"). Also need to keep track of vowel itself with holding variable
  
*/
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(word, counter) {
  //4. use loop to create/add to key/value pairs to default counter param, not returning anything because only purpose is to mutate counter at each recurse
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (VOWELS.includes(letter)) {
      if (counter[letter]) {
        counter[letter]++;
      }
      else {
        counter[letter] = 1;
      }
    }
  }
}

function mostVowel(counter) {
  // 5. need to iterate through vowels to see if KEY/VAL Exists, and if so is it's value > all the others(tracking variable for "max"). Also need to keep track of vowel itself with holding variable
  let max = 0;
  let mostFrequent = "";
  for (let i = 0; i < VOWELS.length; i++) {
    const vowel = VOWELS[i];
    if (counter[vowel] && counter[vowel] > max) {
      max = counter[vowel];
      mostFrequent = vowel;
    }
  }
  return mostFrequent;
}

const mostFrequentVowel = function (words, counter = {}) {
  //3. base case exits program with result
  if (!words.length) {
    return mostVowel(counter);
  }

  //1. need to isolate last ele(word) and send up to helper that counts vowels and creates counter
  const lastWord = words.pop();
  countVowels(lastWord, counter); //will make helper

  //2. to solve recursively, need to send array eles up to counter, when empty, send counter to mostVowel helper that that analyzes and returns result (mostVowel or "" if none)
  return mostFrequentVowel(words, counter);

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}
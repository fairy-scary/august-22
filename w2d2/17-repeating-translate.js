/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/

//translate sentence(Caps intact) with:
// if word.length > 3 = unchanged
// if word.length > 3
        //word[-1].includes(vowels) = wordword
            //else = word + word.slice(vowelIndex, -1)

//plan: split, map with translate function, re-join
let repeatingTranslate = function(sentence) {
    let splitSentence = sentence.split(" ")

    let translated = splitSentence.map(word => {
        return translateWord(word)
    })
    
    return translated.join(" ")

};

//pass word to, return mutation
let translateWord = function(word) {

    let vowels = "aeiou"

    if (word.length < 3) return word

    if (vowels.includes(word[word.length - 1])) return word + word
    
    for(let i = word.length -1; i >=0 ; i--) {
       if (vowels.includes(word[i])) {
            return word + word.slice(i)
        }
    } 
};


console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
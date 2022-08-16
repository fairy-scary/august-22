/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

const iterativeReverse = (str) => {

  let newStrArr = []
  
  for(let i = 0; i < str.length; i++) {
    newStrArr.unshift(str[i])
  }
  
  return newStrArr.join("")
  
  }
  
function reverse(str) {

  if (!str.length) return str

  //recursive step - need to reduce length of string to reach 0, do this through adjusting string argument in recursion
  // slicing off each letter at [1]
  console.log("line 33", str)
  return reverse(str.slice(1)) + str[0]


}


console.log(iterativeReverse("house")); // "esuoh"
console.log(iterativeReverse("dog")); // "god"
console.log(iterativeReverse("atom")); // "mota"
console.log(iterativeReverse("q")); // "q"
console.log(iterativeReverse("id")); // "di"
console.log(iterativeReverse("")); // ""

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}

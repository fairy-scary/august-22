/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []


***********************************************************************/
const iterativeRange = (start, end) => {

  if(end <= start) return []

  let arr = []

  for(let i = start; i < end; i++){
    arr.push(i)
  }

  return arr

}

function range(start, end) {

      
      if (end <= start) return []
      
      return [start].concat(range(start + 1, end))
              
                [1]  +   [2]  +  [3]


}


console.log(iterativeRange(1, 5))
console.log(iterativeRange(3, 4))
console.log(iterativeRange(7, 6))

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}

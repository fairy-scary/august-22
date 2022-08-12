/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

// PLAN:
/* 
Args -
   -  obj, 
   -  string to-be key in obj(if value given is new), 
   -  value to search for and add to new key(if it's new!)

Return - 
    mutated obj that gets passed to next function call
*/

function keyAdderUniqueVal(object, key, value) {

    const values = Object.values(object); // make array of values passed in
    //console.log(values)
	if (!values.includes(value)) { //check that value arg is NOT in array
		object[key] = value; //then add the key/value to object
	}
	return object;//mutated object is returned and passed to next function call
        
}

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;

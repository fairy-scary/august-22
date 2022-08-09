/* 
1. Understand and plan
	capitalize - word[0].toUpperCase() + word.slice(1)
    
    uppercase - word.toUpperCase()
    
    double - word + word
    
    reverse - word.split("").reverse().join("")
    
*/


function stringChanger(word, operation) {
    
    if(operation === "capitalize") return word[0].toUpperCase() + word.slice(1)
    if(operation === "uppercase") return word.toUpperCase()
    if(operation === "double") return word + word
    if(operation === "reverse") return word.split("").reverse().join("")
    
    //.split("") ["f","o","o"]
    // .reverse() ["o","o","f"]
    // .join("") oof
    
    return word
    
  }
  
  // TESTS
  // DO NOT MODIFY ANYTHING BELOW THIS LINE
  
  let score = 0;
  
  if (stringChanger("foo", "capitalize") === "Foo") score++;
  if (stringChanger("foo", "uppercase") === "FOO") score++;
  if (stringChanger("foo", "double") === "foofoo") score++;
  if (stringChanger("foo", "reverse") === "oof") score++;
  
  if (stringChanger("foo", "unknown") === "foo") score++;
  
  console.log("You have scored " + score + "/5 points.");
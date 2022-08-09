/* 
1. Understand
	func + helper func
    1. takes in an array of items, returns a total cost
    2. takes in 2D array with subarrays of items, returns index of subarray with highest cost
    
        we're sending each array inside the 2D up to highest cost func

        returning index of whichever one has > value than rest

2. Plan
	write func1 1st - make a "totalCost" holding variable, loop array, if-item-then add amount to cost variable, 
	return totalCost after loop completes
    
    2nd func - holding variables for cost and index, loop 2D array, pass groceriesList[i] to func1 and store in 
		variable(inside loop) -> compare to cost variable, if > then reassign cost AND index variables

*/


// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
    let totalCost = 0
    
    for(let i = 0; i < groceries.length; i++) {
      
    	let item = groceries[i]
        
    	if("butter" === item) totalCost += 1
      	if("eggs" === item) totalCost += 2
      	if("milk" === item) totalCost += 3
      	if("bread" === item) totalCost += 4
      	if("cheese" === item) totalCost += 5
    }
	
  	return totalCost
}


function mostExpensiveGroceries(groceriesList) {
  
    let highCost = 0
    let highIndex = 0
    
    for(let i = 0; i < groceriesList.length; i++) {
      let cost = costOfGroceries(groceriesList[i])
      if(cost > highCost) {
      	highCost = cost
        highIndex = i
      }
    }
  
  	return highIndex
        
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
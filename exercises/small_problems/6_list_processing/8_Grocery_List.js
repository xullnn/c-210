// initialize a container array
  // iterate through given array
    // for(i = 0; i < array[2]) push array[0]

function buyFruit(groceries) {
  let fruits = [];

  groceries.forEach(grocery => {
    for(let i = 0; i < grocery[1]; i += 1) {
      fruits.push(grocery[0]);
    }
  })

  return fruits;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

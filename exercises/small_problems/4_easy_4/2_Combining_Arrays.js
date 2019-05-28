// initialize an empty array
// iterate throuhg each sub array
//   test if current element is included in the container array
//   push it into container array if it's not
// return container array

function union(...arrays) {
  let newArr = [];
  
  arrays.forEach(subArr => subArr.forEach(num => {
    if (!newArr.includes(num)) newArr.push(num);
  }))

  return newArr;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

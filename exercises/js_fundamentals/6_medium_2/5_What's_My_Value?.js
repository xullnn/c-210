var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';                  // add a property '3.4': 'Oranges' to array object
console.log(array.length);               // 3
console.log(Object.keys(array).length);  // 4. Object.keys(array) return number of all keys(elements and other properties)

array[-2] = 'Watermelon';                // add '-2': 'Watermelon' to array object
console.log(array.length);               // 3
console.log(Object.keys(array).length);  // 5

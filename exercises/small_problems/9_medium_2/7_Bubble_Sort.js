// iterate through an array multiple times
// each iteration round
//   compare every consecutive 2 numbers from leff to right
//     0 <=> 1              swap if 0 > 1
//           1 <=> 2        swap if 1 > 2
//                 2 <=> 3  swap if 2 > 3
//                       ...
//                      n - 2 <=> n - 1
// if all comparison in an iteration round doesn't swap any elements then sorting ends
// return the sorted array
//
// swaping will be changing the array "in-place"
//
// initialize a varaible swapped to false
// construct a loop A; set a starting index s from 0 to n - 2
// reset swapped to false
//   construct another loop initialize two variables a and b
//   set a to starting index s, b = a + 1, b < n, a += 1, b += 1
//   compare a and b
//     if a > b
//       swap them
//       set swapped to true;
//   return array if swapped === false
//
// how to swap elements with given indexes?
//   copy value of a
//   then set array[a] = array[b], array[b] = value of a

function bubbleSort(numbers) {
  let swapped;
  let width = numbers.length;
  
  do {
    swapped = false
    let a;
    let b;
    for(a = 0, b = a + 1; b < width; a += 1, b += 1) {
      console.log(a, b)
      if (numbers[a] > numbers[b]) {
        console.log('swap')
        valueOfA = numbers[a];
        numbers[a] = numbers[b];
        numbers[b] = valueOfA;
        swapped = true;
      }
    }
  } while (swapped)

  return numbers;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

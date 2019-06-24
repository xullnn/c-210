function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let midTerm;
  let midIndex;

  while (start <= end) {
    midIndex = Math.floor((start + end) / 2);
    midTerm = array[midIndex];

    if (midTerm === target) {
      return midIndex;
    } else if (midTerm > target) {
      end = midIndex - 1;
    } else if (midTerm < target) {
      start = midIndex + 1;
    }
  }

  return -1;
}

var yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6


// find the middle term, and compare with the target
  // if found, then return the index
  // if middle term > target then discard the right half
  // if middle term < target then discard the left half
  // use the remained half as the next searching pool to the next searching iteration


// set the start index to 0, end index to the last index
// while start index !== end index
// locate(updating) the middle term? Math.floor((endIndex + start)) / 2) midIndex
  // midTerm = array[midIndex]
  // if midTerm === target
    // return midIndex
  // if midTerm > target
    // update endIndex to midIndex - 1
  // if midTerm < target
    // update start index to midIndex + 1

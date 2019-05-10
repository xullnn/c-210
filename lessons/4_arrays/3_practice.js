// first index

// return index as soon as first encounterd

function indexOf(arr, inst) {
  for(var i = 0; i < arr.length; i += 1) {
    if (inst === arr[i]) return i;
  }

  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1


// initialize an index traker
// iterate through the whole array
  // whenever meet a same inst, update index tracker
// return index traker's value


function lastIndexOf(arr, inst) {
  var lastIndex = -1;
  for(i = 0; i < arr.length; i += 1) {
    if (inst === arr[i]) {
      lastIndex = i;
    }
  }

  return lastIndex;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1

// or we can do this inversely

function lastIndexOf(arr, inst) {
  for(var i = arr.length - 1; i >= 0; i -=1) {
    if(inst === arr[i]) return i;
  }

  return -1;
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);  

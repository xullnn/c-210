function lastInArray(arr) {
  return arr[arr.length - 1];
}

//

function rollCall(names) {
  for(var i= 0; i < names.length; i += 1) {
    console.log(names[i])
  }
}

//

function reverseArray(arr) {
  var newArr = [];

  for(var i = (arr.length - 1); i >= 0; i -= 1) {
    newArr.push(arr[i])
  }

  return newArr;
}

//

function findInstance(arr, inst) {
  for(var i = 0; i < arr.length; i += 1) {
    if (arr[i] === inst) return i;
  }

  return -1;
}

//

function joinArray(arr) {
  var str = '';

  for(var i = 0; i < arr.length; i += 1) {
    str += String(arr[i])
  }
  
  return str;
}

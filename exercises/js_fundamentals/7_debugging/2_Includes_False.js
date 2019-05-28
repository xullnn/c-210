// function includesFalse(list) {
//   var i;
//   var element;
//
//   for (i = 0; i < list.length; i++) {
//     element = list[i];
//
//     if (element == false) {  // ? use triple equal operator
//       return true;
//     }
//   }
//
//   return false;
// }

function includesFalse(list) {
  var i;
  var element;

  for (i = 0; i < list.length; i++) {
    element = list[i];

    if (element === false) {  // ? use triple equal operator
      return true;
    }
  }

  return false;
}

                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // false

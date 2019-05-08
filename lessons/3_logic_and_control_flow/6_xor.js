// there must be exactly one truthy value

// first convert both values into boolean
// use || and && to check if there's only one truthy value
  // (a || b === true) && (a && b === false)

function isXor(a, b) {
  return ((a || b) === true) && ((a && b) === false); // Boolean((a || b) && !(a && b))
}

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false

// better one

// return Boolean(a) !== Boolean(b)

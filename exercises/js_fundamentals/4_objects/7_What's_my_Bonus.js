function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// In js, inside any function, we can use `arguments` to capture all the passed in arguemnts as an array-like object
// We can use bracket notation to retrieve corresponding argument
//

// first check if all sides are greater than 0
// check if sum of any two sides is greater than the third side
// determine which kind the triangle falls into
  // check for equilateral
  // check for isosceles
  // scalene


function triangle(a, b, c) {
  let sides = Array.prototype.slice.call(arguments);
  // validity check
  if (sides.some(side => side <= 0)) return 'invalid'
  else if (combinationsOfTwoSides(a, b, c).some(twoSides => {
    return twoSides[0] + twoSides[1] <= theThridSide(sides, twoSides)
  })) return 'invalid'
  // type check
  if (a === b && b === c) return 'equilateral'
  else if (isIsosceles(a, b, c)) return 'isosceles'
  else return 'scalene'
}

function isIsosceles(a, b, c) {
  return combinationsOfTwoSides(a, b, c).some(combination => combination[0] === combination[1]);
}

function theThridSide(allSides, twoSides) {
  return allSides.filter(side => !twoSides.some(s => s === side))[0]
}

function combinationsOfTwoSides(a, b, c) {
  let combinations = []

  for(let i = 0; i < arguments.length; i += 1) {
    for(let ii = (i + 1); ii < arguments.length; ii += 1) {
      combinations.push([arguments[i], arguments[ii]]);
    }
  }

  return combinations;
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"


// another way is to use perimeter two get the third side
// use Math.min and max to get the longest and the shortest side
// then we can get the middle side
  // the shortest side shoule be > 0
  // shortest + middle > greatest

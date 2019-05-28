// use splice
// starting index Math.ceil(length / 2) - 1
// ending index starting index + Number(str.length % 2 === 0)

function centerOf(str) {
  let startIndex = Math.ceil(str.length / 2) - 1;
  let indexIncrement = str.length % 2 === 0 ? 2 : 1;
  return str.slice(startIndex, startIndex + indexIncrement);
}

centerOf('I Love Ruby');      // "e"
centerOf('Launch School');    // " "
centerOf('Launch');           // "un"
centerOf('Launchschool');     // "hs"
centerOf('x');                // "x"

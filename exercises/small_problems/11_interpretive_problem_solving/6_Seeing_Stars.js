*  *  *  line: 0 => preceeding spaces 0 => interval 2 (last index - current index)
 * * *   line: 1 => preceeding spaces 1 => interval 1
  ***    line: 2 => preceeding spaces 2 => interval 0

// *******

//   ***
//  * * *
// *  *  *


// generate an array to hold the upper part
//   ['*  *  * ', '  * * *', '   ***']
//   copy the upper array and reverse it
//   push the middle line: '*'.repeat(n)
//   concat the lower part to the array
//
// lines = []
// for loop to push each line into an array
// for single line:
//   num of preceeding spaces = index of line
//   interval = lines.length - 1 - index
//   num preceeding spaces * ' ' concat '*' concat repeat twice (' '.repeat(interval) + '*')
// join


function upperPart(n) {
  let lineAmount = Math.floor(n / 2);
  let lines = [];
  let preSpaces;
  let interval;

  for(let i = 0; i < lineAmount; i += 1) {
    preSpaces = ' '.repeat(i);
    interval = ' '.repeat(lineAmount - 1 - i);
    lines.push(preSpaces + '*' + (interval + '*').repeat(2))
  }

  return lines;
}

function star(n) {
  let upperStars = upperPart(n);
  let lowerStars = upperStars.slice(0).reverse();
  let stars = [upperStars, '*'.repeat(n), lowerStars].flat();

  stars.forEach(star => console.log(star));
}

star(7);
star(9);

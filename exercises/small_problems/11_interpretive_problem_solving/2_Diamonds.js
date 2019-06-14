// - create an array to hold each line
//   - every line is represented by a string '    *', '   ***' ... '*********'
// - iterate through the array
//   - log it out
//
// - up part?
//   - find out the preceeding spaces
//     - from Math.floor(n / 2), decrease to 1
//   - find out the starts
//     - from 1 to n - 2, increment 2 every step

// map through the preceeding spaces array with index
//   concat the spaces with the starts

// - middle part(repeat the '*' n times)
// - down part(the reversal of up part)

function diamond(n) {

  let preceedingSpaces = [];

  for(let i = Math.floor(n / 2); i >= 1; i -= 1) { preceedingSpaces.push(' '.repeat(i))};
  let upStars = preceedingSpaces.map((spaces, index) => {
    return spaces + '*'.repeat(1 + 2 * index);
  })

  let downStars = upStars.slice(0).reverse();

  upStars.push('*'.repeat(n));
  let starLines = upStars.concat(downStars);

  starLines.forEach(line => console.log(line));
}

diamond(1);
diamond(3);
diamond(9);

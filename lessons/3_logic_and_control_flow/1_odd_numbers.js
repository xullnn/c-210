logOddNumbers(19);

// function logOddNumbers(max) {
//   for(let i = 0; i <= max; i += 1) {
//     if (i % 2 !== 0) console.log(i);
//   }
// }


// further exploration

function logOddNumbers(max) {
  for(let i = 0; i <= max; i += 1) {
    if (i % 2 === 0) continue;
    console.log(i);
  }
}

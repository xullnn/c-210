multiplesOfThreeAndFive();

function multiplesOfThreeAndFive() {
  for(let i = 3; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}!`);
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}


// function that takes a range
// function multiplesOfThreeAndFive(a, b) {
//   for(let i = a; i <= b; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i}!`);
//     } else if (i % 3 === 0 || i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// Possible path
// a (condition1) {
//   // ...
//   b (condition2) {
//     // ...
//   } c {
//     // ...
//   }
// } d {
//   // ...
//   e (condition4) {
//     // ...
//     f (condition5) {
//     // ...
//     }
//   }
// }

// - bypass
// - ac
// - ab
// - d
// - de
// - def

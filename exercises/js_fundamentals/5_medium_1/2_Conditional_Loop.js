var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// No. else branch will not be executed while encounter first satisfied number
// that is 0
// then the loop will stuck there

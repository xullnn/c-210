// convert number to string
// use reduce to iterate through string
  // set initial value to 0
  // anonymous function: acc + Number(string[i])

function sum(number) {
  return String(number).split('').reduce((acc, char) => acc + Number(char), 0)
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

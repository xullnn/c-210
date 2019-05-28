// 12345 % 10 => 5
// 12345 / 10 =floor=> 1234
//
// until 12345 / 10 =floor=> 0

function digitList(number) {
  let digits = [];

  while (Math.floor(number / 10 > 0)) {
    digits.unshift(number % 10);
    number = Math.floor(number / 10);
  }

  return digits;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

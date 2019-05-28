// can't use any built-in functions that convert string to integers
// set number to 0
// '4321' reverse to '1234'
  // find out length of Str
  // iterate through each char backwards
    // iterate through 1-9 (x)
      // if x.toString() === current char
      // number += x * (index(th) power of 10)

function stringToInteger(str) {
  var reversedChars = str.split('').reverse();
  var number = 0;

  for(let i = 0; i < str.length; i += 1) {
    for(let n = 0; n <= 9; n += 1) {
      if (n.toString() === reversedChars[i]) {
        number += (n * Math.pow(10, i));
      }
    }
  }

  return number;
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

initialize `number` to 0
split and reverse str `'4321'` becomes `['1', '2', '3', '4']`
iterate through reversed string digits
  for every iteration, go through from 0 to 9
    compare current string digit with current n.toString()
    when matched: number += 1 times index-th power of 10
return number

| string digit | index | accumulator |
| :-------------: | :-------------: | :-------------: |
| 1| 0| 0 + 1 * 10^0 = 1|
|2 |1 | 1 + 2 * 10^1 = 21|
|3 |2 | 21 + 3 * 10^2 = 321|
|4 |3 | 321 + 4 * 10^3 = 4321|

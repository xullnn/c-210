// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// > 1 === 1.0
// true
// > 2.30 === 2.3
// true
// > 1.234 === 1.234000
// true

// - convert string version number into decimals
//   - '1.2.3' => 1.23
//   - '1.2' => 1.2
//   - then compare them
//
// - how to convert string version number into decimals(Number)
//   - split by '.' then join back
//   - then convert to integer / 10 * number of digits - 1
//     - '1.2.3' => 123 / 100 => 1.23
//
// - compare and return -1 0 1

function versionToDecimal(versionNum) {
  let digits = versionNum.split('.');
  return Number(digits.join('')) / (Math.pow(10, (digits.length - 1)));
}

// console.log(versionToDecimal('1.2.3'))
// console.log(versionToDecimal('0.1'))
// console.log(versionToDecimal('1.0'))

// extract the invalid scenarios into an array



function compareVersions(version1, version2) {
  if (!/^[0-9]+(\.[0-9])*$/.test(version1) || !/^[0-9]+(\.[0-9])*$/.test(version1)) {
    return null;
  }

  let value1 = versionToDecimal(version1);
  let value2 = versionToDecimal(version2);

  if (value1 > value2) {
    return 1;
  } else if (value1 < value2) {
    return  -1;
  } else {
    return 0;
  }
}

// Should  be equal(return 0)
console.log(compareVersions('1.0', '1'))
console.log(compareVersions('1.0.0', '1.0'))
console.log(compareVersions('1.0.0', '1'))
console.log(compareVersions('1.0.1', '1.0.1.0'))
console.log(compareVersions('1.2.0', '1.2'))
console.log(compareVersions('1.2.3', '1.2.3.0.0'))

console.log('------------------------------------')

// Should return 1(greater than)
console.log(compareVersions('1.0', '0.9.9'))
console.log(compareVersions('1.1', '1.0.9'))
console.log(compareVersions('2.0', '1.9.9'))
console.log(compareVersions('12.0.1', '12.0.0'))

console.log('------------------------------------')
// Should return -1
console.log(compareVersions('0.1', '0.9.0'))
console.log(compareVersions('0.9.9', '1.0.0'))
console.log(compareVersions('99.0.1', '100.0.1'))
console.log(compareVersions('1.2.3.3', '1.2.3.4'))

console.log('------------------------------------')
// Invalid inputs
console.log(compareVersions('1.a', '1.0'))
console.log(compareVersions('a.b.c', '1.2.3.a'))
console.log(compareVersions('.1', '1'))
console.log(compareVersions('1..1', '1'))

console.log('------------------------------------')

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

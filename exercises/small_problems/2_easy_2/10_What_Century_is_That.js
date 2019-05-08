// calculate century number
// add suffix

// calculate century
  // number = parseInt(arg / 100) + Number(arg % 100 !== 0)

// add suffix
  // if last digit = 1 then + st
  // if last two digits is start_with 1 th
  // if last digit is 1 st
  // if last digit is 2 nd
  // if last digit is 3 rd
  // else th

// 1 st 2nd 3rd
// 11th 12th
// 21st 22end 23rd
// 31st 32end 33rd
// .
// 91 st
//
// 101st 102nd 103rd
// 111th 112th 113th

function findSuffix(century) {
  var numStr = String(century);

  if (numStr.split('').reverse()[1] === '1') { // if the first digit of the last two digits is '1'
    return 'th';
  }

  switch (numStr[numStr.length - 1]) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default:  return 'th';
  }
}

function century(n) {
  var number = parseInt(n / 100) + Number(n % 100 !== 0);
  return String(number) + findSuffix(number);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

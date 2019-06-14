letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }



// function letterCaseCount(str) {
//   let counts = { lowercase: 0, uppercase: 0, neither: 0 };
//
//   str.split('').forEach(char => {
//     for(type in regexCode) {
//       if (regexCode[type].test(char)) counts[type] += 1;
//     }
//   })
//
//   return counts;
// }

const regexCode = {
  lowercase: /[a-z]/g,
  uppercase: /[A-Z]/g,
  neither: /[^a-z]/ig,
}

function letterCaseCount(str) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  for(type in regexCode) {
    counts[type] = (str.match(regexCode[type]) || []).length;
  }

  return counts;
}

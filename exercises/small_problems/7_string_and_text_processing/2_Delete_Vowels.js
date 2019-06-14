// map
//   str.replace(/[aoeiu]/ig, '')

function removeVowels(words) {
  return words.map(word => {
    return word.replace(/[aoeiu]/ig, '');
  })
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

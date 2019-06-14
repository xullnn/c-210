let words = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen'
let wordsArray = words.split(', ');

function alphabeticNumberSort(numbers) {
  let word1;
  let word2;
  return numbers.sort((index1, index2) => {
    word1 = wordsArray[index1];
    word2 = wordsArray[index2];
    if (word1 > word2) {
      return 1;
    } else if (word1 < word2) {
      return  -1;
    } else {
      return 0;
    }
  });
}

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Can't use this because there exists words which have same beginning char
// then the comparison should continue

// return numbers.sort((index1, index2) => (wordsArray[index1].charCodeAt() - wordsArray[index2].charCodeAt()))

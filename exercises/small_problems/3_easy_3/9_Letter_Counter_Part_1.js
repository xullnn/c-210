// split string into words
// initialize an empty obj
// iterate through the words
//   count length of words
//   test if property of length exists?
//     true: +=1
//     false: set it to 1
// return obj

function wordSizes(str) {
  var words = str.split(' ');
  var obj = {};
  var charAmout;

  if (str.trim() === '') return obj;

  words.forEach(word => {
    charAmout = word.length;
    if (obj[String(charAmout)]) {
      obj[String(charAmout)] += 1;
    } else {
      obj[String(charAmout)] = 1;
    }
  })

  return obj;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');

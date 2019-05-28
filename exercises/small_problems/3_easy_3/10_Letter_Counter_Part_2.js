function letterLength(str) {
  return str.match(/[a-z]/ig).length;
}

function wordSizes(str) {
  var words = str.split(' ');
  var obj = {};
  var charAmout;

  if (str.trim() === '') return obj;

  words.forEach(word => {
    charAmout = letterLength(word);
    if (obj[String(charAmout)]) {
      obj[String(charAmout)] += 1;
    } else {
      obj[String(charAmout)] = 1;
    }
  })

  return obj;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

// lintel line '+' + '-' * (w + 2) + '+'
// empty line  '|' + ' ' * (w + 2) + '|'
// words line  '|' + ' ' + words + ' ' + '|'
// empty line
// lintel line


function logInBox(string, width = (string.length + 4)) {
  var lintelLine = '+' + '-'.repeat(width - 2) + '+';
  var emptyLine = '|' + ' '.repeat(width - 2) + '|';
  var wordsLines = wrapString(string, width).map(function(line) {
    return ('|' + ' ' + line + ' ' + '|');
  }).join("\n")

  var lines = [lintelLine, emptyLine, wordsLines, emptyLine, lintelLine];
  console.log(lines.join("\n"));
}

function wrapString(string, width) {
  var subStr = '';
  var lines = [];

  string.split(' ').forEach(function(word) {
    if ((subStr + word).length <= (width - 4)) {
      subStr += (word + ' ');
    } else {
      lines.push(subStr.trim().padEnd(width - 4));
      subStr = word + ' ';
    }
  })

  lines.push(subStr.trim().padEnd(width - 4)); // push the last subStr
  return lines;
}

var shortStr = 'To boldly go where no one has gone before.';
var longStr =
'Unlike other automakers, Tesla does not use individual large battery cells, but\
thousands of small, cylindrical, lithium-ion commodity cells like those used in \
consumer electronics. It uses a version of these cells that is designed to be ch\
eaper to manufacture and lighter than standard cells by removing some safety fea\
tures. According to Tesla, these features are redundant because of the advanced \
thermal management system and an intumescent chemical in the battery to prevent \
fires.';

logInBox('');
logInBox(shortStr);
logInBox(longStr, 30);
logInBox(longStr, 50);

// further
// give a fixe width, if not given,  default to 76 (80 - 2 -2)
// process input string => return an array of one or more strings
  // how to split one string into multiple strings without breaking any words
// > 'I am a robot.'.lastIndexOf(' ');
// 6

//
// split the string into single words
// initialize a subStr = ''
// initialize an empty array to hold lines = []
// iterate through words one by one
//   if subStr's length plus current word's length <= given length
//     push current word to subStr
//   else
//     push subStr to lines array
//     reset subStr to current word + ' '
// return lines array

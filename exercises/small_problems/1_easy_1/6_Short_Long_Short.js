function shortLongShort(a, b) {
  var one = a + b + a
  var two = b + a + b

  var lengthOne = one.length;
  var lengthTwo = two.length;

  lengthOne > lengthTwo ? return two : return one;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

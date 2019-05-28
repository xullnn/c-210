function concatenate(args) {
  var newArr = arguments[0].slice();

  for(var i = 1; i < arguments.length; i += 1) {
    arg = arguments[i];
    if (Array.isArray(arg)) {
      arg.forEach((e) => newArr.push(e));
    } else {
      newArr.push(arg);
    }
  }

  return newArr;
}

concatenate([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concatenate([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concatenate([1, 2], ['three'], 4);               // [1, 2, "three", 4]

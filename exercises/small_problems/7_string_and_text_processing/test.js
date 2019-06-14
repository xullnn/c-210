function foo(list) {
  return list.map(function (word) {
    return word.match(/[aeiou]/ig) || [];
  }).reduce(function (acc, letterList) {
    return acc + letterList.length;
  }, 0);
}



foo(['apple', 'banana', 'orange'])
foo(['cart', 'truck', 'cart', 'train'])
foo(['a', 'b', 'c'])
foo(['a', 'e', 'i', 'o', 'u'])

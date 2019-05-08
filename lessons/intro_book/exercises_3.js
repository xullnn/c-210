let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(src, keys = []) {
  let dup = {}
  if (keys.length === 0 ) { keys = Object.keys(src) }
  keys.forEach(function(key) {
    dup[key] = src[key]
  })
  return dup
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

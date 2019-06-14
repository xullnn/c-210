if (true) { let a = 1 };

console.log(a);

try {

} catch(error) {

} finally {

}


function isEmpty(value) {
  var type = typeof value;

  if (type === 'string' || Array.isArray(value)) {
    return value.length === 0;
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}

isEmpty({});                  // true
isEmpty({ name: 'Janice' });  // false

isEmpty('');                  // true
isEmpty('Janice');            // false

isEmpty([]);                  // true
isEmpty(['Janice']);          // false

var arr = [];
arr['a'] = 'hello';
isEmpty(arr)                  // true
arr.push('world')
isEmpty(arr)                  // false

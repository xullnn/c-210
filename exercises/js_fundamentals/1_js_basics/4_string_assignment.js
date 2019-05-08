var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);

// - after first 2 lines, `name` and `saveName` are both pointing to string `'Bob'`
// - line 3 `name` is reassigned to `'Alice'`
// - so `name` now is pointing to `'Alice'` and `saveName` is still pointing to `'Bob'`

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);

- since primitive types in js are not mutable, so `name.toUpperCase();` just
  return a new string, it doesn't affect the original string
- it's just like we call `'Bob'.toUpperCase()` and get a new upcased string
- `name` is still pointing to 'Bob'

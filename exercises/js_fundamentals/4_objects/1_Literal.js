var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// > myObject[a];
// Thrown:
// ReferenceError: a is not defined

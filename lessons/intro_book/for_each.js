let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function (name) {
  console.log(name);
});

// let add = (a, b) => a + b;
//
// function (name) { console.log(name); }
// this part is an anonymous function passed as an argument to the forEach method
// it's like we pass a block to a method in Ruby

name.forEach((name) => console.log(name));

let greetPeople = () => console.log('Good morning');

let add = (a, b) => a + b;

console.log(add(1, 2));

let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(add(number1, number2));

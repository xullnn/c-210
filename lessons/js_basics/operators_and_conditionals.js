var apple = 3;
var bananas = 5;

if (apple == bananas) {
  console.log('They are the same.');
}

var bananas = '3';

if (apple === bananas && (typeof(bananas) === 'number' ){
  console.log('They are the same.');
}

if (apple === bananas) {
  console.log('They are the same.');
} else {
  console.log('They are different.');
}


if (apple === bananas) {
  console.log('They are the same.');
} else if (apple == bananas) {
  console.log('They contain the same number but they are of different types.')
} else {
  console.log('They are different.');
}

if (apple === bananas) {
  console.log('They are the same.');
} else {
  console.log('They are different.');
    if (apple == bananas) {
      console.log('They contain the same number but they are of different types.')
    } else {
      console.log('Not strictly equal.')
    }
}

var apples = 3;
var bananas = 3;
var areEqual = (apples === bananas);
console.log(areEqual);

var apples = 3;
var bananas = undefined;
var eitherOr = (apples || bananas);
console.log(eitherOr);

var bananas = 1;
var eitherOr = 1;
console.log(eitherOr);
eitherOr = bananas || apples;
console.log(eitherOr);

var lastName = 'xu';
var familyMessage;

lastName === 'xu' ? "You are part of the family" : "You are not family."

// Math Objects
// Use the Math.PI property to create a function that converts radians to degrees.

// full circle: 360 degrees
// full circle perimeter: 2 * pi * 1radian
// so 360 / (2π)



function radianToDegree(radian) {
  return (180 / Math.PI) * radian;
}

// Math.abs();

var a = -180;
console.log(Math.abs(a));

// Math.sqrt();

var n = 16777216;
console.log(Math.sqrt(n));

// Math.pow();

var x = 16;
console.log(Math.pow(x, 6));

// Math.floor() 下
// Math.ceil() 上
// Math.round() 4舍5入

// Math.random()
// min max
// min + round(difference * rand(0<x<1))

function randInteger(min, max) {
  return Math.min(min, max) + Math.round(Math.random() * Math.abs(min - max));
}

randInteger(1,1)
randInteger(2,1)
randInteger(1,11)

var length = Number(prompt('Enter the length of the room in meters:'));
var width = Number(prompt('Enter the width of the room in meters:'));

var area_in_m2 = length * width;
var area_in_feet2 = area_in_m2 * 10.7639;

console.log(`The area of the room is ${area_in_m2} square meters (${area_in_feet2} square feet).`)

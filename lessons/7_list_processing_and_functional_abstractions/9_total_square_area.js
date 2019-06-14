var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  return rectangles.map(rectangle => rectangle[0] * rectangle[1]).reduce((a, b) => a + b);
}

totalArea(rectangles);    // 141

// only calculate squares

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// filter
// map
// reduce

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return squares.map(rectangle => rectangle[0] * rectangle[1]).reduce((a, b) => a + b);
}

totalSquareArea(rectangles);    // 121

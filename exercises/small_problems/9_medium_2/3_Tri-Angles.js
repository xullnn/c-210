function triangle(a, b, c) {
  let angles = Array.prototype.slice.call(arguments);
  if (angles.some(angle => angle <= 0) || angles.reduce((x, y) => x + y) !== 180) {
    return 'invalid';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

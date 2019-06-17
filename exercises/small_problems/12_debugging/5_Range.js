function rangeCore(start, end) {
  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return rangeCore(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// the name of two functions step on each other
// this leads to a recursive call which further leads to a infinite loop

// to fix this, change the name of one function

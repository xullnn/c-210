function logArgs() {
  var args = Array.prototype.slice.call(arguments);
  console.log(typeof args);
  console.log(Array.isArray(args));
  var a = args.pop();
}

logArgs(1, 2);

function sum() {
  result = 0;
  for(let i = 0; i < arguments.length; i += 1) {
    result += arguments[i];
  }

  return result;
}

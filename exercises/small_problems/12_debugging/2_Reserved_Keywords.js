var RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(function (reserved) {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

// This is because in Js, we can't `break` or `return` from a built in abstraction like
  // forEach, map etc.

// If we have the need to perform possible returning or breaking from an iteration
  // we can step a level lower -- use for loop

function isReserved(name) {
  for(let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
    if (name === RESERVED_KEYWORDS[i]) return true;
  }
  return false;
}

// Or, we can simply use `includes`

// the key is how to normalize the arguments
  // handle each argument respectively
    // If either start or end is less than 0 or NaN, treat it as 0.
    // If either start or end is greater than the length of the string, treat it as equal to the string length.
  // based on their relationship, perform further operation
    // If the value of start is greater than end, swap the values of the two, then return the substring as described above.
// If start is equal to end, return an empty string.
// If end is omitted, the end variable inside the function isundefined. Return the substring starting at position start up through (and including) the end of the string.
// If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).

// Number.isNaN();

function substring(string, start, end) {
  newStr = ''
  if (start < 0 || Number.isNaN(start)) start = 0;
  if (end < 0 || Number.isNaN(end)) end = 0;
  if (start > string.length) start = string.length;
  if (end > string.length) end = string.length;
  if (start > end) {
    x = start;
    y = end;
    start = y;
    end = x;
  }
  if (end === undefined) end = string.length;
  if (start === end) {
    return newStr;
  } else {
    for(var i = start; i < end; i += 1) {
      newStr += string[i]
    }
  }
  return newStr;
}

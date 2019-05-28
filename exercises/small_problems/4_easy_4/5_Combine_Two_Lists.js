function interleave(arr1, arr2) {
  let newArr = [];
  for(let i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }

  return newArr;
}

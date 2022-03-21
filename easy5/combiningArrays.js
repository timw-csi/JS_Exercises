function union(array1, array2) {
  let combinedArray = array1.concat(array2);
  let uniqueValueArray = [];

  combinedArray.forEach(val => {
    if (!uniqueValueArray.includes(val)) {
      uniqueValueArray.push(val);
    }
  });

  return uniqueValueArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
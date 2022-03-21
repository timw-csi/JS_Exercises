function multiplyAllPairs(arr1, arr2) {
  let results = [];

  arr1.forEach(elm1 => {
    arr2.forEach(elm2 => {
      return results.push(elm1 * elm2);
    });
  });

  return results.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
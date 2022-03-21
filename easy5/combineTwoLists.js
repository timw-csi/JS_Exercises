function interleave(array1, array2) {
  let wovenArray = [];

  // for (let index = 0; index < array1.length; index += 1) {
    // wovenArray[index * 2] = array1[index];
  // }
// 
  // for (let index = 0; index < array2.length; index += 1) {
    // wovenArray[(index * 2) + 1] = array2[index];
  // }

  array1.forEach((val, index) => {
    wovenArray[index * 2] = array1[index];
  });

  array2.forEach((val, index) => {
    wovenArray[(index * 2) + 1] = array2[index];
  });

  return wovenArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
function multiplyList(array1, array2) {
  let productArray = [];

  array1.forEach((_, index) => {
    productArray.push(array1[index] * array2[index]);
  });

  return productArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
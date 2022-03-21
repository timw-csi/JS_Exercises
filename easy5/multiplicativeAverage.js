function multiplicativeAverage(array) {
  let productVal = array.reduce((prevVal, curVal) => prevVal * curVal);

  let average = productVal / array.length;

  let result = average.toFixed(3);
  console.log(typeof result);
  return result;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
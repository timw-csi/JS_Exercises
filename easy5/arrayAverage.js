function average(array) {
  let total = array.reduce((prevVal, curVal) => prevVal + curVal);

  let average = Math.floor(total / array.length);

  console.log(average);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
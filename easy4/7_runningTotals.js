function runningTotal(array) {
  //let runningTotalArray = [];
  let sum = 0;

  /*for (let index = 0; index < array.length; index += 1) {
    let subArray = array.slice(0, [index + 1]);
    let runningTotalSum = subArray.reduce((a, b) => a + b);
    runningTotalArray.push(runningTotalSum);
  }
  */
  /*array.reduce(function(previousVal, currentVal) {
    let runningTotalSum = previousVal + currentVal;
    runningTotalArray.push(runningTotalSum);
    return runningTotalSum;
  }, 0
  );
  */

  let runningTotalArray = array.map(elm => (sum += elm));

  return runningTotalArray;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
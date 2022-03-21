/*function sumOfSums(array) {
  let total = 0;
  for (let counter = 1; counter <= array.length; counter++) {
    total += array.slice(0, counter).reduce((a, b) => a + b);
  }

  return total;
}
*/

function sumOfSums(numbers) {
  return numbers.map((_, index) =>
    numbers.slice(0, index + 1).reduce((a, b) => a + b))
    .reduce((a, b) => a + b);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
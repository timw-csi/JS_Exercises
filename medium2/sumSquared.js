function sumSquareDifference(count) {
  let sumSquared = [];
  let squaredCount = [];

  for (let number = 1; number <= count; number++) {
    sumSquared.push(number);
    squaredCount.push(number ** 2);
  }

  sumSquared = (sumSquared.reduce((total, value) => total + value)) ** 2;
  squaredCount = squaredCount.reduce((total, value) => total + value);

  return sumSquared - squaredCount;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
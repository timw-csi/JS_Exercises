function findFibonacciIndexByLength(num) {
  const digiLimit = 10n ** (num - 1n);
  const fibArray = [0n, 1n, 1n, 2n, 3n, 5n, 8n];
  let length = BigInt(fibArray.length);
  let nextFib = BigInt((fibArray[length - 2n]) + (fibArray[length - 1n]));

  do {
    nextFib = BigInt((fibArray[length - 2n]) + (fibArray[length - 1n]));
    fibArray.push(nextFib);
    length = BigInt(fibArray.length);
  }  while (nextFib < digiLimit);

  return length - 1n;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
/* Book solution much simpler. Doesn't use arrays, just converts num to string and gets .length
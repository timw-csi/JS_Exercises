function fibonacci(nth) {
  const fibResults = {};

  fibResults[1] = 1;
  fibResults[2] = 1;

  for (let counter = 3; counter <= nth; counter++) {
    fibResults[counter] = fibResults[counter - 2] + fibResults[counter - 1];
  }

  return fibResults[nth];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

/*
BOOK ANSWER. more elegant, less resource intensive than mine.

function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

*/
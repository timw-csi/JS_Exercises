let fibResults = {};

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (fibResults[nth]) {
    return fibResults[nth];
  } else {
    fibResults[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return fibResults[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(35));
console.log(fibonacci(50));
console.log(fibonacci(60));
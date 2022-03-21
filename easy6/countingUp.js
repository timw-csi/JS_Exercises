function sequence(integer) {
  let intArray = [];

  for (let counter = 1; counter <= integer; ++counter) {
    intArray.push(counter);
  }

  return intArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
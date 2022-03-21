function multisum(number) {
  let total = 0;
  for (let tally = 1; tally <= number; tally += 1) {
    if (tally % 3 === 0 || tally % 5 === 0) {
      total += tally;
    } else continue;
  }
  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
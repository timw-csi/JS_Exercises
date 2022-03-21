function maxRotation(number) {
  let numberOfDigits = String(number).length;
  for (let count = numberOfDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
}


function rotateRightmostDigits(number, count) {
  let numStr = String(number);

  let firstHalf = numStr.slice(0, (numStr.length - count));
  let secondHalf = numStr.slice(-count);

  let rotatedNum = firstHalf + rotateString(secondHalf);

  return Number(rotatedNum);
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
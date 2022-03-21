const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString (int) {
  let result = '';

  do {
    let remainder = int % 10;
    int = Math.floor(int / 10);

    result = DIGITS[remainder] + result;
  } while (int > 0);

  return result;
}

function signedIntegerToString(number) {
  if (Math.sign(number) === -1) {
    return '-' + integerToString(-number);
  } else if (Math.sign(number) === 1) {
    return '+' + integerToString(number);
  } else return '0';
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
let multiply = (num1, num2) => num1 * num2;

let square = num => multiply(num, num);

/* function square(num) {
  return multiply(num, num);
} */

/* let square = function (num) {
  return num ** 2;
} */

/* function expon(number, power) {
  if (power === 1) {
    return number;
  } else if (power === 2) {
    return square(number);
  } else {
  let final = square(number) * (number ** (power - 2));
  return final;
  }
} */

function expon(number, power) {
  if (power === 1) {
    return number;
  } else {
    // return number * (number ** (power - 1));
    return multiply(number, expon(number, power - 1));
  }
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(expon(3, 3));
console.log(expon(3, 2));
console.log(expon(2, 8));
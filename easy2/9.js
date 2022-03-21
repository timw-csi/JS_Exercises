/*function stringToInteger(string) {
  return +string;
}
*/

/* function stringToInteger(string) {
  let newNum = [];
  let numList = {
    0:    0,
    1:    1,
    2:    2,
    3:    3,
    4:    4,
    5:    5,
    6:    6,
    7:    7,
    8:    8,
    9:    9,
  };
  for (let i = 0; i < string.length; i += 1) {
    let currentNum = numList[string.charAt(i)];
    newNum.push(currentNum);
  }
  return ;
} */

// Man I really struggled with this one. Book Answer:

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger('123'));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/* BONUS:
Write a hexadecimalToInteger() function that converts a string representing a hexadecimal
number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and
the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal 
values of 10-15.

Example:

hexadecimalToInteger('4D9f') === 19871;


function hexadecimalToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let arrayOfDigits = string.toLowerCase().split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger('4D9f')); // === 19871;

*/
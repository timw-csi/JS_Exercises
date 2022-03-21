//function invalidNumber(number) {
//  return number <= 0 || Number.isNaN(number);
//}

function sum(targetNum) {
  let total = 0;
  for (let counter = 1; counter <= targetNum; counter += 1) {
    total += counter;
  }
  return total;
}

//Further exploration. If input was array of numbers SUM

function sumArray(array) {
  array = Array.from(array);
  return array.reduce((total, currentVal) => total + currentVal, []);
}

function product(targetNum) {
  let total = 1;
  for (let counter = 1; counter <= targetNum; counter += 1) {
    total *= counter;
  }
  return total;
}

const rlSync = require('readline-sync');

let number = rlSync.question("Please enter an integer greater than 0.\n");
//number = Number(number);

//while (invalidNumber(number)) {
//  number = Number(rlSync.question("Please enter an INTEGER GREATER than 0.\n"));
//}

let operation = rlSync.question("Enter 's' to compute the sum, or 'p' to compute the product.\n");


switch (operation) {
  case 's':
    console.log(`The sum of the integers between 1 and ${number} is ${sum(number)}.`);
    break;
  case 'p':
    console.log(`The product of the integers between 1 and ${number} is ${product(number)}.`);
    break;
  case 'arraySum':
    console.log(`The sum of the integers in your array is ${sumArray(number)}.`);
}
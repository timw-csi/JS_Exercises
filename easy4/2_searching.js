/* Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
*/

const RL = require('readline-sync');

let numArray = [];

let num1 = numArray.push(Number(RL.question('Enter the 1st number: ')));
let num2 = numArray.push(Number(RL.question('Enter the 2nd number: ')));
let num3 = numArray.push(Number(RL.question('Enter the 3rd number: ')));
let num4 = numArray.push(Number(RL.question('Enter the 4th number: ')));
let num5 = numArray.push(Number(RL.question('Enter the 5th number: ')));

let specialNum = Number(RL.question('Enter the last number: '));


function numberAppears(num) {
  return numArray.includes(num);
}

if (numberAppears(specialNum)) {
  console.log(`The number ${specialNum} appears in ${numArray}.`);
} else {
  console.log(`The number ${specialNum} does not appear in ${numArray}.`);
}

if (numArray.some(val => val > specialNum)) {
  console.log(`At least one number in ${numArray} is greater than ${specialNum}.`);
} else console.log(`There are no numbers in ${numArray} larger than ${specialNum}.`);
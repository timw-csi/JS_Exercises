function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));


/* Official solution

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

In JavaScript, the remainder operator returns negative results if the number on the left 
is negative. For that reason, we need to call Math.abs() function and pass the number as 
the argument, to convert it to a positive value. Then, we can check whether dividing that 
number by 2 results in a remainder 1 or not.
*/

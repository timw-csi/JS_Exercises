let end, start;


function featured(number) {
  const MAX_FEAT_NUM = 9876543201;
  let result;

  for (let featNum = number + 1; featNum <= MAX_FEAT_NUM; featNum += 1) {
    if (isOdd(featNum) && multipleOfSeven(featNum)
     && allDigitsUnique(featNum)) {
      result = featNum;
      break;
    }
  }

  if (result) {
    return result;
  } else return "There is no possible number that fulfills those requirements.";
}

function isOdd(number) {
  return number % 2 === 1;
}

function multipleOfSeven(number) {
  return number % 7 === 0;
}

function allDigitsUnique(number) {
  let numArray = String(number).split('');
  let prevDigits = [];

  for (let idx = 0; idx < numArray.length; idx += 1) {
    if (prevDigits.includes(numArray[idx])) return false;
    else prevDigits.push(numArray[idx]);
  }
  //number.toString()
  //  .split('')
  //  .forEach(digit => {
  //    if (!prevDigits.includes(digit)) {
  //      prevDigits.push(digit);
  //    } else status = false;
  //  });

  return true;
}

start = new Date();

console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

end = new Date();
console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
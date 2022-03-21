let start, end;

function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

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
function twice(number) {
  let strNum = String(number);
  let strLength = strNum.length;
  const halfCompare = strNum.slice(0, (strLength / 2)) === strNum.slice((strLength / 2));

  if (halfCompare) {
    return number;
  } else return number * 2;

/* if (strLength % 2 !== 0) {
    return number * 2;
  } else if (halfCompare) {
    return number;
  } else return number * 2;
  */
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

/* lol:

  if (strLength % 2 === 0 && (strNum.slice(0, ((strLength / 2) - 1)) === strNum.slice((strLength / 2)))) {
    return number;
  } else return number * 2;
}

*/
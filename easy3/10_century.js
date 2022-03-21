function century(year) {
  let cent;
  let ending;


  if (year % 100 === 0) {
    cent = Math.floor(year / 100);
  } else cent = Math.floor(year / 100) + 1;

  let strCent = String(cent);

  if (strCent[strCent.length - 1] === '1' && strCent[strCent.length - 2] !== '1') {
    ending = 'st';
  } else if (strCent[strCent.length - 1] === '2' && strCent[strCent.length - 2] !== '1') {
    ending = 'nd';
  } else if (strCent[strCent.length - 1] === '3' && strCent[strCent.length - 2] !== '1') {
    ending = 'rd';
  } else ending = 'th';

  return `${cent}${ending}`;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
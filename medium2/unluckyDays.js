
function fridayThe13ths(year) {
  const DAY = 13;
  const MONTHS = [
    'January',   'February',
    'March',     'April',
    'May',       'June',
    'July',      'August',
    'September', 'October',
    'November',  'December'
  ];

  let fridayCounter = 0;

  MONTHS.forEach(month => {
    let date = new Date(`${month} ${DAY}, ${year}`).toString();
    let dayOfWeek = date.split(' ')[0];
    //let dayOfWeek = date.getDay();

    //if (dayOfWeek === 5) {
    //  fridayCounter += 1;
    //}
    if (dayOfWeek === 'Fri') {
      fridayCounter += 1;
    }
  });

  return fridayCounter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
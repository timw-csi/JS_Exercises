const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  let hours = timeToNumber(time, 0);
  let minutes = timeToNumber(time, 1);

  let totalMinutes = ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;

  return totalMinutes;
}

function beforeMidnight(time) {
  let hours = timeToNumber(time, 0);
  let minutes = timeToNumber(time, 1);

  let totalMinutes = ((hours * MINUTES_PER_HOUR) - minutes) % MINUTES_PER_DAY;

  return totalMinutes;
}

function timeToNumber(string, index) {
  let time = string.split(':');

  return Number(time[index]);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
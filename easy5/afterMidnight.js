const POSITIVE_MIDNIGHT_HOUR = 0;
const POSITIVE_MIDNIGHT_MINUTES = 0;
const NEGATIVE_MIDNIGHT_HOUR = 24;
const NEGATIVE_MIDNIGHT_MINUTES = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

function timeOfDay(minutes) {
  let inputHours = (Math.floor(minutes / MINUTES_IN_HOUR)) % HOURS_IN_DAY;
  let calculatedHours;
  let calculatedMinutes = minutes % MINUTES_IN_HOUR;

  if (minutes > 0) {
    calculatedHours = POSITIVE_MIDNIGHT_HOUR + inputHours;
    calculatedMinutes = POSITIVE_MIDNIGHT_MINUTES + calculatedMinutes;
  } else {
    calculatedHours = NEGATIVE_MIDNIGHT_HOUR + inputHours;
    calculatedMinutes = NEGATIVE_MIDNIGHT_MINUTES + calculatedMinutes;
  }

  let formattedHours = stringify(calculatedHours);
  let formattedMinutes = stringify(calculatedMinutes);

  return `${formattedHours === '24' ? '00' : formattedHours}:${formattedMinutes === '60' ? '00' : formattedMinutes}`;
}

function stringify(time) {
  if (time < 10) {
    time = '0' + String(time);
  } else time = String(time);

  return time;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
const MINUTES_IN_DEGREE = 60;
const SECONDS_IN_MINUTE = 60;

function dms (angle) {
  angle = parseFloat(angle);

  let degrees = Math.floor(angle);
  let minutes = (angle % 1) * MINUTES_IN_DEGREE;
  let seconds = (minutes % 1 ) * SECONDS_IN_MINUTE;

  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  return `${degrees}˚${(minutes < 10) ? '0' + minutes : minutes}'${(seconds < 10) ? '0' + seconds : seconds}"`;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


//Futher Exploration
// You could set the float to the value of float % 360. 
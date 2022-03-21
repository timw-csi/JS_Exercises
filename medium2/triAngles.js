function triangle(angle1, angle2, angle3) {
  let angleArray = [angle1, angle2, angle3];

  if (validTriangle(angleArray)) {
    return triangleType(angleArray);
  } else return 'invalid';
}


function validTriangle(angleArray) {
  const totalAngle = angleArray.reduce((total, angle) => total + angle);
  const allNonZero = angleArray.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function triangleType(angleArray) {
  if (angleArray.every(testAcuteAngle)) return 'acute';
  else if (angleArray.some(testRightAngle)) return 'right';
  else return 'obtuse';
}

function testAcuteAngle(angle) {
  return angle < 90;
}

function testRightAngle(angle) {
  return angle === 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
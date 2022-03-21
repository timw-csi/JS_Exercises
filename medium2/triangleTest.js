function triangle (_) {
  let [short, mid, long] = [...arguments].sort((a, b) => a - b);

  if (((short + mid) <= long) || short <= 0) return 'invalid';
  else if (short === long) return 'equilateral';
  else if ((short === mid) || (mid === long)) return 'isosceles';
  else return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
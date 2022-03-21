const triangle = function (n) {
  for (let idx = 1; idx <= n; idx += 1) {
    console.log(' '.repeat(n - idx) + '*'.repeat(idx));
  }
};

triangle(5);
triangle(9);

/* book solution (I actually like mine more, but height is more descriptive than n):

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

*/
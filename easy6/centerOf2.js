function centerOf(string) {
  let length = string.length;

  if (length % 2 === 1) {
    console.log(string[(length - 1) / 2]);
  } else console.log(string.substring(((length / 2) - 1), ((length / 2) + 1)));
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
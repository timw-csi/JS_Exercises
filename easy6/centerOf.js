function centerOf(string) {
  let length = string.length;

  if (length % 2 === 0) {
    console.log(string.slice(((length / 2) - 1), ((length / 2) + 1)));
  } else console.log(string.slice((length / 2) , ((length / 2) + 1)));
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
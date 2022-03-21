/* function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 1; index <= string.length; index++) {
    substrings.push(string.substring(0, index));
  }

  return substrings;
}
*/

//Further Exploration w/ reduce
/*function leadingSubstrings(string) {
  let stringArray = string.split('');
  let substrings = [];

  stringArray.reduce((prevChar, currentChar) => {
    substrings.push(prevChar + currentChar);
    return prevChar + currentChar;
  }, '');


  return substrings;
}*/

function leadingSubstrings(string) {
  let substrings = string.split('').map((_, index, self) => {
    return self.slice(0, index + 1).join('');
  });

  return substrings;
}

//Studen further exploration
/*
function leadingSubstrings(str) {
  let regex;

  return Array.from({length: str.length}, ((_, i) => {
    regex = new RegExp(`(.){${i + 1}}`);
    return str.match(regex)[0];
  }));
}
*/

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
/* function staggeredCase(string) {
  let lowerChar = false;

  return string
    .split('')
    .map(char => {
      if (isAlpha(char)) {
        if (lowerChar === true) {
          lowerChar = false;
          return char.toLowerCase();
        } else {
          lowerChar = true;
          return char.toUpperCase();
        }
      } else return char;
    })
    .join('');
}

function isAlpha(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

*/

//FURTHER EXPLORATION


function staggeredCase(string, nonAlphaCharsCount = true) {

  if (nonAlphaCharsCount) return staggeredCaseA(string);
  else return staggeredCaseB(string);
}

function isAlpha(char) {
  return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
}

function staggeredCaseA(string) {
  console.log(string
    .split('')
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else return char.toLowerCase();
    })
    .join(''));
}

function staggeredCaseB(string) {
  let lowerChar = false;

  console.log( string
    .split('')
    .map(char => {
      if (isAlpha(char)) {
        if (lowerChar === true) {
          lowerChar = false;
          return char.toLowerCase();
        } else {
          lowerChar = true;
          return char.toUpperCase();
        }
      } else return char;
    })
    .join(''));
}

staggeredCase('I Love Launch School!', false);        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
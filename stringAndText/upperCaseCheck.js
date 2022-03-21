/*function isUppercase(string) {
  string = string.split('');

  let alphaArray = string.filter(letter => {
    return letter.toLowerCase() >= 'a' && letter.toLowerCase() <= 'z';
  });

  console.log(alphaArray.every(letter => letter >= 'A' && letter <= 'Z'));
}
*/

function isUppercase(string) {
  console.log(string.toUpperCase() === string);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
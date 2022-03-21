//way too fuckin complicated. simple loop, no arrays will do.\
//EDIT: Mary did it! See below. I added .join statement at end to put return value
// to string, instead of array.

function crunch(string) {
  let origArray = string.split('');

  let newArray = origArray.reduce(function (prevCharacter, currentCharacter) {
    if (currentCharacter !== prevCharacter[prevCharacter.length - 1]) {
      prevCharacter.push(currentCharacter);
      return prevCharacter;
    } else return prevCharacter;
  }, []);

  return newArray.join('');
}

/* function crunch(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index + 1]) {
      newString += string[index];
    }
  }

  return newString;
} */

//attempt using regex
// use global match. if length of returned array is greater than 1,
// shift it out of array. if it's 1, append it to newString.

/* function crunch(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    //let regEx = string[index];
    let re = new RegExp(string[index], 'g');
    if (string.match(re).length > 1) {
      string.match(re).shift();
    } else if (string.match(/string[index]/g).length === 1) {
      newString += string[index];
    }
  }
  return newString;
}
*/

//example from Mary McDonald
/*
function crunch(str) {
  let arr = str.split('');

  let newArr = arr.reduce((prev, current) => {
    if (prev[prev.length - 1] === current) {
      return prev;
    } else {
      prev.push(current);
      return prev;
    }
  }, []);

  return newArr.join('');
}
*/

console.log(crunch('yoooooyyyyyoooo'));
console.log(crunch('ddaaiillyy ddoouubbllee'));   // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

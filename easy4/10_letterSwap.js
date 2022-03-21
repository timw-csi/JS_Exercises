function swap(sentence) {
  sentence = sentence.split(' ');
  let swappedWords = sentence.map(word => swapFirstLastCharacters(word));

  return swappedWords.join(' ');
}

//separating my big bulky one function into two, more focused functions

function swapFirstLastCharacters(word) {
  let length = word.length;

  if (length === 1) {
    return word;
  } else {
    let newWord = word[length - 1] + word.slice(1, length - 1) + word[0];
    return newWord;
  }
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
function reverseWords(string) {
  let arrayOfWords = string.split(' ');

  let arrayOfReversedWords = arrayOfWords.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else return word;
  });

  console.log(arrayOfReversedWords.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
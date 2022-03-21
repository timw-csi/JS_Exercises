function wordToDigit (string) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let digitizedSentence = string
    .split(' ')
    .map(word => {
      let periodRemoved = word.slice(0, -1);

      if (NUMBER_WORDS.includes(word)) {
        return NUMBER_WORDS.findIndex(numberWord => numberWord === word);
      } else if (NUMBER_WORDS.includes(periodRemoved)) {
        return NUMBER_WORDS.findIndex(numberWord => numberWord === periodRemoved) + '.';
      } else return word;
    })
    .join(' ');

  return digitizedSentence;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
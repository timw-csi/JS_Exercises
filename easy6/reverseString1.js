let reverseSentence = function (string) {
  string = string.toLowerCase().split(' ').reverse().join(' ');

  console.log(string.substring(0, 1).toUpperCase() + string.substring(1));
};

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
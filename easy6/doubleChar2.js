function doubleConsonants(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let doubledString = string.split('').map(char => {
    if ((char.toLowerCase() > 'a' && char.toLowerCase() < 'z') && !vowels.includes(char.toLowerCase())) {
      return char + char;
    } else return char;
  });

  console.log(doubledString.join(''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
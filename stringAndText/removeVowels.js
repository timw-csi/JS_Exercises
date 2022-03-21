function removeVowels(stringArray) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let result = stringArray
    .map(string => string.split('')
                         .filter(char => !(vowels.includes(char.toLowerCase())))
                         .join('')
    );

  console.log(result);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
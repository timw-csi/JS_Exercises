function isRealPalindrome(string) {
  string = string.toLowerCase()
                     .split('')
                     .filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))
                     .join('');
  console.log(string);                 

  return isPalindrome(string);
}

function isPalindrome(string) {
  let reverseCopy = string.split('')
                          .reverse()
                          .join('');
  console.log(reverseCopy);                        

  return string === reverseCopy;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
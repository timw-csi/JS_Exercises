function palindromes(string) {
  return substrings(string).filter(filterPals);
}

function filterPals(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function substrings(string) {
  let substringNestedArray = string.split('').map((_, index, self) => {
    let substring = self.slice(index, self.length).join('');
    return leadingSubstrings(substring);
  });

  let finalResults = substringNestedArray.reduce((prevArr, currArr) => {
    return prevArr.concat(currArr);
  });

  return finalResults;
}

function leadingSubstrings(string) {
  let substrings = string.split('').map((_, index, self) => {
    return self.slice(0, index + 1).join('');
  });

  return substrings;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
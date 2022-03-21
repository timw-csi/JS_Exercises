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

console.log(substrings('abcde'));

// returns
/*
 [ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
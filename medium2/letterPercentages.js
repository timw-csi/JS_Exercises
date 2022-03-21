/* function letterPercentages(string) {
  let caseObj = {
    upper:     0,
    lower:     0,
    neither:   0,
  };

  const LENGTH = string.length;

  string = string
    .split('')
    .forEach(char => {
      if (char >= 'a' && char <= 'z') {
        caseObj.lower += 1;
      } else if (char >= 'A' && char <= 'Z') {
        caseObj.upper += 1;
      } else {
        caseObj.neither += 1;
      }
    });

  caseObj.lower = computeAverage(caseObj.lower, LENGTH);
  caseObj.upper = computeAverage(caseObj.upper, LENGTH);
  caseObj.neither = computeAverage(caseObj.neither, LENGTH);

  return caseObj;
}

function computeAverage(count, length) {
  return ((count / length) * 100).toFixed(2);
}
*/

function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = (string.match(regex) || []).length;
    return ((matchingChars / count) * 100).toFixed(2);
  }
  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi)
  };

}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
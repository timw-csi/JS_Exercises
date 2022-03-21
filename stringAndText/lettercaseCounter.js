function letterCaseCount(string) {
  const CASE_RECORD = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      CASE_RECORD.uppercase += 1;
    } else if (char >= 'a' && char <= 'z') {
      CASE_RECORD.lowercase += 1;
    } else CASE_RECORD.neither += 1;
  });

  console.log(CASE_RECORD);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
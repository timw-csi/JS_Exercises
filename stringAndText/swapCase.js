function swapCase(string) {
  let swappedStr = '';

  string.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      swappedStr += char.toLowerCase();
    } else if (char >= 'a' && char <= 'z') {
      swappedStr += char.toUpperCase();
    } else swappedStr += char;
  });

  console.log(swappedStr);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
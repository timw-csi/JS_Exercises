//look back at regex solution

/*function cleanUp(sentence) {
  sentence = sentence.toLowerCase();
  let cleanArr = [];
  sentence.split('').reduce((prevChars, currentChar) => {
    if (currentChar >= "a" && currentChar <= "z") {
      cleanArr.push(currentChar);
    } else if (prevChars[prevChars.length - 1] !== ' ') {
      cleanArr.push(' ');
    }
    return cleanArr;
  }, []);
  return cleanArr.join('');
}*/

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("*****"));                     // " "
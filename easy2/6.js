/*function penultimate (string) {
  let strArray = string.split(' ');
  return strArray[strArray.length - 2];
}*/

console.log(penultimate("last word")); // === "last"); // logs true
console.log(penultimate("Launch School is great!")); //=== "is"); // logs true
console.log(penultimate("well howdy dang do dime a dabble dally whacker"));
//Further exploration

function penultimate (string) {
  if (string.length <= 1) {
    console.log("Needs to be 2 words or longer.");
  } else {
    let strArray = string.split(' ');
    let midWord = Math.round((strArray.length / 2) - 1);
    return strArray[midWord];
  }
}
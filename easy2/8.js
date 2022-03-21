/* function oddities(array) {
  let odd = [];
  for (let i = 0; i < array.length; i += 2) {
    odd.push(array[i]);
  }
  return odd;
}*/


/* function oddities(array) {
  let odd = array.filter(elm => array.indexOf(elm) % 2 === 1);
  return odd;
} */

// Solution from Elaine Vuong
// let oddities = array => array.filter((_elm, index) => index % 2 === 0);

// Solution from Jason Aricheta
function oddities(arry) {
  return arry.filter((_,ind) => !(ind % 2));
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
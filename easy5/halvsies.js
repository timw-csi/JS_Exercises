function halvsies(array) {
  let halvsiesArray = [];
  let half = array.length / 2;

  if (array.length % 2 === 0) {
    halvsiesArray[0] = array.slice(0, half);
    halvsiesArray[1] = array.slice(half);
  // } else if (array.length === 1) {
    // halvsiesArray[0] = array.slice();
    // halvsiesArray[1] = [];
  } else {
    halvsiesArray[0] = array.slice(0, Math.round(half));
    halvsiesArray[1] = array.slice(Math.round(half));
  }

  return halvsiesArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

//from MDN
/* If start is greater than the index range of the sequence, 
an empty array is returned.

If end is greater than the length of the sequence, slice extracts
 through to the end of the sequence (arr.length).

 This is why we don't need the commented out lines for halvsies([5]) to work.

*/
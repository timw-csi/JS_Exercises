/*function countOccurrences(arrayOfThings) {
  let thingOccurences = {};

  arrayOfThings.forEach(val => {
    if (!thingOccurences[val]) {
      thingOccurences[val] = 1;
    } else thingOccurences[val] += 1;
  });

  for (let thing in thingOccurences) {
    console.log(`${thing} => ${thingOccurences[thing]}`);
  }
}

*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
             

function countOccurrences(arr) {
  let seenObj = {};
  arr.forEach(vehicle => seenObj[vehicle]++ || (seenObj[vehicle] = 1));

  for(let prop in seenObj) console.log(`${prop} => ${seenObj[prop]}`);
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
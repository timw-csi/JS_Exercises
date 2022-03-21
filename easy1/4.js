let rlSync = require('readline-sync');

//Further Exploration
units = ['meters', 'feet'],
index = rlSync.keyInSelect(units, "Which unit?");
//FE

console.log("Enter the length of the room in meters:");
let length = rlSync.prompt();

console.log("Enter the width of the room in meters:");
let width = rlSync.prompt();

let areaInMeters = (length * width).toFixed(2);
let sqft = (areaInMeters * 10.7639).toFixed(2);

// Further Exploration 
if (units[index] === 'meters') {
  console.log(`The area of the room is ${areaInMeters} square meters (${sqft} square feet).`);
} else {
  console.log(`The area of the room is ${sqft} square feet (${areaInMeters} square meters).`);
}
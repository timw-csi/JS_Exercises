let rlSync = require('readline-sync');

console.log("What is the bill?");
let bill = rlSync.prompt();
bill = parseFloat(bill, 10);

console.log("What is the tip percentage?");
let tipPercent = rlSync.prompt();
tipPercent = (parseFloat(tipPercent, 10) / 100);

let tip = (tipPercent * bill);
// don't need below line (already parseFloated both figures)
//tip = parseFloat(tip, 10);

let totalBill = (bill + tip);
totalBill = parseFloat(totalBill, 10);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${totalBill.toFixed(2)}`);


/* OFFICIAL SOLUTION

let readlineSync = require("readline-sync");

let bill = parseFloat(readlineSync.question("What is the bill?\n"));

let percentage = parseFloat(
  readlineSync.question("What is the tip percentage??\n")
);

let tip = bill * (percentage / 100);

let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

*/
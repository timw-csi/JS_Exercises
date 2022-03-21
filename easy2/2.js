const RLSYNC = require("readline-sync");
let name = RLSYNC.question("What is your name? ");
let lastChar = (name.length - 1);

if (name[lastChar] === '!') {
  console.log(`HELLO ${name.slice(0, lastChar).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else console.log(`Hello, ${name}.`);
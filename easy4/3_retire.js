/* noticed that creating a const SPACE = console.log(''); and declaring it at top, then
calling it on line 11 instead logged the space at beginning, right after calling program. 
Then when I just called console.log('') like I did here on 11, it worked fine. Why? Something
to do with hoisting?
*/


const DATE = Number(Date().split(' ')[3]);
const RL = require('readline-sync');


let age = Number(RL.question('What is your age? '));
let retireAge = Number(RL.question('At what age would you like to retire? '));
let wait = retireAge - age;

console.log('');

console.log(`It's ${DATE}. You will retire in ${DATE + wait}.
You have only ${wait} years of work to go!`);
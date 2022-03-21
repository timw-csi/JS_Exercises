/* function isBalanced(string) {
  let charArray = string.split('');
  let leftParenth = 0;
  let rightParenth = 0;
  let firstParenth = charArray.find(char => char === ')' || char === '(');


  charArray.forEach(char => {
    if (char === '(') {
      leftParenth += 1;
    } else if (char === ')') {
      rightParenth += 1;
    }
  });

  if (firstParenth === ')') {
    return false;
  } else return leftParenth === rightParenth;
}
*/


/*function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}
*/

//Cherri student solution
/*
function isBalanced(string) {
  let parenString = string.split('').filter(elem => {
    return (elem === '(' || elem === ')');
  }).join('');

  while (parenString.includes('()')) {
    parenString = parenString.split('()').join('');
  }

  return parenString.length === 0;
}
*/
//My attempt at recreating Cherri's solution

function isBalanced(string) {
  let parenthString = string.split('').filter(char => {
    return (char === '(' || char === ')');
  }).join(''); //originally forgot to add this .join method

  while (parenthString.includes('()')) {
    parenthString = parenthString.split('()').join(''); // also forgot to include assignment at beginning of line
  }

  return parenthString.length === 0;
}
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);



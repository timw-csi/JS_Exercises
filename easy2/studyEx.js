let arr = ['missy'];
let arr2 = ['launch school'];

function pushSomething(arr) {
  arr.push('Tim');
  console.log(arr);
}

pushSomething(arr2);
console.log(arr);
console.log(arr2);

//if arr on line 4 was changed, the shadowing wouldn't happen
// as it is, it's shadowing the variable name, thus
// only making change inside function block
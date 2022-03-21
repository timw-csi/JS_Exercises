function minilang(program) {
  let stack = [];
  let reg = 0;

  const OPERATION_OF = {
    'PUSH'     : () => stack.push(reg),
    'ADD'      : () => reg += stack.pop(),
    'SUB'      : () => reg -= stack.pop(),
    'MULT'     : () => reg *= stack.pop(),
    'DIV'      : () => reg = Math.floor(reg / stack.pop()),
    'REMAINDER': () => reg = reg % stack.pop(),
    'POP'      : () => reg = stack.pop(),
    'PRINT'    : () => console.log(reg),
  };
  const LOAD = (n) => reg = n;

  program.split(' ').forEach((token) => {
    (OPERATION_OF[token] || LOAD)(Number(token));
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)